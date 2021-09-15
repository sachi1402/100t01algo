import React, { useState } from "react";
import "./display.css";
import { FaSkull ,FaGithub} from "react-icons/fa";
import { RiSwordFill } from "react-icons/ri";
function Display({ players, killer, total  ,kicked,serviver }) {
  const [input, setinput] = useState(0);

  return (
    <div className="display">
      <div className='controlpanal'>
       <input
        type="number"
        value={input}
        onChange={(e) => setinput(e.target.value)}
        min={0}
        max={total - 1}
      />
     
      {console.log(kicked[input],input,serviver)}
      <input
        type="range"
        value={input}
        max={total - 1}
        className='range'
        onChange={(e) => setinput(e.target.value)}
      />
      
      <h1 className='value'>{input}</h1>
    <button href='' className='button' target='_blank'><FaGithub/></button></div>

  {/* circle */}
      {players.map((e, key) => (
        <div
          key={key}
          className="playground"
          id={key.toString() === input.toString() ? "" : "non"}
        > 
          {key.toString() === input.toString()
            ? e.map((e, key) => (
                <div
                  key={key}
                  className="playercircle"
                  style={{
                    fontSize:`${total<=15?66:25}px`,height:`${total<=15?111:50}px`,
                    width: `${total<=15?111:50}px`,
                    top: `${Math.round(40* Math.cos((e * 2 * Math.PI) / total-input)) + 40}%`,
                    left: `${Math.round(40 * Math.sin((e * 2 * Math.PI) / total-input)) + 40 }vh`,
                  }}
                >
                  {killer[input] === e ? (
                     e===serviver[0]?<div className="green"><span>{e}</span> </div>:<div className="yellow">{<span><RiSwordFill className='FaSkull'/></span>}</div>
                  ) : kicked[input].toString() === e.toString() ? (
                    e===serviver[0]?<div className="green"><span>{e}</span> </div>: <div className="red"><span>{<FaSkull className='FaSkull'/>}</span></div>
                  ) : (
                    <span>{e} </span>
                   
                  )}
                </div>
              ))
            : null}
        </div>
      ))}
    
    </div>
  );
}

export default Display;
