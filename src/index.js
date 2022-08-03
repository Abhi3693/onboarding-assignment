import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/app';
import './stylesheet/style.scss';

let root = createRoot(document.getElementById('root'));

root.render(<App />);
