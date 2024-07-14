module.exports = {
  dbConfig: {
    host: "localhost",
    port: 5432,
    database: "your_database_name",
    username: "your_database_username",
    password: "your_database_password",
  },
  jwtSecret: "your_jwt_secret",
  PORT: process.env.PORT || 3000,

  emailConfig: {
    host: "smtp.your_email_host.com",
    port: 465,
    secure: true,
    user: "your_email@example.com",
    pass: "your_email_password",
  },
};
