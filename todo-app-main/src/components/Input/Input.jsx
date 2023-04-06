import { forwardRef, useEffect, useState } from 'react';
import { v4 as version4 } from 'uuid';
import { useTasks } from '../../context/ContextProvider';
import Check from '../../icons/Check';
import styles from './styles/Input.module.css';

const Input = forwardRef((_, ref) => {
  const [inputData, setInputData] = useState('');
  const { tasks, setTasks, setFilteredTasks } = useTasks();
  const [error, setError] = useState(false);

  const handleInsertTask = (e) => {
    if (e.key === 'Enter') {
      if (inputData.length <= 5) return setError(true);
      const newData = [
        ...tasks,
        {
          id: tasks.length > 0 ? version4() : 1,
          completed: false,
          content: inputData,
        },
      ];
      setTasks(newData);
      setFilteredTasks(newData);
      setInputData('');
    }
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [error]);
  return (
    <>
      <div className={styles.input}>
        <Check />
        <input
          type="text"
          placeholder="Create new todo..."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          onKeyDown={handleInsertTask}
          ref={ref}
        />
        <div
          className={`${styles['container-error']} ${
            error ? styles.error : ''
          }`}
        >
          Required fill the the task
        </div>
      </div>
    </>
  );
});

Input.displayName = 'Input';

export default Input;
