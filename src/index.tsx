import { render } from 'preact';  
import { Header } from './components/Header.jsx'; 
import './style.css';
import { setupScene } from './components/Scene.js';

export function App() {
	return ( <Header /> );
}

render(<App />, document.getElementById('app')!);
setupScene(document.getElementById('scene')!);
