import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HoldUp from './components/HoldUp/HoldUp';
import BoxGallery from './components/BoxGallery/BoxGallery';
import SecondSection from './components/SecondSection/SecondSection';
import './App.sass';

function App() {
  return (
    <>
      <Header />
      <SecondSection />
      <BoxGallery />
      <HoldUp />
      <Footer />
    </>
  );
}

export default App;
