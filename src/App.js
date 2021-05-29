// import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart'
import CountrySelect from './components/CountrySelect'
import React, { useState, useEffect } from 'react'
import SimpleCard from './components/Cards'
import axios from 'axios';

function App() {
  const [globalData, setGlobalData] = useState({});


  useEffect(() => {
    async function fetchData() {
      try {
        const url = 'https://covid19.mathdro.id/api';
        const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(url);
        const modifiedData = {
          confirmed,
          deaths,
          recovered,
          lastUpdate,

        }
        // console.log(modifiedData);
        setGlobalData(modifiedData);
        console.log('globalData :>> ', globalData);

      } catch (error) {
        console.log('error :>> ', error);

      }


    }

    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Covid-!9</h1>
      <p>Last Updated On:{new Date(globalData.lastUpdate).toDateString()} </p>
      <SimpleCard data={globalData} />
      <CountrySelect />
      <Chart />
    </div>
  );
}

export default App;
