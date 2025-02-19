{/* edu state ah demonstrate panuratuku*/}
import { useState } from "react";

function about(){
    var initialval=0
    var [num,setNum]= useState(initialval)
    function handedecrement(){
        setNum(num-1)
    }
    
return(
<div>
<h1>About </h1>
<h2>state initial value is {initialval}</h2>
<button onClick={handedecrement}>-</button>
<h3>Updating state:{num}</h3>
<button onClick={()=>setNum(num+1)}>+</button>
    
</div>
);
}
export default about;