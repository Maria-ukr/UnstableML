import { useEffect, useState } from 'react';
import LogoImg from '../../assets/images/full-logo.svg';
import LogoImgMob from '../../assets/images/mob-logo.svg';

export default function Logo(props) {
  const [widthScreen, setWidthScreen] = useState();
  useEffect(() => {
    setWidthScreen(window.innerWidth);
  }, []);
  return (
    <img
      src={widthScreen > '768' ? LogoImg : LogoImgMob}
      alt='logo'
      className={`${props?.classes}, max-w-9 md:max-w-[150px] h-auto`}
    />
  );
}
