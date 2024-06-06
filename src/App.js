
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';

import Loginpage from './pages/Loginpage';

function App() {
  return (
    <div>
   <Routes>
   <Route path="/" element={<LandingPage/>}/>
   <Route path="login" element={<Loginpage/>} />
   </Routes>
   
    </div>
  );
}

export default App;
