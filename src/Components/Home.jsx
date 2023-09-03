import React, { useState, useEffect } from 'react';
import './Home.css';
import FetchDtls from './FetchDtls';


const Home = () => {

  const [name, setName]=useState("");
  const [age, setAge]=useState("");
  const [amt, setAmt]=useState("");
  const [tenure, setTenure]=useState("");
  const [accountProv, setAccountProv]=useState("1");
  const [click, setClick]=useState(false);
  
  const handleFetch = () => {
    
    if(name!=0 && age>18 && age<90 && amt!=0 && tenure!=0){
      setTimeout(() => {
        setClick(!click);
      }, 500);  
    }
  
    else{
      alert("Please fill all the details. Loans acceptable for ages 18 to 90");
      setName('');
      setAge('');
      setAmt('');
      setTenure('');
    }  
  }
  return (
    
    <div >
      <h2 className='outside-container'>Loans Application</h2>
    <div className='container'>
        
      <div className='ins-container'>
      { click ? <FetchDtls click={click} setClick={setClick} name={name} amt={amt} accountProv={accountProv}/> :
      <>
      <label>Full Name: </label>
      <input className='input-home' type='text' placeholder='Enter your Full Name' 
        onChange={(e => setName(e.target.value))} value={name} ></input>
      <label>Age: </label>
      <input className='input-home' type='number' placeholder='Enter your Age' 
        onChange={(e => setAge(e.target.value))} value={age}></input>
      <label>Loan Amount: </label>
      <input className='input-home' type='number' placeholder='Loan Amount' 
        onChange={(e => setAmt(e.target.value))} value={amt}></input>
      <label>Loan Tenure(in months): </label>
      <input className='input-home' type='number' placeholder='Loan Tenure' 
        onChange={(e => setTenure(e.target.value))} value={tenure}></input>
      <label>Accounting Provider: </label>
      <select className='select-btn' onChange={(e => setAccountProv(e.target.value))} value={accountProv}>
        <option value='1'>Xero</option>
        <option value='2'>MYOB</option>
        <option value='3'>SAP S4/ HANA</option>
        <option value='4'>NetSuite</option>
      </select>
      
      <button className='btn-fetch' onClick={handleFetch}>Fetch Details</button>
      </>
      }
      
      </div>
    </div>
    </div>
   
  )
}

export default Home