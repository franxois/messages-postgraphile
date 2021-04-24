create extension if not exists "uuid-ossp";

CREATE SCHEMA app_public;
-- CREATE SCHEMA app_private;

-- after schema creation and before function creation
alter default privileges revoke execute on functions from public;

create role app_anonymous;
create role app_user;
create role app_admin;

grant app_user to app_admin;


grant usage on schema app_public to app_anonymous, app_user;

CREATE TYPE app_public.app_role AS ENUM ('app_admin', 'app_user');

-- table USERS

CREATE TABLE app_public.users (
    id uuid primary key default uuid_generate_v1mc(),
    username varchar unique NOT NULL
      check (char_length(username) < 80 AND char_length(username) > 2 ),
    role app_public.app_role DEFAULT 'app_user',
    created_at timestamptz not null default now()
);

grant select on table app_public.users to app_user;

-- function current_user_id()

create function app_public.current_user_id() returns uuid as $$
  select nullif(current_setting('jwt.claims.user_id', true), '')::uuid
$$ language sql stable;

grant execute on function app_public.current_user_id to app_user;

-- table messages

CREATE TABLE app_public.messages (
    id uuid primary key default uuid_generate_v1mc(),
    title varchar NOT NULL
      CHECK(length(content) < 80),
    content varchar NOT NULL
      CHECK(length(content) > 0 AND length(content) < 1024),
    created_at timestamptz not null default now(),
    sender uuid not null
      REFERENCES app_public.users(id),
    recipient uuid not null
      REFERENCES app_public.users(id)
);

grant select, insert on table app_public.messages to app_user;

alter table app_public.messages enable row level security;
create policy select_message on app_public.messages for select using ( sender = app_public.current_user_id() OR recipient = app_public.current_user_id()  );
create policy create_message on app_public.messages for insert with check ( sender = app_public.current_user_id() );

-- function current_user()

create function app_public.current_user() returns app_public.users as $$
  select *
  from app_public.users
  where id = app_public.current_user_id()
$$ language sql stable;
comment on function app_public.current_user() is 'Gets the user who was identified by our JWT.';

grant execute on function app_public.current_user to app_user;

-- function send_message()

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

grant execute on function app_public.send_message to app_user;

-- function messages_with()

CREATE FUNCTION app_public.messages_with(friend_id uuid)
RETURNS setof app_public.messages
AS $$
  SELECT *
  FROM app_public.messages
  WHERE
    ( sender = friend_id AND recipient = app_public.current_user_id() ) OR
    ( recipient = friend_id AND sender = app_public.current_user_id() )
  ORDER BY created_at DESC
$$ LANGUAGE sql STABLE;

grant execute on function app_public.messages_with to app_user;

-- view pen_friend()

CREATE VIEW app_public.pen_friend
  AS
    SELECT friend_id, max(last_message_date) as last_interaction FROM (
      SELECT * FROM (
          SELECT sender as friend_id, max(created_at) as last_message_date
          FROM app_public.messages
          WHERE recipient = app_public.current_user_id()
          GROUP BY sender
        UNION
          SELECT recipient as friend_id, max(created_at) as last_message_date
          FROM app_public.messages
          WHERE sender = app_public.current_user_id()
          GROUP BY recipient ) as U ) as V
    GROUP BY friend_id
    ORDER BY last_interaction DESC;

GRANT SELECT ON app_public.pen_friend TO app_user;

comment on view app_public.pen_friend is
  E'@foreignKey (friend_id) references app_public.users (id)';
