const Koa = require("koa");
const bodyParser = require("koa-body");
const router = require("./routes.js")

const app = new Koa();
const port = 8000;

app.use(bodyParser({ multipart: true, urlencoded: true }))
app.use(router.routes())

app.listen(port, () => {
    console.log(`Listening on http://127.0.0.1:${port}/`)
})