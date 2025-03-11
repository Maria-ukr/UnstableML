import { useEffect, useState } from 'react';
import LogoImg from '../../assets/images/full-logo.svg';
import LogoImgMob from '../../assets/images/mob-logo.svg';

export default function Logo(props) {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [logoImage, setLogoImage] = useState();

  useEffect(() => {
    const handleWidth = () => {
      setWidthScreen(window.innerWidth);
    };
    window.addEventListener('resize', handleWidth);
      (props?.size === 'full' && widthScreen >= 768)
        ? setLogoImage(LogoImg)
        : setLogoImage(LogoImgMob);
    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, [widthScreen, props?.size]);

  return (
    <img
      src={logoImage}
      alt='logo'
      className={`w-8 md:w-[9.5rem] h-fit ${props?.classes || ''}`}
    />
  );
}
