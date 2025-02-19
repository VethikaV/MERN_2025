function home() {

  var styling={
     textAlign:"center",
     // backgound colour should be in camel casing
     backgroundColor:"blue",
     color:"white"
  }

   return (
     <div>
       <h1 style={styling}>Home </h1>
     </div>
   );
 }
 export default home;