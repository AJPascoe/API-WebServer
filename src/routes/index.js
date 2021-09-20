const {Router} = require ("express");
const helloRouter = Router();
const { tom } = require ("../controllers");

helloRouter.get("/tom", tom);


module.exports = helloRouter;