import React from 'react';
import './style.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

export default function App() {
  return (
    <div>
      <h1>Higher Order Component!</h1>
      <ClickCounter name="Yoog" />
      {/* props name is passed to HOC but not to wrapped components */}
      <HoverCounter />
    </div>
  );
}
