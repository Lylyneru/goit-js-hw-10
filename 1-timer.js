import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as m,i as h}from"./assets/vendor-BbSUbo7J.js";const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){userSelectedDate=t[0],checkingDate()}};m("#datetime-picker",S);const f=document.querySelector("#datetime-picker"),a=document.querySelector("button[data-start]"),r={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let u=null,c=null;a.disabled=!0;m(f,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=new Date;t[0]<=e?(h.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),a.disabled=!0):(u=t[0],a.disabled=!1)}});startButton.addEventListener("click",()=>{u&&(a.disabled=!0,f.disabled=!0,b())});function b(){c=setInterval(()=>{const e=u-new Date;if(e<=0){clearInterval(c),l(0,0,0,0),h.success({title:"Finished",message:"Countdown complete!",position:"topRight"});return}const{days:n,hours:o,minutes:d,seconds:i}=g(e);l(n,o,d,i)},1e3)}function l(t,e,n,o){r.days.textContent=s(t),r.hours.textContent=s(e),r.minutes.textContent=s(n),r.seconds.textContent=s(o)}function s(t){return String(t).padStart(2,"0")}function g(t){const i=Math.floor(t/864e5),y=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),w=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:y,minutes:p,seconds:w}}
//# sourceMappingURL=1-timer.js.map
