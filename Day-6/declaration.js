
//primitive data
var a=10
let b="abc"
const c=true
console.log(a,b,c)
console.log(typeof(a), typeof(b),typeof(c))
a="abc"
b=10
c= true

//seconday datatypes

array=[1,6,"abc",true]
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array);

//objects

//first type of object declaration

object1={
    "firstname":"St.Joseph's",
    "lastname": "Institute of technology",
    "department":["CSE","IT","AD","ECE"],
    "Training":"MERN",
}
console.log(object1)
console.log(object1.department)
console.log(object1["Training"])

//second type of object declaration

object2={}
object2["firstname"]="St.Josephs"
object2["lastname"]="Institute of Technology"
object2["deparment"]=["cse","it"]
object2["training"]="mern"
console.log(object2)


// third type of object declaration

object3= new Object()
console.log(object3)
//gives a empty object ie..{} nu
object3.training="mern"
object3.department=["CSE","IT","AD","ECE"]
object3.firstname="St.joseph's"
console.log(object3)


//set

set= new Set(["helo"])
console.log(set)
set.add("hello")
console.log(set)