const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routerApi = require("./routes")
const parseJson = express.json();
const { logErrors, errorHandler, boomErrorHandler } = require("./middleware/errorHandler");
const cors = require("cors")

app.use(parseJson);

const whitelist = ['http://localhost:8080', "https://midominio.com", "http://localhost:8080", "http://localhost:3001"];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin){
      callback(null, true)
    }else{
      callback(new Error("No permitido"))
    }
  }
}
app.use(cors(options));

routerApi(app);

app.use(boomErrorHandler)
app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' +  port)
});

