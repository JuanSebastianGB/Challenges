import { ToggleMode } from '../ToggleMode';
import styles from './styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Todo</h1>
      <span className="icon">
        <ToggleMode />
      </span>
    </div>
  );
};

export default Header;
