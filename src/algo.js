import React, { useState, useEffect } from "react";
import "./algo.css";
import Display from "./display";
function Algo({ peoples, swordholder,total }) {
  const [noOfboxs, setnoOfboxs] = useState([...peoples]);
  const [swodweald, setsweald] = useState([]);
  const [kicked, setkicked] = useState([]);
  const [serviver, setserviver] = useState(null)
  function circleKills(peoples, swordholder) {
    let array2D = [[...peoples]];
    let killer = [swordholder];
    let exit =[kicked];
  
    while (peoples.length >= 1) {
      console.log(peoples,swordholder)
        swordholder += 1;
        swordholder = swordholder % peoples.length;
        exit.push(peoples[swordholder])
        peoples.splice(swordholder, 1);
      array2D.push([...peoples]);
      killer.push(peoples[swordholder]);
      
    }
    setnoOfboxs(array2D);
    setsweald(killer);
    exit.splice(0,1);
    setkicked([...exit]);
    setserviver(array2D[array2D.length-2])
    return peoples;
  }
  
  useEffect(() => {
    circleKills(peoples, swordholder);
  }, [peoples, swordholder]);
  
  
  return (
    <>
      <Display players={noOfboxs} killer={swodweald} total={total} kicked={kicked} serviver={serviver}/>
    </>
  );
}

export default Algo;
