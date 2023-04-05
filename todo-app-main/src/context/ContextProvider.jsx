import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

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
  const [originalData, setOriginalData] = useState(data);
  const [filteredData, setFilteredData] = useState(originalData);
  const [mode, setMode] = useState('light');

  return (
    <Context.Provider
      value={[
        originalData,
        setOriginalData,
        filteredData,
        setFilteredData,
        mode,
        setMode,
      ]}
    >
      {children}
    </Context.Provider>
  );
};

export const useTasks = () => ({
  tasks: useContext(Context)[0],
  setTasks: useContext(Context)[1],
  filteredTasks: useContext(Context)[2],
  setFilteredTasks: useContext(Context)[3],
});

export const useMode = () => ({
  mode: useContext(Context)[4],
  setMode: useContext(Context)[5],
});

ContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default ContextProvider;
