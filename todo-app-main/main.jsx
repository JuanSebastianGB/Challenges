import { createRoot } from 'react-dom/client';
import App from './src/App';
import ContextProvider from './src/context/ContextProvider';
const root = createRoot(document.getElementById('root'));

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
