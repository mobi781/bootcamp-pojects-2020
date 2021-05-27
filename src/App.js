// import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart'
import CountrySelect from './components/CountrySelect'
import Cards from './components/Cards'

function App() {
  return (
    <div className="App">
      <Cards />
      <CountrySelect />
      <Chart />
    </div>
  );
}

export default App;
