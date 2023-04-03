import Moon from '../../icons/Moon';
import styles from './styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Todo</h1>
      <span className="icon">
        <Moon />
      </span>
    </div>
  );
};

export default Header;
