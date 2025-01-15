import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Category from './components/Category';
import Selling from './components/Selling';
import Booking from './components/Booking';
import Feedbacks from './components/Feedbacks';
import Sponsor from './components/Sponsor';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Category/>
    <Selling/>
    <Booking/>
    <Feedbacks/>
    <Sponsor/>
    <Subscribe/>
    </>
  );
}

export default App;
