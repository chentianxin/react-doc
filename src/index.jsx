import React, { StrictMode, } from 'react';
import { render } from 'react-dom';
import './concent/run';
import App from '@/App';

const mountEl = document.getElementById('root');
render(
  (
    <StrictMode>
      <App />
    </StrictMode>
  ),
  mountEl,
);