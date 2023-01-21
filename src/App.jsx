import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PizzaList from './components/pages/PizzaList';
import Contacts from './components/pages/Contacts';
import Drinks from './components/pages/Drinks';
import Deserts from './components/pages/Deserts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<PizzaList />} />
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
