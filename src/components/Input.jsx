import { useState } from 'react';


export default function Input({onSelected, data}) {


    console.log(data.initialInvestment, data.annualInvestment, data.duration, data.expectedReturn);
    
    return (
      <div id="user-input">
        <div className="input-group">
          <div>
            <label>Initial Investment</label>
            <input type="number" name = "initialInvestment" value={data.initialInvestment} onChange={onSelected}/>
          </div>
          <div>
            <label>Annual Investment</label>
            <input type="number"  name = "annualInvestment" value={data.annualInvestment} onChange={onSelected}/>
          </div>
        </div>
        <div className="input-group">
          <div>
            <label>Expected Return</label>
            <input type="number" name = "expectedReturn" value={data.expectedReturn} onChange={onSelected}/>
          </div>
          <div>
            <label>Duration</label>
            <input type="number" name = "duration" value={data.duration} onChange={onSelected}/>
          </div>
        </div>
      </div>
    );
  }
  