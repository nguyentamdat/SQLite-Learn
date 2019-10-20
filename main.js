/* eslint-disable no-console */
const sqlite3 = require('sqlite3').verbose();

const db1 = new sqlite3.Database('./db/test.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  return console.log('Connected to test db');
});

const db2 = new sqlite3.Database('./db/test2.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  return console.log('Connected to test2 db');
});

const sql = 'SELECT Id id FROM employee';

function checkUpdate(newData, currentData) {
  return newData.filter((item1) => !currentData.includes(item1));
}

async function checkDatabase() {
  try {
    const myDb = db1.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      return rows;
    });
    const newDb = db2.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      return rows;
    });
  } catch (err) {
    console.error(err.message);
  }
}

db1.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  return console.log('Closed test db');
});

db2.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  return console.log('Closed test2 db');
});
