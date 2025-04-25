import Database from 'better-sqlite3';

const db = new Database(process.env.DB_NAME);
db.pragma('journal_mode = WAL');
db.prepare(`
    CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMANT,
      username TEXT UNIQUE,
      password TEXT
    )
    `);
db.prepare(`
     CREATE TABLE todos(
     id INTEGER PRIMARY KEY AUTOINCREMANT,
     user_id INTEGER,
     task TEXT,
     completed BOOLEAN DEFAULT 0,
     FOREIGN KEY(user_id) REFERENCES users(id)
     )
    `);
    
db.run();

export default db;