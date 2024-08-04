import { h, render } from 'preact';
import App from './App.jsx';
import './index.css';

// Ensure 'root' matches the ID in your HTML
render(<App />, document.getElementById('root'));
