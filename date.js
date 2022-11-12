
function myfun() {
    let d1 = document.getElementById("date").value;
    let d2 = document.getElementById("dates").value;
    if (d1, d2 == "") {
        alert("Input not valid");
    }
    var date = document.getElementById("date").value;    
    var dates = document.getElementById("dates").value;
    var date = new Date(date);
    var dates = new Date(dates);
    var time_difference = dates.getTime() - date.getTime();
    var result = time_difference / (1000 * 60 * 60 * 24);
    var hour = (result * 24)
    var mintues = (hour * 60)
    var second = (mintues * 60)
    var millsecond = (second * 1000)
    return document.getElementById("result").innerHTML = "<p>Days between both dates." + result + "</p>"
        + "<p>Hour is" + hour + "</p>"
        + "<p>Mintues is" + mintues + "</p>"
        + "<p> Second is" + second + "</p>"
        + "<p>Mill second is" + millsecond + "</p>"

}


