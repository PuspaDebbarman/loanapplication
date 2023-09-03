import React, { useState, useEffect } from 'react';
import Data from "../data/data.json"
import './FetchDtls.css'
import FinalReview from './FinalReview';

const FetchDtls = (props) => {

 const [profit, setProfit]=useState([]);
 const [asset, setAsset]=useState([]);
 const [countAsset, setCountAsset]=useState();
 const [count, setCount]=useState();
 const [flag, setFlag]=useState(false);
 const [preAssessment, setPreAssessment]=useState();
 const [loan, setLoan]=useState();
 let sum=0;
 let assetSum=0;

useEffect(() => {
  setProfit(Data.map(e => e.profitOrLoss))
  setCount(Data.map(e => e.profitOrLoss).length) 
  setAsset(Data.map(e => e.assetsValue))
  setCountAsset(Data.map(e => e.assetsValue).length)
}, [])


sum=(profit.reduce(function (result, items){
  return result+items
  },0));

assetSum=(asset.reduce(function (result, items){
   return result+items
   },0));
  
const average=(sum/count);
const avgAsset=(assetSum/countAsset) ; 

const handleReview = () => {
  if(avgAsset > props.amt){
    setLoan(props.amt);
    setPreAssessment(100);
  }
  else if(average > props.amt && avgAsset < props.amt){
    setLoan(props.amt * 0.6);
    setPreAssessment(60);
  }
  else{
    setLoan(props.amt * 0.2);
    setPreAssessment(20);
  }
  setTimeout(() => {
    setFlag(!flag);
  }, 500);
  
}

const year=Data.map((e) => 
  <div key={e.value}>
   {props.accountProv == e.value ? e.year : null}
 </div>
)

  return (
     <div className='ins-container'>
      {flag ? 
      <FinalReview flag={flag} setFlag={setFlag} preAssessment={preAssessment} name={props.name} year={year} average={average} loan={loan}/> 
      : 
      <>
      <label>Full Name: </label>
      <input className='input-fetch' type='text'  value={props.name} disabled='true'></input>
      <label>Year Established: </label>
      <span className='input-fetch'>{year}</span>
      <label>Loan Amount: </label>
      <input className='input-fetch' type='text'  value={props.amt} disabled='true'></input>
      <label>Assets Value: </label>
      <span className='input-fetch'> {Data.map((e) => 
          <div key={e.value}>
           {props.accountProv == e.value ? e.assetsValue : null}
         </div>
       )}</span>
       
   <button className='btn-submit' onClick={()=> props.setClick(!props.click)}>Back</button>
   <button className='btn-submit' onClick={handleReview}>Review</button>
   </>
      }
   </div>
   
   
  )
}

export default FetchDtls