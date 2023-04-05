import { useMode } from '../../context/ContextProvider';
import Moon from '../../icons/Moon';
import Sun from '../../icons/Sun';
import styles from './styles/ToggleMode.module.css';

const ToggleMode = () => {
  const { mode, setMode } = useMode();
  const handleToggle = () => {
    const $body = document.querySelector('body');
    setMode((prev) => {
      const changed = prev === 'light' ? 'dark' : 'light';
      $body.setAttribute('data-theme', changed);
      return changed;
    });
  };

  return (
    <div className={styles.togglemode} onClick={handleToggle}>
      {mode === 'light' ? <Sun /> : <Moon />}
    </div>
  );
};

export default ToggleMode;
