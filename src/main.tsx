import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CartProvider } from './context/CartContext.tsx';
import { FlashProvider } from './context/FlashContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FlashProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FlashProvider>
  </StrictMode>,
);
