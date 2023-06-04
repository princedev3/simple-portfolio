import './App.css';
import Backtotop from './Backtotop';
import Analytics from './component/Analytics';
import Cards from './component/Cards';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Newsletter from './component/Newsletter';
//{}[]
function App() {
  return (
    <div className="">
        <Navbar/>
        <Hero/>
        <Analytics/>
        <Newsletter/>
        <Cards/>
        <Footer/>
        <Backtotop/>
    </div>
  );
}

export default App;
