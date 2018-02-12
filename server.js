const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//to allow remote testing by FCC
const cors = require('cors');
app.use(cors({optionsSuccessStatus:200}));

//render static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log(req.headers);
    res.sendFile(__dirname + '/views/index.html');
});

const listener = app.listen(PORT, () => {
    console.log('You are listening on port ' + PORT);
});