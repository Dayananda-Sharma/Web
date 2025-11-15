function g(func){

console.log(func);
}

var c = function b(){
    console.log("call back function ");
    return true;
}
g(c());