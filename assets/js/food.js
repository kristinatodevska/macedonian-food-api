const foodRoutes = (app, fs) => {
const dataPath = './data/food.json';

app.get('/food', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    });
});
};

module.exports = foodRoutes;