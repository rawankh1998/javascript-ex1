function leapYear(year){
    if (year%4===0){
        if(year%100===0){
            if(year%400===0){
                console.log("It is indeed aleap year")
            }else{//מתחלק ב 4 וב100 
                console.log("This is not a leap year.")
            }
        }else{//מתחלק רק ב4
            console.log("It is indeed aleap year")
        }
    }
 }
 leapYear(2400)
