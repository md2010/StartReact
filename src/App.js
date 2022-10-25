import logo from './logo.svg';
import './App.css';
import WineSortsAddWine from './WineSortsAddWine';
import WineSortsTable from './WineSortsTable';

function App() {
  return (
    <div className="App">      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Fill the form to add new wine.
        </p>       
      </header>
      <WineSortsAddWine />
       <WineSortsTable />
    </div>
  );
}

export default App;
