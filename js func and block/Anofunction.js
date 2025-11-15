var hp = function(){
    console.log("this is annomouns function ");
}
console.log(hp);
hp();

function callingFunc(func){
console.log(func);
}
callingFunc(function (){
    return 10;
}

);