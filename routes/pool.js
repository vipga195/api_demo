
const { Pool } = require('pg');
const client = new Pool({
    user: "xwiovmqwszkcyu",
    password: "d6b7341da9cc35fc39fad2c8f70fd9dfe5308c54b555c872ab25b26b26df6161",
    database: "ddni3tr02g4gnq",
    port: 5432,
    host: "ec2-3-91-127-228.compute-1.amazonaws.com",
    ssl: { rejectUnauthorized: false },
    query_timeout: 10000,
    connectionTimeoutMillis: 10000,
    statementTimeout: 10000,
    idleTimeoutMillis: 10000
});

module.exports = client