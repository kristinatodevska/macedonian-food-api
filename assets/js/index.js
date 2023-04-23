const express = require('express');
const app = express();

app.get('/food', (req, res) => {
    res.status(200).send({
        name: 'Sarma',
        time: '1 hour'
    })
});

app.listen(8080, '0.0.0.0', () => console.log(`listening on port 8080`));