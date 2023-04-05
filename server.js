const express = require('express');
const app = express();
const path = require('path');

// 設定靜態檔案目錄
app.use(express.static(path.join(__dirname, 'src', 'pages')));

// 設定首頁路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'pages', 'index.html'));
});

// 設定 NewTask 頁面路由
app.get('src/pages/NewTask', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'pages', 'NewTask', 'index.html'));
});

// 啟動伺服器
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});




