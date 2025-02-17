async function asaw(){
    setTimeout(function()
{
console.log("Hello")
},1000)
}
console.log(asaw().then((res) =>
 console.log(res)
).catch())