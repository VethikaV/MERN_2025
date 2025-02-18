/*async function asaw(){
 var a=15
    setTimeout(function()
{
console.log("Hello")
},1000)
console.log(a)
}

// async programming na..rendume ore time la trigger aagum

console.log(asaw())
asaw().then((res)=>
{
    console.log(res);
})
 asaw()
 */


 //Instagram demo consoele for post,like ,comment and share

//for liking the program
 likecode = async () =>{
    return new Promise((likepost) =>{
        setTimeout(() => {
            likepost("liked the post successfully")
        }, 5000)
    })
 }

 //for commenting
 commentcode = async () =>{
    return new Promise((commentpost) =>{
        setTimeout(() => {
            commentpost("commented the post successfully")
        }, 5000)
    })
 }
//for sharing
 sharecode = async () =>{
    return new Promise((sharepost) =>{
        setTimeout(() => {
            sharepost("shared the post successfully")
        }, 5000)
    })
 }

 async function postcode(){
    var post= new Promise((createpost) =>{
        setTimeout(()=>{
            createpost("post created sucessfully")
        },5000)
    })

    const[pos,like,comment,share] = await Promise.all([post,likecode(),commentcode(),sharecode()])
    console.log( pos)
    console.log(like)
    console.log( comment)
    console.log(share)

 }
 postcode()