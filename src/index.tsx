import { Grommet } from 'grommet';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { Gallery } from './pages/gallery';
import theme from './theme';

console.log('Running');

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Grommet theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </Grommet>
  </React.StrictMode>
);
