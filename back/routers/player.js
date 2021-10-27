const {Person , Player , GoalKeeper} = require("../soccerClasses")
const express = require("express");
const playerRouter = express.Router();
const fs = require("fs")
const dataBase = require("../db")
const path = require("path")



playerRouter.put("/create" , async (req ,res) => {
    console.log("im here");
    const data = req.body;
    //console.log(data)
    const player = new Player(data.firstName , data.sureName , data.salary , data.age , data.id , data.strongLeg , data.position , data.celebrationSentence)
    console.log(player)
    try {
    dataBase.push(player)
    await fs.promises.writeFile("db.js" , `const dataBase = ${JSON.stringify(dataBase)} \r\n\r\n module.exports = dataBase`)
    }
    catch(err) {
        console.log(err)
    }
    //fs.appendFileSync("db.json" , JSON.stringify(player))
    res.send(player)
})

const avi = new Person( "serphos" , "100000" , "34 " , ":-)")
const aviv = new GoalKeeper("aviv" , "yamin" , "1500000" , "25" , "Sabih" , true , "never")
const nadav = new Player("nadav" , "cohen" ,"10000" , "25" , "38848808" , "right" , "Striker" , "CCCCCCCCCCCCCC")


//localhost:8080/player/create
// {"firstName: "nadav" , "sureName":  "cohen" ,"salary": , "10000" , "age": "25" , "id": "38848808" , "strongLeg": "right" , ""position": "Striker" , "celebrationSecntence": "CCCCCCCCCCCCCC"}





























module.exports = playerRouter