import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HoldUp from './components/HoldUp/HoldUp';
import BoxGallery from './components/BoxGallery/BoxGallery';
import SecondSection from './components/SecondSection/SecondSection';
import Hero from './components/Hero/Hero';
import Soundscape from './components/Soundscape/Soundscape';
import Enhance from './components/Enhance/Enhance';
import './App.sass';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SecondSection />
      <BoxGallery />
      <Soundscape />
      <Enhance />
      <HoldUp />
      <Footer />
    </>
  );
}

export default App;
