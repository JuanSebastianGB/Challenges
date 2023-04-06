import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks';
import { updateGlobalTheme } from '../utilities';

const data = [
  { id: 1, completed: false, content: 'Complete online Javascript course' },
  { id: 2, completed: false, content: 'Jog around the park 3x' },
  { id: 3, completed: false, content: '10 minutes meditation' },
  { id: 4, completed: true, content: 'Read for 1 hour' },
  { id: 5, completed: false, content: 'Pick up groceries' },
  { id: 6, completed: false, content: 'Complete Todo App on Frontend Mentor' },
];

const Context = createContext({});
export const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('data', data);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [mode, setMode] = useLocalStorage('mode', 'dark');

  useEffect(() => updateGlobalTheme(mode), []);
  useEffect(() => localStorage.setItem('mode', mode), [mode]);
  useEffect(() => localStorage.setItem('data', JSON.stringify(tasks)), [tasks]);

  return (
    <Context.Provider
      value={{
        tasks,
        setTasks,
        filteredTasks,
        setFilteredTasks,
        mode,
        setMode,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useTasks = () => useContext(Context);
export const useMode = () => useContext(Context);

ContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default ContextProvider;
