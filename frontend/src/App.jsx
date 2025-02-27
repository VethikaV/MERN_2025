import Home from "./components/Functionalcomponents/Home.jsx";
import About from "./components/Functionalcomponents/about.jsx";
import Gallery from "./components/Functionalcomponents/gallery.jsx";
import Contact from "./components/Functionalcomponents/contact.jsx";
import Signup from "./components/Functionalcomponents/signup.jsx";
import Navbar from "./components/Functionalcomponents/navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseEffect from "./components/Functionalcomponents/Hooks/UseEffect.jsx";
import UseState from "./components/Functionalcomponents/Hooks/UseState";
import Login from "./components/Functionalcomponents/login.jsx"
import UseEffectAPI from "./components/Functionalcomponents/Hooks/UseEffetAPI.jsx";
import UseRef from "./components/Functionalcomponents/Hooks/UseRef";
import UseMemo from "./components/Functionalcomponents/Hooks/UseMemo.jsx";
import UseCallback from "./components/Functionalcomponents/Hooks/UseCallback";
import UseMemoize from "./components/Functionalcomponents/Hooks/UseMemoize";
import HoC from "./components/Functionalcomponents/HoC/Hoc.jsx";
import Memo from "./components/Functionalcomponents/Memoization/Memo";
import LazyLoadingAndSuspense from "./components/Functionalcomponents/Memoization/LazyLoadingAndSuspense.jsx";
import CoE from "./components/Functionalcomponents/COE.jsx";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home properties="Hello" sjit="SJIT" />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/use-state" element={<UseState />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/use-effect-api" element={<UseEffectAPI />} />
          <Route path="/use-ref" element= {<UseRef />} />
          <Route path="/use-memo" element= {<UseMemo />} />
          <Route path="/use-callback" element= {<UseCallback />} />
          <Route path="/use-memoize" element= {<UseMemoize />} />
          <Route path="/hoc" element= {<HoC />} />
          <Route path="/memo" element= {<Memo />} />
          <Route path="/lazy" element= {<LazyLoadingAndSuspense />} />
          <Route path="/res" element={<CoE />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;