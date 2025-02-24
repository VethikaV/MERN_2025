 import '../css/navbar.css'
 import { Link } from 'react-router-dom';
 
 const navbar= () =>{
   return(
    <header>
        <nav>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Signup'>Signup</Link></li>
            <div>
            <span>Hooks</span>
            <ol>
            <li><Link to='/use-state'>use state</Link></li>
            <li><Link to='/use-effect'>use effect</Link></li>
            </ol>
            </div>
            <li><Link to='/Contact'>Contact</Link></li>
            <li><Link to='/Gallery'>Gallery</Link></li>
        </nav>
    </header>
   );
}
export default navbar