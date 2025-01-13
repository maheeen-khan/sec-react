import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Category from './components/Category';
import Selling from './components/Selling';
import Booking from './components/Booking';
import Feedbacks from './components/Feedbacks';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Category/>
    <Selling/>
    <Booking/>
    <Feedbacks/>
    </>
  );
}

export default App;
