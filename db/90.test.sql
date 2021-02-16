-- re-grant execute function for anyone because I have errors with pgTap
alter default privileges grant execute on functions to public;

CREATE EXTENSION IF NOT EXISTS pgtap;

-- TODO : read https://wiki.postgresql.org/wiki/Variable_Design

BEGIN;

\set ON_ERROR_STOP on

-- Plan the tests.
SELECT plan(3);

set local jwt.claims.user_id to '256480ba-58f0-11eb-8838-aaaaaaaaaaaa';

SELECT current_user;  -- user name of current execution context
SELECT session_user;  -- session user name
select current_setting('jwt.claims.user_id');

INSERT into app_public.users ( id, username )
    VALUES ( current_setting('jwt.claims.user_id')::uuid, 'Alice');

\set bob_id '256480ba-58f0-11eb-8838-bbbbbbbbbbbb'
\set charlie_id '256480ba-58f0-11eb-8838-cccccccccccc'

INSERT into app_public.users ( id, username )
    VALUES ( :'bob_id'::uuid , 'Bob'),( :'charlie_id'::uuid , 'Charlie');

select username, is( role , 'app_user' , 'By default new user should have profile app_user' )
from app_public.users
WHERE username != 'admin';

SET role app_user;

select * from app_public.messages ;

-- current user send a message to bob
select * from app_public.send_message( :'bob_id' , 'test', 'test content' );

SELECT results_eq(
    'SELECT * FROM app_public.messages WHERE sender = current_setting(''jwt.claims.user_id'')::uuid',
    'SELECT * FROM app_public.messages LIMIT 1',
    'Only one message should exists and the sender should be Alice'
);

-- same test with is()

SELECT is(
    (app_public.messages.sender,app_public.messages.receiver),
    ROW( current_setting('jwt.claims.user_id')::uuid , :'bob_id'::uuid ),
    'Only one message should exists, from Alice to Bob'
    )
FROM app_public.messages;

-- try to insert with bad authors
PREPARE insert_bad_sender AS INSERT INTO app_public.messages (title,content,sender,receiver) VALUES ( 'declaration' , 'Alice is the best' , :'bob_id'::uuid , :'charlie_id'::uuid );
SELECT throws_ok( 'insert_bad_sender' );

-- debug
SELECT * FROM app_public.messages ;


ROLLBACK;
