import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import HomePage from './Page/HomePage/HomePage';
import LifeCyclePage from './Page/LifeCyclePage/LifeCyclePage';
import LoginPage from './Page/LoginPage/LoginPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/life-cycle' element={<LifeCyclePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
