import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HoldUp from './components/HoldUp/HoldUp';
import Motion from './components/Motion/Motion';
import SecondSection from './components/SecondSection/SecondSection';
import Hero from './components/Hero/Hero';
import Soundscape from './components/Soundscape/Soundscape';
import Enhance from './components/Enhance/Enhance';
import Preloader from './components/Preloader/Preloader';
import ThirdSection from './components/ThirdSection/ThirdSection';
import './App.sass';

function App() {
  return (
    <>
      <Preloader />
      <Header />
      <Hero />
      <SecondSection />
      <ThirdSection />
      <Motion />
      <Soundscape />
      <Enhance />
      <HoldUp />
      <Footer />
    </>
  );
}

export default App;
