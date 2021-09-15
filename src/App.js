import Algo from "./algo";
import "./App.css";
import { React, useState, useEffect } from "react";
function App() {
  const [numberOfPeoples, setnumberOfPeoples] = useState([]);
  const [instialSwordholder, setinstialSwordholder] = useState(10);
  const [total, settotal] = useState(10)
  function arraymaker(s) {
    let arr = [];
    for (let i = 0; i < s; i++) {
      arr[i] = i;
    }
    setnumberOfPeoples(arr);
    settotal(s);
    
  }
  function swordholder(x) {
    setinstialSwordholder(x);
  }
  useEffect(() => {
    arraymaker(15);
    swordholder(9);
  }, []);
  return (
    <div className="App">
     
      <Algo peoples={numberOfPeoples} swordholder={instialSwordholder}  total={total}/>
    </div>
  );
}

export default App;
