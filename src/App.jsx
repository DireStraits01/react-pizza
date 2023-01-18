import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PizzaCard from './components/PizzaCard';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import Drinks from './components/pages/Drinks';
import Deserts from './components/pages/Deserts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="deserts" element={<Deserts />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
