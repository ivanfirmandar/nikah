const express = require("express");
const bodyParser = require("body-parser");
const handler = require("./handler/dbHandler");
const services = require("./handler/services");
const config = require("./config.json");
const cors = require("cors");
const http = require("http");
const app = express();
const api = express();

const server = http.createServer(app);

const router = app.use("/api",api);
api.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next()
})
api.use(bodyParser.json())

api.get("/getMessages",cors(), handler.getMessages);
api.post("/sendMessages",handler.sendMessages);
app.listen(config.port, services.checkConnection);


