import ImageDesktop from '../../images/bg-desktop-light.jpg';
import ImageMobile from '../../images/bg-mobile-light.jpg';
import styles from './styles/HeroImage.module.css';
const HeroImage = () => {
  return (
    <>
      <div className={styles.temp}></div>
      <picture className={styles['hero-image']}>
        <source
          media="(min-width: 600px)"
          srcSet={ImageDesktop}
        />
        <img
          className={styles['hero-image']}
          src={ImageMobile}
          alt="Hero image in mobile resolution"
        />
      </picture>
    </>
  );
};

export default HeroImage;
