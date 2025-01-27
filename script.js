let date = new Date();
let start_date = 30;
let start_month = 4;
let start_year = 2025;
let start_hour = 23;
let start_minutes = 60;
setInterval(() => {
    if (start_hour == 23 && start_minutes == 60 && start_month == 12 && start_date == 31 && start_year == 2025) {
        start_date = 1;
        start_month = 1;
        start_year = date.getFullYear()+1;
        start_hour = 0;
        start_minutes = 0;
    }
    if(start_month % 2 == 0){
        if(start_month == 2){
            if(start_year % 100 === 0 ? start_year % 400 === 0 : start_year % 4 === 0){
                if(start_date == 29  && start_hour == 24 && start_minutes == 60)
                {
                    start_date = 1;
                    start_hour = 0;
                    start_minutes = 0;
                    start_month += 1; 
                }
            }
            else{
                if(start_date == 28  && start_hour == 23 && start_minutes == 60)
                    {
                        start_date = 1;
                        start_hour = 0;
                        start_minutes = 0;
                        start_month += 1; 
                    } 
            }
        }
        else{
            if(start_date == 30  && start_hour == 23 && start_minutes == 60)
                {
                    start_date = 1;
                    start_hour = 0;
                    start_minutes = 0;
                    start_month += 1; 
                } 
        }
    }
    else{
        if(start_date == 31  && start_hour == 23 && start_minutes == 60)
            {
                start_date = 1;
                start_hour = 0;
                start_minutes = 0;
                start_month += 1; 
            } 
    }
    if (start_minutes == 60 && start_hour == 23) {
        start_minutes = 0;
        start_hour = 0;
    }
    if (start_minutes == 60) {
        start_minutes = 0;
    }
    start_minutes++;
    if(start_date < 10)
        start_date = "0"+start_date;
    if(start_month < 10)
        start_month = "0"+start_month;
    if(start_minutes < 10)
        start_minutes =  "0"+start_minutes; 
    if(start_hour < 10)
        start_hour = "0"+start_hour;
    console.log(start_date+"/"+start_month+"/"+start_year+" "+start_hour + ":" + start_minutes);
}, 1000)