import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HomePageComponent from './components/HomePageComponent';
import MplnComponent from './components/MplnComponent';
import AdobeComponent from './components/AdobeComponent';
import PaypalComponent from './components/PaypalComponent';
import DiscordComponent from './components/DiscordComponent';
import IntelComponent from './components/IntelComponent';

function App() {
  return (
    <BrowserRouter >
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<HomePageComponent/>}/>
        <Route path='/mpln' element={<MplnComponent/>}/>
        <Route path='/adobe' element={<AdobeComponent/>}/>
        <Route path='/paypal' element={<PaypalComponent/>}/>
        <Route path='/discord' element={<DiscordComponent/>}/>
        <Route path='/intel' element={<IntelComponent/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
