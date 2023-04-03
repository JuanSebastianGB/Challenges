import { useRef } from 'react';
import { Filter, Header, Tasks } from './components';
import { HeroImage } from './components/HeroImage';
import Input from './components/Input/Input';
import ContextProvider from './context/ContextProvider';

const App = () => {
  const ref = useRef(null);
  return (
    <ContextProvider>
      <section className="app">
        <HeroImage />
        <div className="container">
          <Header />
          <Input ref={ref} />
          <Tasks />
          <Filter />
        </div>
        <footer>
          <p>Drag and drop to reorder list</p>
        </footer>
      </section>
    </ContextProvider>
  );
};
export default App;
