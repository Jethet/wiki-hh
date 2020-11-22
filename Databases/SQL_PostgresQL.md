## After updating postgresql with brew:

>postgresql
>To migrate existing data from a previous major version of PostgreSQL run:
>  brew postgresql-upgrade-database
>This formula has created a default database cluster with:
>  initdb --locale=C -E UTF-8 /usr/local/var/postgres
>For more details, read:
>  https://www.postgresql.org/docs/13/app-initdb.html

>To have launchd start postgresql now and restart at login:
>  brew services start postgresql
>Or, if you don't want/need a background service you can just run:
>  pg_ctl -D /usr/local/var/postgres start
