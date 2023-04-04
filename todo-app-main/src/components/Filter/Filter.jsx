import { useTasks } from '../../context/ContextProvider';
import styles from './styles/Filter.module.css';
const Filter = () => {
  const { tasks, setFilteredTasks } = useTasks();

  const handleFilterAll = () => {
    setFilteredTasks(tasks);
  };
  const handleFilterActive = () => {
    setFilteredTasks(tasks.filter((task) => !task.completed));
  };
  const handleFilterComplete = () => {
    setFilteredTasks(tasks.filter((task) => task.completed));
  };

  return (
    <div className={styles.filter}>
      <span onClick={handleFilterAll}>All</span>
      <span onClick={handleFilterActive}>Active</span>
      <span onClick={handleFilterComplete}>Completed</span>
    </div>
  );
};

export default Filter;
