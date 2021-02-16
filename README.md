# Messages

Messages web app to play with PostGraphile

## To run

### docker-compose

    docker-compose up

### skaffold on microk8s

Check : run `microk8s inspect`
https://microk8s.io/docs/troubleshooting#heading--common-issues

Check addons enabled : registry, dns

set default repo

    skaffold config set --global default-repo localhost:32000

then ...

    skaffold dev

## TODO

- [ ] migrate db test from pgTap to jest
- [ ] do the front part

## TO READ

- https://github.com/monacoremo/postgrest-sessions-example/blob/master/app.sql.md
