/*

function sjitcollege (message,abc){
    console.log(message);
    abc()
}
function callbackeg(){
    console.log("Welcome back to sjit");
}
sjitcollege("welcome to sjit",callbackeg)

*/
function formsubmission(message,cbfun)
{
 if(cbfun()){
 console.log(message)
}
else{
    console.log("form submission didn't occur")
}
}

function formvalidation()
{ 
   
    console.log("submitted")
    return false
}
formsubmission("form ",formvalidation)