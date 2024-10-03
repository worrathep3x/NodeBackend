module.exports = {
  HOST: "",
  USER: "",
  PASSWORD: "",
  DB: "",
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
