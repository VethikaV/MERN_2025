import Home from './components/Functionalcomponents/Home';
import Signup from './components/Functionalcomponents/signup';
import About from './components/Functionalcomponents/about';
import Gallery from './components/Functionalcomponents/gallery';
import Contact from './components/Functionalcomponents/contact';
import Navigation from './components/Functionalcomponents/navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App(properties) {
  return (

     <main>
      <BrowserRouter>
        <Navigation />
         <Routes>
          <Route path='/Home' element ={<Home properties="Hello" sjit="SJIT"/>}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/Gallery" element={<Gallery />}/>
         
         </Routes>
      </BrowserRouter>

     </main>
  );
}
export default App;
