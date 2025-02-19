import Home from './components/Functionalcomponents/Home';
import Signup from './components/Functionalcomponents/signup';
import About from './components/Functionalcomponents/about';
import Gallery from './components/Functionalcomponents/gallery';
import Contact from './components/Functionalcomponents/contact';
import Navigation from './components/Functionalcomponents/navbar';


function App() {
  return (

     <main>
      <Navigation />
      <hr></hr>
      <Home />
      <hr></hr>
      <Signup />
      <hr></hr>
      <About />
      <hr></hr>
      <Gallery />
      <hr></hr>
      <Contact />

     </main>
  );
}
export default App;
