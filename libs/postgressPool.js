const { Client } = require("pg");

async function getConnection () {
  const client = new Client({
    host: "localhost",
    port: 5433,
    user: "nova",
    password: "L4Bnova",
    database: "nova_db"
  })

  await client.connect();

  return client;
}

module.exports = getConnection;
