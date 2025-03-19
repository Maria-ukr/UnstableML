import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HoldUp from './components/HoldUp/HoldUp';
import BoxGallery from './components/BoxGallery/BoxGallery';
import SecondSection from './components/SecondSection/SecondSection';
import Hero from './components/Hero/Hero';
import './App.sass';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SecondSection />
      <BoxGallery />
      <HoldUp />
      <Footer />
    </>
  );
}

export default App;
