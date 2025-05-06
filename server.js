const express = require('express');
const app = express();
const PORT = 3000;

// Public klasörü statik dosyalar için kullan
app.use(express.static('public'));

// Ana sayfa
app.get('/', (req, res) => {
  res.send('Hoşgeldiniz! Menü için QR kodu tarayın.');
});

// Menü sayfası
app.get('/menu', (req, res) => {
  res.sendFile(__dirname + '/public/menu.html');
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
});