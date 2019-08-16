const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public/client/dist'));


app.get('/api/user', (req, res) => {
    pool.query('SELECT * FROM <table-name> ORDER BY id ASC LIMIT 5', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
});


app.listen(port, () => {
    console.log(`connected to localhost:${port}`);
});