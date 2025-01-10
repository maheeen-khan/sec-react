import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Category from './components/Category';
import Selling from './components/Selling';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Category/>
    <Selling/>
    </>
  );
}

export default App;
