const sqlite3 = require('sqlite3').verbose();

// 连接到SQLite数据库（假设已存在名为'user_profiles.db'的数据库文件）
const db = new sqlite3.Database('./user_profiles.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
  // 创建一个profiles表（如果它还不存在）
  db.run(
    `  
    CREATE TABLE IF NOT EXISTS profiles (  
      id INTEGER PRIMARY KEY AUTOINCREMENT,  
      username TEXT NOT NULL,  
      age INTEGER,  
      email TEXT NOT NULL UNIQUE,  
      phone TEXT  
    )  
  `,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('profiles table created or already exists.');
    }
  );
});

module.exports = db;
