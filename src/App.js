
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Backtop from './components/common/Backtop';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
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
   <Route path="login" element={<LoginPage/>} />
      </Routes>
      <Backtop/>
    </div>
  );
}

export default App;
