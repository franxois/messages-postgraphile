create type app_public.jwt_token as (
  exp integer,
  role app_public.app_role,
  user_id uuid,
  username varchar
);

create function app_public.authenticate(
  username text
) returns app_public.jwt_token as $$
declare
  account app_public.users;
begin
  select a.* into account
    from app_public.users as a
    where a.username = authenticate.username;

  if account.username = authenticate.username then
    return (
      extract(epoch from now() + interval '1 days'),
      account.role,
      account.id,
      account.username
    )::app_public.jwt_token;
  else
    return null;
  end if;
end;
$$ language plpgsql strict security definer;

grant execute on function app_public.authenticate to app_anonymous, app_user;
