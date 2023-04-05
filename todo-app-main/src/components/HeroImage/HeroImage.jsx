import { useMode } from '../../context/ContextProvider';
import ImageDarkDesktop from '../../images/bg-desktop-dark.jpg';
import ImageDesktop from '../../images/bg-desktop-light.jpg';
import ImageDarkMobile from '../../images/bg-mobile-dark.jpg';
import ImageMobile from '../../images/bg-mobile-light.jpg';
import styles from './styles/HeroImage.module.css';
const HeroImage = () => {
  const { mode } = useMode();
  return (
    <>
      {mode === 'light' ? (
        <picture className={styles['hero-image']}>
          <source media="(min-width: 600px)" srcSet={ImageDesktop} />
          <img
            className={styles['hero-image']}
            src={ImageMobile}
            alt="Hero image in mobile resolution"
          />
        </picture>
      ) : (
        <picture className={styles['hero-image']}>
          <source media="(min-width: 600px)" srcSet={ImageDarkDesktop} />
          <img
            className={styles['hero-image']}
            src={ImageDarkMobile}
            alt="Hero image in mobile resolution"
          />
        </picture>
      )}
    </>
  );
};

export default HeroImage;
