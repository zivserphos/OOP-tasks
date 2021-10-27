const express = require("express")
const app = express();
const cors = require('cors')
const port = 8080;
const playerRouter = require("./routers/player")
const handleUserReq = require("./handlers/handleUserReq")
const errorHandlers = require("./handlers/errorHandlers")

app.use(cors({origin: "*"}))
app.use(express.json())
app.use("/player", playerRouter)
app.use(errorHandlers)


app.listen(port, function() {
    console.log('app started');
  });

app.get('/', function(req, res) {
res.send('hello world!');
});

  