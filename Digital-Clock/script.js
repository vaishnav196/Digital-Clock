function time() {
    let d = new Date();
    let day= d.getDay();
    let month = d.getMonth();
    let date = d.getDate();
    let year = d.getFullYear();
    let hrs = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    let dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let monthName = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

    document.getElementById("day").innerHTML = dayName[day];
    document.getElementById("month").innerHTML = monthName[month];
    // document.getElementById("date").innerHTML = date;
    document.getElementById("year").innerHTML = year;
    
    if(min<10){
        document.getElementById("min").innerHTML = "0" +min;
    }else{
        document.getElementById("min").innerHTML = min;
    }

    if(sec<10){
        document.getElementById("sec").innerHTML = "0" +sec;
    }else{
        document.getElementById("sec").innerHTML = sec;
    }

    if(hrs>12){
        document.getElementById("PM").innerHTML = "PM";
         hrs-=12
        document.getElementById("hrs").innerHTML = "0" +hrs;
  
    }
    else{
        document.getElementById("AM").innerHTML = "AM";
        document.getElementById("hrs").innerHTML = hrs;
    }
    if(date<10){
         document.getElementById("date").innerHTML = "o"+date;
    }
    else{
         document.getElementById("date").innerHTML = date;
    }

    

    
}
setInterval(time,1000);