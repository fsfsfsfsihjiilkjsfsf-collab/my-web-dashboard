const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // ใช้คำสั่ง res.send เพื่อแสดงข้อความที่ต้องการ
    res.send(`
        <div style="text-align: center; margin-top: 50px; font-family: sans-serif;">
            <h1>สำเร็จ!</h1>
            <p style="font-size: 20px; color: green;">คุณยืนยันเรียบร้อยแล้ว</p>
        </div>
    `);
});

module.exports = app;

if (require.main === module) {
    app.listen(3000, () => console.log('Server running on port 3000'));
}
