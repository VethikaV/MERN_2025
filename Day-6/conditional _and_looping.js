//conditional statements

//if

//if-else
/*
if(10<5)
{
    console.log(true);
}
else{
    console.log(false);
}

//nested if

//switch



//looping statements

//while

//do while

//for

array = [10,20,30,40,50,"a","b","c","hello","hi",true,false]

for(var a in array)
{
    console.log(array[a]);
}
    


object1={
    "firstname":"St.Joseph's",
    "lastname": "Institute of technology",
    "department":["CSE","IT","AD","ECE"],
    "Training":"MERN",
}

for(i in object1)
{
 console.log(i)
}

// this is not possbile
for( i of (object1))
{
  console.log(i)
}

for([key, value]of Object.entries(object1))
{
    console.log(i);
}


*/

//for-each syntax

object1={
    "firstname":"St.Joseph's",
    "lastname": "Institute of technology",
    "department":["CSE","IT","AD","ECE"],
    "Training":"MERN",
}

array = [10,20,30,40,50,"a","b","c","hello","hi",true,false]

Object.keys(object1).forEach((ele)=>{
    console.log(ele)
})

//edu vechi dhan next task...why nama key and values type pana o,1...2 lam vaaruthu