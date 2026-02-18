import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import FunctionalComponent from './component/FunctionalComponent';
import ClassComponent from './component/ClassComponent';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Button variant="secondary" text="Click Me!" onClick={() => alert('Working!')} />
                <FunctionalComponent name="Ayes" />
                <ClassComponent />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
