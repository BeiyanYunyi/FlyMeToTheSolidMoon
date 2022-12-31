import { Component } from 'solid-js';
import favicon from './assets/favicon.svg';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@unocss/reset/antfu.css';
import 'virtual:uno.css';
import './App.css';

const App: Component = () => (
  <div>
    <div class="logo">
      <a href="https://www.solidjs.com" target="_blank" rel="noreferrer">
        <img src={favicon} alt="Solid Icon" />
      </a>
    </div>
    <h1 class="text-4xl text-center select-none">Hello Vite + Solid</h1>
  </div>
);

export default App;
