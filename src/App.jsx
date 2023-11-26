import './App.css';
import About from './components/about/About';
import Discover from './components/discover/Discover';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { LargeText } from './components/largetext/LargeText';
import Videos from './components/featuredvideos/FeaturedVideos';
import FeaturedVideos from './components/featuredvideos/FeaturedVideos';

function App() {
  return (
    <div className="app">
      <Header />
      <LargeText />
      <About />
      <Discover />
      <FeaturedVideos />
      <Footer />
    </div>
  );
}

export default App;
