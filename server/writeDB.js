const postgres = require("pg");
const uri =
  "postgres://kzdawbqz:bwphWG44THCVjHf5zzr3rjR-KZIWRWLk@elmer.db.elephantsql.com:5432/kzdawbqz";

const pg = new postgres.Client(uri);

pg.connect(err => {
  if (err) throw new Error(err);
});

const obj = {
  writeDB: (request, response) => {
    pg.query(response.locals.query)
      .then(result => {
        console.log("this is the result", result);
      })
      .catch(err => console.log(err));
  }
};
// function writeDB(request, response) {
//   pg.connect(
//     uri,
//     (err, db) => {
//       if (err) throw new Error(err);
//       // make SQL queries
//       db.query(res.locals.query, (err, result) => {
//         console.log("this is the result", result);

//         // close database connection
//         db.end('OK');
//       });
//     }
//   );
//   response.send(res.locals.query);
// }

module.exports = obj;
