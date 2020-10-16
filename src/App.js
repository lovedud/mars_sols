import React from 'react';
import './App.css';
import getSols from "./action/getSols";

function App() {
  return (
      <div className="main">
        <h3>
          To see results, open console and press Start
        </h3>
        <button onClick={()=>{
            getSols.getItems();
        }}>
          START
        </button>
      </div>
  );
}

export default App;
