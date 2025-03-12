import './HoldUp.sass';
import BgImage from './../../assets/images/hold-up.jpg';
import ButtonRect from '../ButtonRect/ButtonRect';

export default function HoldUp() {
  return (
    <>
      <section className='container pt-16 pb-24'>
        <div
          style={{ backgroundImage: `url(${BgImage})` }}
          className='hold-up rounded-2xl overflow-hidden h-[80vh] max-md:mx-7'
        >
          <div className='flex flex-col justify-center items-center h-full w-max mx-auto px-6'>
            <h2 className='font-sans flex items-center font-medium'>
              What’s the <span className='line ml-20 mt-7'></span>
            </h2>
            <h2 className='font-serif md:self-end mb-20 font-semibold'>Hold-up?</h2>
            <ButtonRect text='Try Dream' />
          </div>
        </div>
      </section>
    </>
  );
}
