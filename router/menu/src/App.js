import './App.css';
import { Menu } from './components/Menu';
import { HomePage } from './components/HomePage';
import { DriftPage } from './components/DriftPage';
import { ForzaPage } from './components/ForzaPage';
import { TimeAttackPage } from './components/TimeAttackPage';
import { Routes } from 'react-router';
import { Route } from 'react-router';


function App() {
  return (
    <>
      <Menu />
      <div className="page">
      <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
