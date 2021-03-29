create extension if not exists "uuid-ossp";

CREATE SCHEMA app_public;
-- CREATE SCHEMA app_private;

-- after schema creation and before function creation
alter default privileges revoke execute on functions from public;

create role app_anonymous;
create role app_user;


CREATE TYPE app_public.app_role AS ENUM ('app_admin', 'app_user');


CREATE TABLE app_public.users (
    id uuid primary key default uuid_generate_v1mc(),
    username varchar unique NOT NULL
      check (char_length(username) < 80 AND char_length(username) > 2 ),
    role app_public.app_role DEFAULT 'app_user',
    created_at timestamptz not null default now()
);

CREATE TABLE app_public.messages (
    id uuid primary key default uuid_generate_v1mc(),
    title varchar NOT NULL
      CHECK(length(content) < 80),
    content varchar NOT NULL
      CHECK(length(content) > 0 AND length(content) < 1024),
    created_at timestamptz not null default now(),
    sender uuid not null REFERENCES app_public.users,
    recipient uuid not null REFERENCES app_public.users
);

create function app_public.current_user_id() returns uuid as $$
  select nullif(current_setting('jwt.claims.user_id', true), '')::uuid
$$ language sql stable;

create function app_public.current_user() returns app_public.users as $$
  select *
  from app_public.users
  where id = app_public.current_user_id()
$$ language sql stable;
comment on function app_public.current_user() is 'Gets the user who was identified by our JWT.';

CREATE FUNCTION app_public.send_message(
  recipient uuid,
  title text,
  content text)
RETURNS SETOF app_public.messages
AS $$
  INSERT INTO app_public.messages (sender, recipient, title , content)
    VALUES ( app_public.current_user_id() , recipient , title , content )
    RETURNING *;
$$ LANGUAGE sql STRICT VOLATILE;

grant usage on schema app_public to app_anonymous, app_user;

grant execute on function app_public.current_user_id to app_user;
grant execute on function app_public.current_user to app_user;
grant execute on function app_public.send_message to app_user;

grant select, insert on table app_public.messages to app_user;

alter table app_public.messages enable row level security;
create policy select_message on app_public.messages for select using ( sender = app_public.current_user_id() OR recipient = app_public.current_user_id()  );
create policy create_message on app_public.messages for insert with check ( sender = app_public.current_user_id() );

grant select on table app_public.users to app_user;
