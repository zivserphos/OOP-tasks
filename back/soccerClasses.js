const moment = require("moment")
const { readFile } = require("fs/promises");

class Person{
    #id
    constructor(_firstName , _sureName , _salary , _age , _id) {
        this.pFirstName = _firstName
        this.pSureName = _sureName;
        this.pSalary = _salary;
        this.pAge = _age;
        this.#id = _id;
    }
    get firstName(){
        return this.pFirstName
    }
    get sureName(){
        return this.pSureName;
    }
    get fullName() {
        const {pFirstName , pSureName} = this;
        return `${pFirstName} ${pSureName}`
    }
    get salary() {
        return this.pSalary;
    }
    set salary(val){
        this.pSalary = val;
    }
    get age(){
        return this.pAge
    }
    set age(age) {
        this.pAge = age;
    }
}

class Player extends Person{
    constructor(_firstName , _sureName , _salary , _age , _id , _strongLeg , _position , _celebrationSentence) {
        super(_firstName , _sureName , _salary , _age , _id)
        this.pCelebrationSentence = _celebrationSentence;
        this.pStrongLeg = _strongLeg
        this.pPosition = _position
    }
    goalClebration() {
        console.log(this.celebrationSentence)
        this.salary*=1.025;
    }
    get position() {
        return this.pPosition;
    }
    set position(_position) {
        this.pPosition = _position;
    }
    get strongLeg(){
        return this.pStrongLeg;
    }
    get celebrationSentence() {
       return this.pCelebrationSentence;
    }
    set changeCelebration(_celebrationSentence) {
        this.pCelebrationSentence = _celebrationSentence;
    }

}

class GoalKeeper extends Person{
    constructor(_firstName , _sureName , _salary , _age , _id , _isLeftHanded = false , _lastGoalConceded = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")){
        super(_firstName , _sureName , _salary , _age , _id)
        this.gIsleftHanded = _isLeftHanded;
        this.gLastGoalConceded = _lastGoalConceded;
    }

    concededAGoal() {
        this.gLastGoalConceded =  moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        this.pSalary *= 0.975
    }

    get _isLeftHanded() {
        return this.gIsleftHanded;
    }

    get lastGoalConceded() {
        return this.gLastGoalConceded;
    }

    set changeConcededAGoal(date) {
        this.gLastGoalConceded = date;
    }
}

module.exports = {Person , Player , GoalKeeper}