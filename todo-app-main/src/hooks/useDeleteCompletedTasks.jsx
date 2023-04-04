import { useTasks } from '../context/ContextProvider';

const useDeleteCompletedTasks = () => {
  const { tasks, setTasks, setFilteredTasks } = useTasks();

  const deleteCompletedTasks = (completedTasks) => {
    const updatedTasks = tasks.filter((task) => !completedTasks.includes(task));
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };
  return deleteCompletedTasks;
};
export default useDeleteCompletedTasks;
