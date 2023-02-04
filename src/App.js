import { Outlet } from 'react-router-dom';
import './App.css';
import Search from './components/search/Search';

function App() {
  return (
    <>
      <Search />
      <Outlet />
    </>
  );
}

export default App;
