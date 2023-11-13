import './App.css';
import About from './components/about/About';
import Discover from './components/discover/Discover';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Discover />
      <Footer />
    </div>
  );
}

export default App;
