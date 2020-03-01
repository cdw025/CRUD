cp .env.sample .env
psl -U postgres
postgres
createdb <database name>
npm install
knex migrate:latest
knex seed:run
