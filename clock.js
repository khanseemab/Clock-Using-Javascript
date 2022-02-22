// a=new Date;
// let Date=a.toLocaleDateString();
// let Time=a.getHours()+' : '+a.getMinutes()+' : '+a.getSeconds();
// document.getElementById('time').innerHTML= date +" on "+ time;
let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(()=>{

a = new Date();
  date = a.toLocaleDateString(undefined,options);
  time = a.getHours() + ' : ' + a.getMinutes() + ' : ' + a.getSeconds();
  document.getElementById('time').innerHTML = time + "<br> on " + date;
},100);
