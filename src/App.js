import './App.css';
import Theme from './component/Theme';
import ThemeSwitch from './component/ThemeSwitch';
import { ThemeProvider } from './component/ThemeContext';

function App() {
  return (
    <div className="App">
      
      <ThemeProvider>
      <div className="App">
        <h1>Context API Example</h1>
        <ThemeSwitch />
        <Theme />
      </div>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
