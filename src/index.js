import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from './components/button';
import './styles.css'

const buttonsRoot = createRoot(document.getElementById('navigation-buttons'));

buttonsRoot.render(<Button />);

const contentRoot = createRoot(document.getElementById('content-card'));
contentRoot.render()