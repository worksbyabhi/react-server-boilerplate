import React from 'react';
import ReactDom from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { ThemeWrapper } from './designSystem/theme';
import { Store } from './store';

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ThemeWrapper>
    <Store>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Store>
  </ThemeWrapper>
);
