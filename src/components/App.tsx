import { Routes } from 'react-router-dom';
import '../css/App.css';
import { Route } from 'react-router-dom';
import Home from '../views/Home';
import Classes from '../views/Classes';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='classes' element={<Classes />} />
    </Routes>
  );
}

export default App;
