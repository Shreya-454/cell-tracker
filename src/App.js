
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import Loginpage from './pages/Loginpage';
import Backtop from './components/common/Backtop';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './components/common/Footer';
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "linear",
    });
  }, []);
  return (
    <div className='max-w-[1920px] mx-auto'>
   <Routes>
   <Route path="/" element={<LandingPage/>}/>
   <Route path="login" element={<Loginpage/>} />
      </Routes>
      <Backtop/>
    </div>
  );
}

export default App;
