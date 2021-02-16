FROM postgres:13-alpine

WORKDIR /tmp

RUN apk add --no-cache wget build-base perl perl-dev perl-utils && \
    wget https://github.com/theory/pgtap/archive/v1.1.0.zip && \
    unzip v1.1.0.zip

WORKDIR /tmp/pgtap-1.1.0

RUN cpan inc::latest
RUN cpan TAP::Parser::SourceHandler::pgTAP

RUN make && make install

ADD ./*.sql /docker-entrypoint-initdb.d/
