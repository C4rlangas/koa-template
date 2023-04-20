//DEPENDENCIES
const Router = require("koa-router")
//const entityControllers = require("./controllers/...")

const router = new Router();

//ROUTES
router.get("/", (ctx) => {
    ctx.body = "<h1> koa-template </h1>"
})


//EXPORTS
module.exports = router;