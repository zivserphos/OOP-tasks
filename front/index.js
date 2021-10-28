document.getElementById("submit1").addEventListener("click" , (event) => doLogin(event))
document.getElementById("submit2").addEventListener("click" , (event) => doLoginGoal(event))

async function doLogin(e) {
    e.preventDefault();
    console.log("inside")
    //e.preventDefault();
    e = e || window.event;
    // e.target is the submit button
    let form = e.target.form;
    const body = JSON.stringify({firstName:"nadav" , sureName: "cohen" , salary: "10000" , age: "25" , id: "38848808" , strongLeg: "right" , position: "Striker" , celebrationSentence: "CCCCCCCCCCCCCC"})
    await axios.put("http://localhost:8080/player/createP" , {body} ,{
        headers: { "Content-Type": "application/json"}
    })
    
    alert(" player: " + form.fname.value +" " + form.lname.value +" my salary is "
    +form.salary.value +" my age is " + form.age.value + " my strong leg is " + form.strongLeg.value
    + "my position is " + form.position.value + " and my celebration sentenence is " + form.celebrationSentence.value);
  }
  function doLoginGoal(e) {
    console.log("inside")
    e = e || window.event;
    e.preventDefault();
    // e.target is the submit button
    let form = e.target.form;
        alert(" player: " + form.fname.value +" " + form.lname.value +" my salary is "
        +form.salary.value +" my age is " + form.age.value + " , am i a left handed ? " + form.isLeftHanded.value + " and my last goal i got was  " + form.lastGoalConceded.value);
       form.submit();
  }