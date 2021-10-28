const {Person , Player , GoalKeeper} = require("../soccerClasses")
const express = require("express");
const playerRouter = express.Router();
const fs = require("fs")
const dataBase = require("../db")
const path = require("path")



playerRouter.put("/createP" , async (req ,res) => {
    const data = JSON.parse(req.body.body);
    console.log(data)
    const player = new Player(data.firstName , data.sureName , data.salary , data.age , data.id , data.strongLeg , data.position , data.celebrationSentence)
    try {
    dataBase.push(data)
    await fs.promises.writeFile("db.js" , `const dataBase = ${JSON.stringify(dataBase)} \r\n\r\n module.exports = dataBase`)
    }
    catch(err) {
        console.log(err)
    }
    res.send(player)
})

playerRouter.put("/createG" , async (req ,res) => {
    const data = req.body; 
    const goalKeeper = new GoalKeeper(data.firstName , data.sureName , data.salary , data.age , data.id , data.isLeftHanded , data.lastGoalConceded)
    try {
    dataBase.push(goalKeeper)
    await fs.promises.writeFile("db.js" , `const dataBase = ${JSON.stringify(dataBase)} \r\n\r\n module.exports = dataBase`)
    }
    catch(err) {
        console.log(err)
    }
    res.send(goalKeeper)
})

playerRouter.get("/isLeft/:goalKepper" , async (req,res) => {
    if (req.params.goalKeeper.isLeftHanded) {
        return res.send(true)
    }
    return res.send(false)
}) 

playerRouter.get("fullname/:person" , (req,res) => {
    res.send(req.params.person.fullName)
}) 

playerRouter.post("/age:person/:age" , (req,res) => {
    dataBase.findIndex((Aperson) => {
        if (JSON.parse(Aperson).id === JSON.parse(req.params.person).id)  
        Aperson.age = req.params.age;
        res.send("changed name succefsfully")
    })

}) 
    




const avi = new Person( "serphos" , "100000" , "34 " , ":-)")
const aviv = new GoalKeeper("aviv" , "yamin" , "1500000" , "25" , "Sabih" , true , "never")
const nadav = new Player("nadav" , "cohen" ,"10000" , "25" , "38848808" , "right" , "Striker" , "CCCCCCCCCCCCCC")


//localhost:8080/player/create
// {"firstName: "nadav" , "sureName":  "cohen" ,"salary": , "10000" , "age": "25" , "id": "38848808" , "strongLeg": "right" , ""position": "Striker" , "celebrationSecntence": "CCCCCCCCCCCCCC"}





























module.exports = playerRouter