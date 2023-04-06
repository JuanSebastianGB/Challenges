import { useCallback, useRef } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Filter, Header, Tasks } from './components';
import { HeroImage } from './components/HeroImage';
import Input from './components/Input/Input';
import { useTasks } from './context/ContextProvider';
import { moveListElement } from './utilities';

const App = () => {
  const { tasks, setTasks, setFilteredTasks } = useTasks();
  const ref = useRef(null);

  const onDragEnd = useCallback(
    ({ source, destination }) => {
      if (!destination) return;
      if (destination.index === source.index) return;
      const { index: indexSource } = source;
      const { index: indexDestination } = destination;
      const result = moveListElement(indexSource, indexDestination, tasks);

      setTasks(result);
      setFilteredTasks(result);
    },
    [tasks]
  );

  return (
    <section className="app">
      <HeroImage />
      <div className="container">
        <Header />
        <Input ref={ref} />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="unique">
            {(provided) => (
              <Tasks ref={provided.innerRef} {...provided.droppableProps}>
                {provided.placeholder}
              </Tasks>
            )}
          </Droppable>
        </DragDropContext>
        <Filter />
      </div>
      <footer>
        <p>Drag and drop to reorder list</p>
      </footer>
    </section>
  );
};
export default App;
