import {
  useFunctionContext,
  useFunctionFilteredContext,
  useStateContext,
  useStateFilteredContext,
} from '../../context/ContextProvider';
import Task from '../Task/Task';
import styles from './styles/Tasks.module.css';

const Tasks = () => {
  const tasks = useStateContext();
  const setTasks = useFunctionContext();

  const filteredTasks = useStateFilteredContext();
  const setFilteredTasks = useFunctionFilteredContext();

  const handleDeleteCompleted = () => {
    const result = tasks.filter(({ completed }) => !completed);
    setTasks(result);
    setFilteredTasks(result);
  };

  const pending = tasks.filter(({ completed }) => !completed).length;
  const mappedTasks = filteredTasks.map((task) => (
    <div key={task.id}>
      <Task {...task} />
    </div>
  ));

  return (
    <div className={styles.tasks}>
      {mappedTasks}
      <div className={styles.footer}>
        <span>{pending} items left</span>
        <span
          className={styles['clear-completed']}
          onClick={handleDeleteCompleted}
        >
          Clear Completed
        </span>
      </div>
    </div>
  );
};

export default Tasks;
