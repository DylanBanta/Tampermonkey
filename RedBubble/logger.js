/*
add log function to userscript
forceOn overload will not throw err if null, if true log will be forced on

function log(logs, forceOn){
	var debug = true;
	logger(logs, debug, forceOn);
}
*/

//returns a 12 hour clock timestamp
//MM/DD/YYYY HH:MM:SS AM/PM
function timestamp() {
    var cd = new Date(); //current date
    var month = (cd.getMonth() + 1);
    var year = cd.getFullYear();
    var date = cd.getDate();
    var hours = cd.getHours();
    var min = cd.getMinutes();
    var sec = cd.getSeconds();
    var amBool = "AM";

    if (hours == 0) {
        hours = 12; //0 is 12 am
    } else if (hours > 12) { //24 hour clock to 12 hour
        hours = hours - 12;
        amBool = "PM";
    }

    if (min <= 9) {
        min = "0" + min;
    }

    if (sec <= 9) {
        sec = "0" + sec;
    }

    var stamp = month + "/"
         + date + "/"
         + year + " "
         + hours + ":"
         + min + ":"
         + sec + " "
         + amBool;

    return stamp;
}

//Custom console log, will output caller function and a timestamp in addition to each log
//forceOn overload is not required, if passed true the logger will output even if debug is false
function logger(logs, debug, forceOn) {

    if (debug && forceOn != false || forceOn) { //if debug or forceOn are true
        var call = logger.caller.name; //get caller function
        var ts = timestamp(); //get a timestamp

        //Log caller function, timestamp, and log logs
        console.log(
            "Log | " + logs
             + "\n	Caller Function | " + call
             + "\n	Timestamp | " + ts);
    }
}

