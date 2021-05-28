// import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart'
import CountrySelect from './components/CountrySelect'
// import Cards from './components/Cards'
import SimpleCard from './components/Cards'

function App() {
  return (
    <div className="App">
      <h1>Covid-!9</h1>
      <p>Last Updated On: </p>
      <SimpleCard />
      <CountrySelect />
      <Chart />
    </div>
  );
}

export default App;
