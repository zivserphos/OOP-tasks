const {Person , Player , GoalKeeper} = require("./soccerClasses")
const express = require("express")
const app = express();
console.log(Person , Player , GoalKeeper)

const avi = new Person("ziv" , "serphos" , "100000" , "34 " , ":-)")
const aviv = new GoalKeeper("aviv" , "yamin" , "1500000" , "25" , "Sabih" , true , "never")
const nadav = new Player("nadav" , "cohen" ,"10000" , "25" , "38848808" , "right" , "Striker" , "CCCCCCCCCCCCCC")

