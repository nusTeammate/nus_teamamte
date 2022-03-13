import React, {useEffect, useState} from 'react'
import PageProfile from './PageProfile';
import Header from './Components/Header';
import {BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import styles from './App.module.css';
import pic from './imgs/Rectangle 8.png';
import { FormControl, TextField } from '@mui/material';

import { API } from 'aws-amplify';
import { StylesContext } from '@material-ui/styles';

function App(props) {
  /*async function callApi() {
    try{
        const peopleData = await API.get('localhost:3001', '/test')
        console.log('data:', peopleData)
    } catch (err) {
        console.log(err)
    }
  }
  useEffect(() =>{
    callApi()
  }, [])
  let history = useHistory();*/
  
  function handleSubmit() {
    setValue("1");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var obj = {name: name, email: email, password: password};

    console.log(name);

    fetch('http://localhost:3001/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
       },
        body: JSON.stringify(obj)
      })
    .then((res) => {console.log(res); return res.json();})
    .catch((error) => {
      console.error('Error:', error);
    });
  }


  const [value, setValue] = useState("100");
  return(
    <Router>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Rozha+One&display=swap');
      </style>
      { value == "100"
      ?(<div style={{float:"left", width:"50%"}}>
      <div style={{marginTop:"4%", marginLeft:"20%"}}>
        <span className={styles.title} style={{color:"#032D23", marginBottom:"-10px"}}>Welcome to</span>
        <br />
        <span className={styles.title} style={{color:"#42A5F5"}}>NUSTeammate</span>
      </div>
      <div style={{marginLeft:"20%", marginTop:"-26px"}}>
        <p className={styles.text}>Sign Up</p>
      </div>

      <div
       style={{marginLeft:"20%", marginTop:"-30px"}}>
        <input className={styles.input} id = "name" placeholder='Username'></input>
        <br />
        <input className={styles.input} id = "email" placeholder='Email'></input>
        <br />
        <input className={styles.input} id = "password" placeholder='Password'></input>
        <br />
        <input className={styles.input} placeholder='Confirm Password'></input>
        <br />
        <button type="submit"
         onClick = {handleSubmit}
         style={{backgroundColor:"#032D23", color:"#ffffff", width:"55%", height:"35px", border:"none"
         ,cursor:"pointer", borderRadius:"5px", marginTop:"20px"}}>
           Sign Up
        </button>
      </div>
      <div style={{marginLeft:"20%",marginTop:"7px"}}>
        <span style={{fontSize:"14px"}}>Have an account? </span>
        <Link to='/' style={{color:"#42A5F5", textDecoration:"none", fontSize:"13px", fontWeight:"bold"}}> Sign in</Link>
      </div>

      </div>)

      :(<div>
        <Header value={value} setValue={setValue} />

        <Route exact path="/">
        {value == "1"
         ? <div style={{marginTop:"40px"}}>
            <Link 
             to='/project/1'
             style={{marginLeft:"20%", fontSize:"26px", color:"#000000", textDecoration:"none"}}>
               Board Game Simulator
            </Link>
            <Link 
             to='/newProject'
             style={{marginLeft:"20%", fontSize:"18px", color:"#000000", textDecoration:"none"}}>
               New Project
            </Link>
           </div>
         : <div />}
         </Route>

         <Route path='/newProject' >
          <div style={{marginTop:"40px"}}>
            <Link 
             to='/project/2'
             style={{marginLeft:"20%", fontSize:"18px", color:"#000000", textDecoration:"none"}}> 
             <button
              style={{backgroundColor:"#032D23", color:"#ffffff", width:"15%", height:"35px", border:"none"
                      ,cursor:"pointer", borderRadius:"5px"}}>
                Create
             </button>
            </Link>
          </div>
         </Route>

         <Route path='/project'>
           <div style={{marginTop:"40px"}}>
            <Link
             to="/"
             style={{marginLeft:"20%", fontSize:"18px", color:"#000000", textDecoration:"none"}}>
              <button 
               style={{backgroundColor:"#ffffff",color:"#42A5F5", borderColor:"#ABBDE1"
                       ,width:"15%", height:"35px", border:"solid", fontWeight:"bold"
                       ,cursor:"pointer", borderRadius:"5px"}}>
                delete</button>
            </Link>
            <Link
             to='/edit'
             style={{marginLeft:"20%", fontSize:"18px", color:"#000000", textDecoration:"none"}}>
            <button 
               style={{backgroundColor:"#ffffff",color:"#42A5F5", borderColor:"#ABBDE1"
                       ,width:"15%", height:"35px", border:"solid", fontWeight:"bold"
                       ,cursor:"pointer", borderRadius:"5px"}}>edit</button>
            </Link>
            </div>
         </Route>

         <Route path='/edit'>
         <div style={{marginTop:"40px"}}>
            <Link 
             to='/project/2'
             style={{marginLeft:"20%", fontSize:"18px", color:"#000000", textDecoration:"none"}}> 
             <button
              style={{backgroundColor:"#032D23", color:"#ffffff", width:"15%", height:"35px", border:"none"
                      ,cursor:"pointer", borderRadius:"5px"}}>
                Edit
             </button>
            </Link>
          </div>
         </Route>
      </div>)
}
    </Router>
  );
}


export default App;
