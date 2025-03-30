import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from './components/button';
import './styles.css'

const root = createRoot(document.getElementById('navigation-buttons'));
root.render(<Button />);

