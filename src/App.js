import React from 'react'
import './App.css'
import {Display} from './component/display'
import {Setdata} from './component/settodo'
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = ( ) =>{

    return(
        <div className="App">
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