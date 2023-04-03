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
  const [isFiltering, setIsFiltering] = useState(false);
  return (
    <Context.Provider
      value={[
        originalData,
        setOriginalData,
        filteredData,
        setFilteredData,
        isFiltering,
        setIsFiltering,
      ]}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => {
  return useContext(Context)[0];
};
export const useFunctionContext = () => {
  return useContext(Context)[1];
};
export const useStateFilteredContext = () => {
  return useContext(Context)[2];
};
export const useFunctionFilteredContext = () => {
  return useContext(Context)[3];
};
export const useIsFiltering = () => {
  return useContext(Context)[4];
};
export const useSetIsFiltering = () => {
  return useContext(Context)[5];
};

ContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default ContextProvider;
