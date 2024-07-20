const clock=document.querySelector("#clock");
//setinterval=repeat this function after intervals in ms
setInterval(function(){
    let date=new Date(); // takes current time
  clock.innerHTML=date.toLocaleTimeString();
},1000)