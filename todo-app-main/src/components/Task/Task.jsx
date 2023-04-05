import PropTypes from 'prop-types';
import { useTasks } from '../../context/ContextProvider';
import Check from '../../icons/Check';
import Cross from '../../icons/Cross';
import styles from './styles/Task.module.css';

const Task = ({ content, completed, id }) => {
  const { tasks, setTasks, setFilteredTasks } = useTasks();

  const handelToggleCompleteState = (e) => {
    const result = tasks.map((task) => {
      if (task.id === id) return { ...task, completed: !task.completed };
      else return task;
    });
    setTasks(result);
    setFilteredTasks(result);
  };
  const handleDelete = (e) => {
    e.stopPropagation();
    const filtered = tasks.filter((task) => task.id !== id);
    setTasks(filtered);
    setFilteredTasks(filtered);
  };
  return (
    <div className={styles.task} onClick={handelToggleCompleteState}>
      <div className={styles.left}>
        <span className={styles.icon}>
          <Check checked={completed} />
        </span>
        <div className={`${styles.text} ${completed ? styles.dashed : ''}`}>
          {content}
        </div>
      </div>
      <span className={styles.delete} onClick={handleDelete}>
        <Cross />
      </span>
    </div>
  );
};

Task.propTypes = {
  content: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
export default Task;
