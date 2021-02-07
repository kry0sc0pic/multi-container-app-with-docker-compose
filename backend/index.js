const express = require('express');
const app = express();

const items = [
    'MacBook',
    'iMac',
    'iPhone SE',
    'Google Pixel 4',
    'Amazon Echo Dot',
    'Amazon Fire TV Stick',
    'Google Home'
];

app.get('/items', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin' , '*');
    res.status(200).json(
        {
            "items": items
        }
    );
});

app.listen(3000, '0.0.0.0', console.log('Listening on port 3000'));