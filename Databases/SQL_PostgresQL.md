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

## New installation PostgresQL: installation wizard info
The following settings will be used for the installation:
Installation Directory: /Library/PostgreSQL/13
Server Installation Directory: /Library/PostgreSQL/13
Data Directory: /Library/PostgreSQL/13/data
Database Port: 5432
Database Superuser: postgres
Operating System Account: postgres
Database Service: postgresql-13
Command Line Tools Installation Directory: /Library/PostgreSQL/13
pgAdmin4 Installation Directory: /Library/PostgreSQL/13/pgAdmin 4
Stack Builder Installation Directory: /Library/PostgreSQL/13