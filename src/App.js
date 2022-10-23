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
    //Fetch data from redux using time
    dispatch(getData({
       apiLinkUser: apiLink
    }))
  }

  return (
    <div className="App">
      <div className={"btns-wrapper"}>
        <button onClick={() => fetchData()}>Generate</button>
        <input onChange={e => setapiLink(e.target.value)} />
        {state.loading && <p>Loading...</p>}
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
