import { matchMediaScreen } from '../../hooks/match-media';
import LogoImg from '../../assets/images/full-logo.svg';
import LogoImgMob from '../../assets/images/mob-logo.svg';

export default function Logo(props) {
  const { isMobile } = matchMediaScreen({ widthScreen: 768 });

  return (
    <img
      src={isMobile ? LogoImgMob : LogoImg}
      alt='logo'
      className={`w-8 md:w-[9.5rem] h-fit ${props?.classes || ''}`}
    />
  );
}
