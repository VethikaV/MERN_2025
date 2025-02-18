/*

function promiseeg( value)
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(value)
            resolve("the promise is resolved")
            else
            reject("This promise is rejected due to value is unmet")
        },5000)
        
    })
   
}
promiseeg(true).then((res)=>{
    console.log(res);
})

.catch((res)=>{
console.log(res);
});
*/

//location finder

//1.promise(locationfound, locationnotfound)
//2.chennai,2000(if location is not found...after 2 secs nama "location not found nu kamichiruvo" )

function locationfinder(loc,time){
    var location = new Promise((locfound,locnotfound)=>{
        setTimeout(()=>{
             if(islocationfound(loc,time))
             {
                locfound(loc)
             }
             else{
                locnotfound(loc, "not found")
             }
        },time)
    })
    location.then((found)=>{
      console.log(found)
    })

    .catch((res)=>{
     console.log(res)
    })
}
islocationfound= (loc,time)=>{
    location="chennai"
    t=1000

    if(loc=== location && t <=time)
        return true
    else
        return false

}
locationfinder("Chennai",2000)