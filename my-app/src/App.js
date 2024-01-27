import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import HeroSection from './components/Herosection/hero';
import CardCarousalTop from './components/CardCarousal/CardCarousalTop';

function App() {
  return (
      <>
        <Navbar />
        <HeroSection />
        <CardCarousalTop />
      </>
  );
}

export default App;
