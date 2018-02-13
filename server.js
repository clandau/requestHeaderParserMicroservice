const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//to allow remote testing by FCC
const cors = require('cors');
app.use(cors({optionsSuccessStatus:200}));

//render static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    let software = req.headers['user-agent'];
    let language = req.headers['accept-language'];
    let ipAddress = req.connection.remoteAddress;
    res.json({'ipaddress': ipAddress, 'language':language, 'software':software});
});

const listener = app.listen(PORT, () => {
    console.log('You are listening on port ' + PORT);
});