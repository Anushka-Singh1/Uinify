import './index.css';
import Home from './Pages/Home';
import Start from './Pages/Start';
import Navbar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </>
  );
}

export default App
