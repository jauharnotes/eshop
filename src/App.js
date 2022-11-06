import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

import { Home, Contact } from './pages';
import { Header, Footer } from './components';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <h1>Hello World!!!</h1>
    </div>
  );
}

export default App;
