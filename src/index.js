import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/Filmoteka-react/">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
