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

#### issues

dns issues between services after each reboot. microk8s inspect show presence of iptables-legacy rules that seems created by ... microk8s.
```
sudo iptables -P FORWARD ACCEPT
sudo apt-get install iptables-persistent # doesn't resolve anything
```

## TODO

- [x] migrate db test from pgTap to jest
- [ ] do the front part
  - [x] use vite, react & antd
  - [x] use graphql-codegen
  - [ ] use redux to centralize state
- [ ] replace jwt by server sessions

## TO READ

- https://github.com/monacoremo/postgrest-sessions-example/blob/master/app.sql.md
