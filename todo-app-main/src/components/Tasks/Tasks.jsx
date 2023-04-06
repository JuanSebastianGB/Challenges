import { forwardRef, useCallback, useMemo } from 'react';
import { useTasks } from '../../context/ContextProvider';
import useDeleteCompletedTasks from '../../hooks/useDeleteCompletedTasks';
import Task from '../Task/Task';
import styles from './styles/Tasks.module.css';

const Tasks = forwardRef(({ children }, ref) => {
  const { tasks, filteredTasks } = useTasks();
  const deleteCompletedTasks = useDeleteCompletedTasks();

  const handleDeleteCompleted = useCallback(() => {
    const completedTasks = tasks.filter((task) => task.completed);
    deleteCompletedTasks(completedTasks);
  }, [deleteCompletedTasks, tasks]);

  const pending = useMemo(
    () => tasks.filter((task) => !task.completed).length,
    [tasks]
  );

  const mappedTasks = filteredTasks.map((task, idx) => (
    <div key={task.id}>
      <Task {...task} idx={idx} />
    </div>
  ));

  return (
    <>
      <div ref={ref} className={styles.tasks}>
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
      {children}
    </>
  );
});

Tasks.displayName = 'Tasks';

export default Tasks;
