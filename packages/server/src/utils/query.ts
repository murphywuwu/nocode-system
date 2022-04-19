import mysql from 'mysql';

import config from '../config';

const con = mysql.createConnection(config.dataSources.mysql);

con.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

con.end((err) => {
  if (err) throw err;
  console.log('Closed');
});

function query(sql) {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

export default query;
