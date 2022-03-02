import React, {useEffect, useState} from 'react'
import './App.css';
import PageProfile from './PageProfile';

import { API } from 'aws-amplify'

function App() {
  async function callApi() {
    try{
        const peopleData = await API.get('mainApi', '/test')
        console.log('data:', peopleData)
    } catch (err) {
        console.log(err)
    }
  }
  useEffect(() =>{
    callApi()
  }, [])
  return (
    <div>
      <PageProfile />
    </div>
  );
}

export default App;
