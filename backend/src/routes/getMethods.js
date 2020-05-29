// router/router.js
const getMethods = require('./../services/getterMethods')

module.exports =  function (app) {
    app.get('/foods', async function (req, res) {
        const result = await getMethods.getFoods();
        console.log(result)
        return res.send(result)
    });

    // // Catch all
    app.use('*', function (req, res){
        res.status(404).json({err: "Path" + req.originalUrl 
				+ " does not exist"});
    });
};