import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SmoothScrolling from './components/SmoothScrolling/SmoothScrolling.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScrolling>
      <App />
    </SmoothScrolling>
  </StrictMode>
);
