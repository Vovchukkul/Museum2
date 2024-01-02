import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import React from 'react';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Root element not found in the document.');
}