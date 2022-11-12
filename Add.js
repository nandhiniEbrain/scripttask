//  function Func() {
//     var dat1 = document.getElementById('dates').value;
//     var Func = new Date(dat1) //converts string to date object    
//     var diffDays = Math.abs((Func.getTime()) / (24 * 60 * 60 * 1000));
//     console.log(diffDays)
//     hours1 = (diffDays * 24);
//     minits = (hours1 * 60);
//     sec = (minits * 60);
//     mls = (sec * 1000)
//     console.log(hours1)
//     console.log(minits)
//     console.log(sec)
//     console.log(mls)
// 
var result = document.getElementById("result")
function Func() {
    let d1 = document.getElementById("date").value;
    let d2 = document.getElementById("dates").value;
    if (d1,d2 == "") {
        alert("Error: Input is empty!");        
    }    
    const dateone = new Date(d1);
    var fundate = dateone.getTime();    
    var total_secs = 24 * 60 * 60 * 1000;
    var total_mins = total_secs * Number(d2)
    var tdate = fundate + total_mins;
    var finaldate = new Date(tdate)
    result.innerHTML = "<p>Differece Date =" + finaldate + "</p>"

}

var values = document.getElementById("values");
function sub() {
    
    let d1 = document.getElementById("value2").value;
    let d2 = document.getElementById("value1").value;
    if (d1,d2 == "") {
        alert("Error: Input is empty!");        
    }    
    const dateone = new Date(d1);
    var fundate = dateone.getTime();
    var total_secs = 24 * 60 * 60 * 1000;
    var total_mins = total_secs * Number(d2)
    var tdate = fundate - total_mins;
    var finaldate = new Date(tdate)
    values.innerHTML = "<p>Differece Date =" + finaldate + "</p>"

}