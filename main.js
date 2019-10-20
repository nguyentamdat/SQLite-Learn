/* eslint-disable no-console */
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/test.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  return console.log('Connected to test db');
});

const sql = 'SELECT Id id FROM employee';

function checkUpdate(newData, currentData) {
  return newData.filter((item1) => !currentData.includes(item1));
}

db.all(sql, [], (err, rows) => {
  if (err) { return console.error(err.message); }
  return console.log('checkUpdate(rows, rows): ', checkUpdate(rows, rows));
});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  return console.log('Closed test db');
});
