import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ProgressContextProvider } from "./contexts/progress"

ReactDOM.render(
  <React.StrictMode>
    <ProgressContextProvider>
      <App />
    </ProgressContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


