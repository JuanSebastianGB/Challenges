import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTasks } from '../../context/ContextProvider';
import styles from './styles/Filter.module.css';

const FilterItem = ({ filter, onClick, label }) => {
  return (
    <span className={filter ? styles.selected : ''} onClick={onClick}>
      {label}
    </span>
  );
};
FilterItem.propTypes = {
  filter: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
};
const Filter = () => {
  const { tasks, setFilteredTasks } = useTasks();

  const [filter, setFilter] = useState({
    all: true,
    active: false,
    complete: false,
  });

  const handleFilterAll = () => {
    setFilteredTasks(tasks);
    setFilter({ all: true, active: false, complete: false });
  };
  const handleFilterActive = () => {
    setFilteredTasks(tasks.filter((task) => !task.completed));
    setFilter({ all: false, active: true, complete: false });
  };
  const handleFilterComplete = () => {
    setFilteredTasks(tasks.filter((task) => task.completed));
    setFilter({ all: false, active: false, complete: true });
  };

  return (
    <div className={styles.filter}>
      <FilterItem filter={filter.all} label="All" onClick={handleFilterAll} />
      <FilterItem
        filter={filter.active}
        label="Active"
        onClick={handleFilterActive}
      />
      <FilterItem
        filter={filter.complete}
        label="Completed"
        onClick={handleFilterComplete}
      />
    </div>
  );
};

export default Filter;
