import React, {useState, useReducer} from 'react';

import './App.css';
import { applyNumber, changeOperation, clearDisplay, memorySet, memoryRecall, memoryClear } from '../actions';
import { initialState, reducer } from '../reducers';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={()=>dispatch(memorySet())}/>
              <CalcButton value={"MR"} onClick={()=>dispatch(memoryRecall())}/>
              <CalcButton value={"MC"} onClick={()=>dispatch(memoryClear())}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>dispatch(applyNumber(1))} value={1}/>
              <CalcButton onClick={()=>dispatch(applyNumber(2))} value={2}/>
              <CalcButton value={3} onClick={()=>dispatch(applyNumber(3))}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=>dispatch(applyNumber(4))}/>
              <CalcButton value={5} onClick={()=>dispatch(applyNumber(5))}/>
              <CalcButton value={6} onClick={()=>dispatch(applyNumber(6))}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=>dispatch(applyNumber(7))}/>
              <CalcButton value={8} onClick={()=>dispatch(applyNumber(8))}/>
              <CalcButton value={9} onClick={()=>dispatch(applyNumber(9))}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>dispatch(changeOperation("+"))}/>
              <CalcButton value={"*"} onClick={()=>dispatch(changeOperation("*"))}/>
              <CalcButton value={"-"} onClick={()=>dispatch(changeOperation("-"))}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=>dispatch(clearDisplay())}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
