{/* edula state ah apply paniruko*/}


function home(properties) {

  var styling={
     textAlign:"center",
     // backgound colour should be in camel casing
     backgroundColor:"blue",
     color:"white"
  }
  var a=10
   return (
     <div>
       <h1 style={styling}>Home </h1>
       <h2>Bellow tag is for props</h2>
       {/*<h3>props:{styling.backgroundColor}</h3>*/}
       <h3>props:{properties.properties},{properties.sjit}</h3>
     </div>
   );
 }
 export default home;