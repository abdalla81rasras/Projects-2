const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December", 
  ];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
const giveway =document.querySelector(".giveway")
const deadline =document.querySelector(".deadline")
const DF =document.querySelectorAll(".deadline-format h4");
//console.log(DF);
let temDate = new Date();
let temYear = temDate.getFullYear();
let temMonth = temDate.getMonth();
let temDay = temDate.getDate();
let temHour = temDate.getHours();
let temMins = temDate.getMinutes();
let temSec = temDate.getSeconds();

//let futurDate =new Date(2023 , 12 , 27 , 10 , 33 , 5);
let futurDate =new Date(temYear , temMonth , temDay+7 , temHour , temMins , temSec);
//console.log(futurDate);
const year = futurDate.getFullYear();
const mon = futurDate.getMonth();
//console.log(mon);
const month= months[mon];

const days = futurDate.getDate();
const hours = futurDate.getHours();
const mins = futurDate.getMinutes();
const sec =futurDate.getSeconds();
const weekday =weekdays[futurDate.getDay()];

giveway.textContent= `giveway ends on ${weekday} ${days}/${month}/${year}  ${hours}:${mins}:${sec}pm.`;

/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */

const futurTime = futurDate.getTime();
//console.log(futurTime);

function getRemainingTime(){
   const today =new Date().getTime();
   const t = Math.abs(futurTime - today) ;
   //console.log(t);
   const oneDay=24*60*60*1000;
   const oneHour=60*60*1000;
   const oneMin=60*1000;
   const oneSec=1000;
   
   let days = t / oneDay;
   days = Math.floor(days);
   //console.log(days);

   let hours =(t % oneDay) / oneHour;
   hours = Math.floor(hours);
   //console.log(hours);

   let mins= (t % oneHour) / oneMin;
   mins = Math.floor(mins);
   //console.log(mins);

   let sec=(t % oneMin) / oneSec;
   sec = Math.floor(sec);
   //console.log(sec);

   const values=[days , hours , mins , sec];

   function format(item){
      if(item < 10){
          return item= `0${item}`;
      }
      return item
   }

   DF.forEach(function(item , index){
      item.innerHTML = format(values[index]);    
   });

   if(t < 0){
     clearInterval(countdown);
     deadline.innerHTML=`<h4 class="error">sorry , this giveway has expired</h4>`;
   }
}
let countdown = setInterval(getRemainingTime , 1000)
getRemainingTime();