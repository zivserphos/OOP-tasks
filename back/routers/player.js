const {Person , Player , GoalKeeper} = require("../soccerClasses")
const express = require("express");
const playerRouter = express.Router();
const fs = require("fs")
const path = require("path")


playerRouter.put("/create" , async (req ,res) => {
    console.log("im here")
    const data = req.body
    const player = new Player(data.firstName , data.sureName , data.salary , data.age , data.id , data.strongLeg , data.position , data.celebrationSentence)
    // const fileData = fs.readFile("db.json" , 'utf8' , await (req ,res) => {
    //     console.log("")
    // })
    fs.appendFileSync("db.json" , JSON.stringify(player))
    res.send(player)
})

const avi = new Person("ziv" , "serphos" , "100000" , "34 " , ":-)")
const aviv = new GoalKeeper("aviv" , "yamin" , "1500000" , "25" , "Sabih" , true , "never")
const nadav = new Player("nadav" , "cohen" ,"10000" , "25" , "38848808" , "right" , "Striker" , "CCCCCCCCCCCCCC")

//console.log(avi)

//localhost:8080/player/create






























module.exports = playerRouter