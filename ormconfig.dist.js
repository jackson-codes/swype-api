var fs = require('fs');

module.exports = {
   "type": "postgres",
   "host": "localhost",
   "port": 5432,
   "username": "username",
   "password": "password",
   "database": "db",
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   },
   "ssl": {
      "rejectUnauthorized": false,
      "ca": fs.readFileSync("/path/to/server-ca.pem").toString(),
      "key": fs.readFileSync("/path/to/client-key.pem").toString(),
      "cert": fs.readFileSync("/path/to/psql-client-cert.pem").toString(),
   }
}
