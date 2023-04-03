import { forwardRef, useEffect, useState } from 'react';
import {
  useFunctionContext,
  useStateContext,
} from '../../context/ContextProvider';
import Check from '../../icons/Check';
import styles from './styles/Input.module.css';

const Input = forwardRef((props, ref) => {
  const [inputData, setInputData] = useState('');
  const tasks = useStateContext();
  const setTasks = useFunctionContext();
  const handleInsertTask = (e) => {
    if (e.key === 'Enter') {
      setTasks([
        ...tasks,
        {
          id: Number(tasks.at(-1).id + 1),
          completed: false,
          content: inputData,
        },
      ]);
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
