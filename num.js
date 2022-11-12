var noerror = false;
function Value() {
    var year = document.getElementById("month").value;    
    if (year == "") {
        document.getElementById("YearErrId").innerHTML = "*Required";
        var noerror = true;
    } else {
        document.getElementById("YearErrId").innerHTML = ""
    }
    var date = document.getElementById("number").value;
    if (date > 31 || date == "")
        if (date > 31) {
            document.getElementById("dateErrId").innerHTML = "*Maximum Number-31";
            var noerror = true;
        } else {
            document.getElementById("dateErrId").innerHTML = "*Required"
            var noerror = true;
        }
    var Hour = document.getElementById("hour").value;
    if (Hour > 24 || Hour == "")
        if (Hour > 24) {
            document.getElementById("HourErrId").innerHTML = "*Maximum Hour-24";
            var noerror = true;
        } else {
            document.getElementById("HourErrId").innerHTML = "*Required"
            var noerror = true;
        }
    var Mintues = document.getElementById("mintues").value;
    if (Mintues > 60 || Mintues == "")
        if (Mintues > 60) {
            document.getElementById("MinsErrId").innerHTML = "*Maximum Mintues-60";
            var noerror = true;
        } else {
            document.getElementById("MinsErrId").innerHTML = "*Required"
            var noerror = true;
        }
    var Second = document.getElementById("second").value;
    if (Second > 60 || Second == "")
        if (Second > 60) {
            document.getElementById("secErrId").innerHTML = "*Maximum Second-60";
            var noerror = true;
        } else {
            document.getElementById("secErrId").innerHTML = "*Required"
            var noerror = true;
        }
    var MillSecond = document.getElementById("Mill").value;
    if (MillSecond > 1000 || MillSecond == "")
        if (MillSecond > 1000) {
            document.getElementById("millErrId").innerHTML = "*Maximum MillSecond-1000";
            var noerror = true;
        } else {
            document.getElementById("millErrId").innerHTML = "Required"
            var noerror = true;
        } 
   
    var select  = year.split("-");
    var Tdate = new Date(select[0], select[1] - 1, date,Hour,Mintues,Second,MillSecond);
    console.log(Tdate)
    document.getElementById('cals').innerHTML = "<p><strong>Number of total Days " + Tdate + "</strong></p>"
    
}


