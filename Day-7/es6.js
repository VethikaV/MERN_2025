// variables - refer declaratiom.js to se variables 

//arrow function
var testarrowfunction= () =>
{
    console.log("this is test arrow function")
}
testarrowfunction()

 
 function testfunction()
 {
    console.log("hi")
 }
 testfunction()

 //3.scoping

 var a=10
 console.log(a)

 //scoping starts

 {
     a=20
    console.log(a)//20
    const b=30
    console.log(b) //30
    let c=40
    console.log(c)//40
    var e=50
    console.log(e)//50
    a=30
    console.log(a) //30

 }
 console.log(a)//10
 console.log(e)//50
 console.log(b)
 

 //4. Ternary operator

 a=10
 console.log((a%2)?"Odd":"Even");

 

 //5.Spread operator(...)
 stud1year=["user1","user2","user3"]
 stud2year=["user4","user5","user6"]
 stud3year=["user7","user8","user9"]
 stud4year=["user10","user11","user12"]

 studDB=[...stud1year,...stud2year,...stud3year,...stud4year]
 console.log(studDB)
 alumniDB=stud4year
 console.log(alumniDB) 

 

 //6. Rest operator(...)

 function studentDB(...studDataBase)
 {
    console.log(studDataBase);
 }
studentDB(studDB)


//7. Destructig Operator

var array=[10,20,30,40]
var[a,b,c,d,e]=array
console.log(a,b,e);



 //8.Hoisting

 //1.variable hoisting

 console.log(a)
 var a=10;
 console.log(a)

 

 //2.funtional hoisting

 funhoisting()

 function funhoisting(){
    console.log("Checking whether funtional hoisting")
 }


// mela pota...it will show reference error...normal function ku kamikaathu whereas in arrow funtion vera maaturi...work aagathu
 funhoisting = () =>{
    console.log("checking functional hoisting")
 }
 funhoisting()


//9. Class and Object

class classeg{
     classfun() {
        console.log("helo")
        
    }
}
obj = new classeg()
console.log(obj.classfun())

//eduku aprom OOPs concept dhan

//javascript is a fully OOPS language

