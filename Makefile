pg_test:
	docker-compose exec db pg_prove -U postgres /docker-entrypoint-initdb.d/90.test.sql
