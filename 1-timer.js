import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as w,i as m}from"./assets/vendor-BbSUbo7J.js";const h=document.querySelector("#datetime-picker"),n=document.querySelector("button[data-start]"),s={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let u=null,c=null;n.disabled=!0;w(h,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=new Date;t[0]<=e?(m.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),n.disabled=!0):(u=t[0],n.disabled=!1)}});n.addEventListener("click",()=>{u&&(n.disabled=!0,h.disabled=!0,S())});function S(){c=setInterval(()=>{const e=u-new Date;if(e<=0){clearInterval(c),l(0,0,0,0),m.success({title:"Finished",message:"Countdown complete!",position:"topRight"});return}const{days:o,hours:r,minutes:d,seconds:i}=b(e);l(o,r,d,i)},1e3)}function l(t,e,o,r){s.days.textContent=a(t),s.hours.textContent=a(e),s.minutes.textContent=a(o),s.seconds.textContent=a(r)}function a(t){return String(t).padStart(2,"0")}function b(t){const i=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),y=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:f,minutes:y,seconds:p}}
//# sourceMappingURL=1-timer.js.map
