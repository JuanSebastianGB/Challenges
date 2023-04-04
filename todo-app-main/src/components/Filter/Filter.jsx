import { useState } from 'react';
import { useTasks } from '../../context/ContextProvider';
import styles from './styles/Filter.module.css';
const Filter = () => {
  const { tasks, setFilteredTasks } = useTasks();
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleFilterAll = () => {
    setFilteredTasks(tasks);
    setAll(true);
    setActive(false);
    setComplete(false);
  };
  const handleFilterActive = () => {
    setFilteredTasks(tasks.filter((task) => !task.completed));
    setAll(false);
    setActive(true);
    setComplete(false);
  };
  const handleFilterComplete = () => {
    setFilteredTasks(tasks.filter((task) => task.completed));
    setAll(false);
    setActive(false);
    setComplete(true);
  };

  return (
    <div className={styles.filter}>
      <span
        className={all ? styles.selected : ''}
        name="all"
        onClick={handleFilterAll}
      >
        All
      </span>
      <span
        className={active ? styles.selected : ''}
        name="active"
        onClick={handleFilterActive}
      >
        Active
      </span>
      <span
        className={complete ? styles.selected : ''}
        name="complete"
        onClick={handleFilterComplete}
      >
        Completed
      </span>
    </div>
  );
};

export default Filter;
