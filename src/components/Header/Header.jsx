import Logo from '../Logo/Logo';
import './Header.sass';

export default function Header() {
  return (
    <header className='container'>
      <nav className='flex justify-between items-center pt-6'>
        <Logo />
        <p className='mr-auto ml-10 md:ml-[4.5rem]'>V.4.26</p>
        <a
          href='#'
          className='header__btn flex justify-center items-center font-sansfont-bold px-8 py-3.5 rounded-[62px]'
        >
          Try Now
        </a>
      </nav>
    </header>
  );
}
