console.log("start ");

setTimeout(()=>{
    console.log("1st set time ");
},5000);
for(ice=0;ice<10000;ice++){
    console.log(ice);
}
setTimeout(()=>{
    console.log("2nd set time ");
},4000);

setTimeout(()=>{
    console.log("3rd set time ");
},3000);

setTimeout(()=>{
    console.log("4th set time ");
},2000);
setTimeout(()=>{
    console.log("5th set time ");
},1000);

console.log("end");



