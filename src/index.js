import Express from "express";
import { engine } from "express-handlebars";
import { dirname, join } from "path";

import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


import indexRoutes from "./routes/index.js"

const app = Express();

//configuracion
app.set('port', process.env.PORT || 5000);
app.set('views', join(__dirname, 'views'));
app.engine(".hbs", engine({
    defaultLayout: "main",
  layoutsDir: join(app.get("views"), "layouts"),
    partialDir: join(app.get("views"), "partials"),
    extname: ".hbs"
  })
);
//public
app.use(Express.static(join(__dirname, "public")));

app.set("view engine", ".hbs");

//GOBAL VARIABLED
app.use((req, res, next) => {
  next();
});

//servidor
app.listen(app.get('port'),()=>{
    console.log('servidor en puerto',app.get('port'))
})

//rutas
app.use(indexRoutes)
