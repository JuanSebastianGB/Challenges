import { forwardRef, useEffect, useState } from 'react';
import { useTasks } from '../../context/ContextProvider';
import Check from '../../icons/Check';
import styles from './styles/Input.module.css';

const Input = forwardRef((_, ref) => {
  const [inputData, setInputData] = useState('');
  const { tasks, setTasks, setFilteredTasks } = useTasks();

  const handleInsertTask = (e) => {
    if (e.key === 'Enter') {
      const newData = [
        ...tasks,
        {
          id: tasks.length > 0 ? Number(tasks.at(-1).id + 1) : 1,
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
  return (
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
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
