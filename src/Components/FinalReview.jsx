import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './FinalReview.css'


const FinalReview = (props) => {
  const backtoLogin=useHistory();
    const handleSubmit = () => {
        
        setTimeout(() => {
          alert("Success! Your Form has been submitted.");
          backtoLogin.push('/login');
        }, 500);
    } 
       
  return (
    <div className='ins-container2'>
        <label>Full Name: </label>
      <input className='input-fetch' type='text'  value={props.name} disabled='true'></input>
      <label>Year Established: </label>
      <span className='input-fetch'>{props.year}</span>
      <label>Average Profit/Loss: </label>
      <span className='input-fetch'>{props.average}</span>
      <label>Loan Approval Amount: </label>
      <input className='input-fetch' type='text'  value={props.loan} disabled='true'></input>
      <label>PreAssessment: </label>
      <input className='input-fetch' type='text'  value={props.preAssessment} disabled='true'></input>
      <button className='btn-submit' onClick={()=> props.setFlag(!props.flag)}>Back</button>
      <button className='btn-submit' onClick={handleSubmit}>Submit</button>

    </div>
    
  )
}

export default FinalReview