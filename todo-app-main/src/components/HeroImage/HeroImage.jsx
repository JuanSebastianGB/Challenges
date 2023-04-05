import styles from './styles/HeroImage.module.css';
const HeroImage = () => {
  return (
    <>
      <div className={styles.temp}></div>
      <picture className={styles['hero-image']}>
        <source
          media="(min-width: 600px)"
          srcSet="src/images/bg-desktop-light.jpg"
        />
        <img
          className={styles['hero-image']}
          src="src/images/bg-mobile-light.jpg"
          alt="Hero image"
        />
      </picture>
    </>
  );
};

export default HeroImage;
