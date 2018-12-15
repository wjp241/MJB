const postgres = require("pg");
const SALT_WORK_FACTOR = 10;
const bcrypt = require("bcryptjs");

const uri =
  "postgres://nekshedf:jp-OdmokslB0TQvyF-THQiA4UL5fUOrG@pellefant.db.elephantsql.com:5432/nekshedf";

const pg = new postgres.Client(uri);

pg.connect(err => {
  if (err) throw new Error(err);
});

const obj = {
  createAccount: (request, response) => {
    let account = response.body;
    let username = account.username;
    let password = account.password;
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);
      bcrypt.hash(password, salt, function(err, hash) {
        if (err) return next(err);
        password = hash;
      });
    });
    pg.query(
      `INSERT INTO account(username, password) VALUES (${username}, ${password});`
    );
    pg.end();
    response.redirect("http://localhost:8080/");
  }
};

module.exports = obj;
