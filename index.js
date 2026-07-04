const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>ยินดีต้อนรับสู่ Dashboard บอทของฉัน</h1><p>ระบบพร้อมทำงานแล้ว!</p>');
});

// Vercel ต้องการให้ export ตัว app ออกไป
module.exports = app;

// รันในเครื่องเพื่อทดสอบได้
if (require.main === module) {
    app.listen(3000, () => console.log('Server running on port 3000'));
}
