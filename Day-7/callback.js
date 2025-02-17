function sjitcollege (message,abc){
    console.log(message);
    abc()
}
function callbackeg(){
    console.log("Welcome back to sjit");
}
sjitcollege("welcome to sjit",callbackeg)