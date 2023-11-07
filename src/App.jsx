import './App.css';
import About from './components/about/About';
import Discover from './components/discover/Discover';
import Header from './components/header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Discover />
    </div>
  );
}

export default App;
