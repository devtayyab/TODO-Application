import React,{useState,useEffect} from 'react'
import './App.css'
import {Display} from './component/display'
import {Setdata} from './component/settodo'
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = ( ) =>{
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(`/.netlify/functions/hello?name=from Serverless Function tayyab`)
        .then(response => response.json())
        .then(data => setData(data));
    }, []);
    return(
        <div className="App">
             {data.message}
            <h1 style={{fontFamily: "serif"}}> TODO 
            <br></br>
            APPLICATION</h1>
            <Setdata></Setdata>
            <br/>
            <br/>
            <br/>
            <Display></Display>
            
            
        </div>
    )
}