
const timeData = {
    hours : document.getElementById('hours'),
    minuts : document.getElementById('minuts'),
    sec : document.getElementById('sec'),
}

let currentFlag = "Brazil/East";

function setCurrentFlag(flag) {
   currentFlag = flag;
}

function changeTimeZone(date, timeZone) {
    if (typeof date === 'string') {
        return new Date(
            new Date(date).toLocaleString('pt-BR', {
                timeZone,
            }),
        ); 
    }
    return new Date(
        date.toLocaleString('pt-BR', {
            timeZone,
        }),
    );
}

const clock = setInterval(function time() {

    let dateToday = changeTimeZone(new Date(), currentFlag);
    
    let hour = dateToday.getHours();
    let minutes = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();

   timeData.hours.textContent = formatDisplay(hour);
   timeData.minuts.textContent = formatDisplay(minutes);
   timeData.sec.textContent = formatDisplay(seconds);
})

function formatDisplay(param) {
    if (param < 10 ) {
        param = '0' + param
    }
    
    return param
}

// const localTime = {
    
//     englandTime(dateTodayEngland)
//     {
//         let dateTodayEngland = new Date();

//       let hourE = dateTodayEngland.setHours(dateTodayEngland.getHours() + 3);
//         let minutesE = dateTodayEngland.getMinutes();
//         let secondsE = dateTodayEngland.getSeconds();

//         timeData.hours.textContent = formatDisplay(hourE);
//         timeData.minuts.textContent = formatDisplay(minutesE);
//         timeData.sec.textContent = formatDisplay(secondsE);
//     },

//     japanTime()
//     {
//         let dateTodayJapan = new Date();

//         let hourJapan = dateTodayJapan.setHours(dateTodayEngland.getHours() + 12);
//         let minutesJapan = dateTodayEngland.getMinutes();
//         let secondsJapan = dateTodayEngland.getSeconds();

//         timeData.hours.textContent = formatDisplay(hourJapan);
//         timeData.minuts.textContent = formatDisplay(minutesJapan);
//         timeData.sec.textContent = formatDisplay(secondsJapan);
//     },

//     australiaTime()
//     {
//         let dateTodayAustralia = new Date();

//         let hourAustralia = dateTodayAustralia.setHours(dateTodayEngland.getHours() + 13);
//         let minutesAustralia = dateTodayAustralia.getMinutes();
//         let secondsAustralia = dateTodayAustralia.getSeconds();

//         timeData.hours.textContent = formatDisplay(hourAustralia);
//         timeData.minuts.textContent = formatDisplay(minutesAustralia);
//         timeData.sec.textContent = formatDisplay(secondsAustralia);
//     },

//     canadaTime()
//     {
//         let dateTodayCanada = new Date();

//         let hourCanada = dateTodayCanada.setHours(dateTodayEngland.getHours() - 1);
//         let minutesCanada = dateTodayCanada.getMinutes();
//         let secondsCanada = dateTodayCanada.getSeconds();

//         timeData.hours.textContent = formatDisplay(hourCanada);
//         timeData.minuts.textContent = formatDisplay(minutesCanada);
//         timeData.sec.textContent = formatDisplay(secondsCanada);
//     }

// }

