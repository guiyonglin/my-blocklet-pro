const express = require('express');
const router = express.Router();
const db = require('../db');
const ResponseDTO = require('../interceptor');

// 添加新用户
router.post('/', (req, res, next) => {
  const { username, age, email, phone } = req.body;

  // 检查必要字段是否已提供
  if (!username || !email) {
    res.json(new ResponseDTO(500, null, 'Username and email are required.'));
    return;
  }

  // 插入新用户到profiles表
  db.run(
    `INSERT INTO profiles (username, age, email, phone) VALUES (?, ?, ?, ?)`,
    [username, age, email, phone],
    (err) => {
      if (err) {
        // 可能存在重复邮箱等错误，你可以检查err.code来获取更多信息
        res.json(new ResponseDTO(500, null, 'Failed to create user.'));
        return;
      }
      res.json(ResponseDTO.success(null));
    }
  );
});

// 获取用户Profile
router.get('/', (req, res, next) => {
  db.get('SELECT * FROM profiles WHERE id = ?', [1], (err, row) => {
    if (err) {
      res.json(new ResponseDTO(500, null, err.message));
      return;
    }
    res.json(ResponseDTO.success(row));
  });
});

// 更新用户Profile
router.put('/', (req, res) => {
  const { username, age, email, phone } = req.body;
  db.run(
    `UPDATE profiles SET username = ?, age = ?, email = ?, phone = ? WHERE id = ?`,
    [username, age, email, phone, 1],
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      res.json(ResponseDTO.success(null));
    }
  );
});

module.exports = router;
