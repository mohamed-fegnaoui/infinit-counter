// select elements

const hoursH4 = document.querySelector(".hours h4");
const minutesH4 = document.querySelector(".minutes h4");
const secondsH4 = document.querySelector(".seconds h4");


const defaultTime = new Date("jan 24 ,3024 23:59:59").getTime();
setInterval(() => {
    
function getDate() {
    const dateNow = new Date().getTime();
    const dateDiff = defaultTime - dateNow;
    const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const minutes = Math.floor((dateDiff % (1000 * 60 * 60) / (1000 * 60)));
    const seconds = Math.floor((dateDiff % (1000 * 60) / 1000));
    hoursH4.textContent = hours 
    minutesH4.innerHTML = minutes;
    secondsH4.innerHTML = seconds;
};
getDate()
},1000)
















































































































    





















   


























