import React from 'react';
import './App.css';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./actions/bitcoinActions";

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.bitcoin)
  const [apiLink, setapiLink] = React.useState('NA');

  const fetchData = () => {
    dispatch(getData({
       apiLinkUser: apiLink
    }))
  }

  const interval = () => setInterval(() => {
    fetchData()
  }, 5000);

  return (
    <div className="App">
      <h1>Interconnector Serverless Sample Workshop</h1>
      <p1>By Adrian Causby</p1>
      <div className={"btns-wrapper"}>
        <button onClick={() => interval()}>Generate</button>
        <input onChange={e => setapiLink(e.target.value)} />
        {state.loading && <p>Updating...</p>}
      </div>
      <div className={"chart-wrapper"}>
        <Line
          data={state.data}
        />
      </div>
    </div>
  );
}

export default App;
