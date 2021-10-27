const {Person , Player , GoalKeeper} = require("./soccerClasses")
const express = require("express")
const app = express();
const cors = require('cors')
const port = 8080;
const playerRouter = require("./routers/player")
const handleUserReq = require("./handlers/handleUserReq")
const errorHandlers = require("./handlers/errorHandlers")

app.use(cors({origin: "*"}))
app.use(express.json())
app.use("/player" , handleUserReq , playerRouter)
app.use(errorHandlers)


app.listen(port, function() {
    console.log('app started');
  });

app.get('/', function(req, res) {
res.send('hello world!');
});



const avi = new Person("ziv" , "serphos" , "100000" , "34 " , ":-)")
const aviv = new GoalKeeper("aviv" , "yamin" , "1500000" , "25" , "Sabih" , true , "never")
const nadav = new Player("nadav" , "cohen" ,"10000" , "25" , "38848808" , "right" , "Striker" , "CCCCCCCCCCCCCC")

  