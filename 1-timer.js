import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as C,i as h}from"./assets/vendor-BbSUbo7J.js";const i=document.querySelector("#datetime-picker"),n=document.querySelector("button[data-start]"),o={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};document.addEventListener("DOMContentLoaded",()=>{const e=document.createElement("div");e.classList.add("wrapper"),document.body.appendChild(e),e.appendChild(i),e.appendChild(n),e.appendChild(o)});let u=null,l=null;n.disabled=!0;C(i,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=new Date;e[0]<=t?(h.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),n.disabled=!0):(u=e[0],n.disabled=!1)}});n.addEventListener("click",()=>{u&&(n.disabled=!0,i.disabled=!0,w())});function w(){l=setInterval(()=>{const t=u-new Date;if(t<=0){clearInterval(l),m(0,0,0,0),h.success({title:"Finished",message:"Countdown complete!",position:"topRight"});return}const{days:r,hours:s,minutes:c,seconds:a}=b(t);m(r,s,c,a)},1e3)}function m(e,t,r,s){o.days.textContent=d(e),o.hours.textContent=d(t),o.minutes.textContent=d(r),o.seconds.textContent=d(s)}function d(e){return String(e).padStart(2,"0")}function b(e){const a=Math.floor(e/864e5),p=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:p,minutes:f,seconds:y}}
//# sourceMappingURL=1-timer.js.map