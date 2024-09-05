module.exports = {
  HOST: "dpg-crc7g908fa8c73erb91g-a.singapore-postgres.render.com",
  USER: "admin",
  PASSWORD: "yjbqJsyLnuCSKvADLkU2EOoO8UsInswc",
  DB: "ams_database_5rq7",
  dialect: "postgres",
  PORT:"5432",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
    ssl: {
      require: true, //allow SSL
      // rejectUnauthorized: false // connect only sometime SSL issue
    }
  }
};
