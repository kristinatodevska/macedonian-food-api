const foodRoutes = require('./food');
const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('welcome');
    });
    foodRoutes(app, fs);
};

module.exports = appRouter;