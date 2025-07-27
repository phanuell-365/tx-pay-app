import { StrictMode } from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const root = document.getElementById('root');

ReactDom.createRoot(root!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
