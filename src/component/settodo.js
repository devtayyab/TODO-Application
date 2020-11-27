import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {DeleteAll, SetTodo} from '../store/action'
import TextField from '@material-ui/core/TextField';

export const Setdata = () =>{

    var [todo, settodo] = useState("");
    const dispatch = useDispatch();
        return(
            <div>
                 <TextField id="standard-basic" label="Enter ToDo"  value={todo} placeholder="Enter ToDo" onChange={(e)=>settodo(e.target.value)} />
                {/* <input type="text" value={todo} placeholder="Enter ToDo" onChange={(e)=>settodo(e.target.value)}></input> */}
                <br></br>
                <Button variant="outline-success" onClick={()=>{dispatch(SetTodo(String(todo)))}}>Add Task</Button>
                {/* <button onClick={()=>{dispatch(SetTodo(String(todo)))}}> Add Task</button>   
                       */}
                       <Button variant="outline-danger" onClick={()=>{dispatch(DeleteAll())}}>Delete All</Button> 
                {/* <button onClick={()=>{dispatch(DeleteAll())}}> DELETE ALL</button>          */}

            </div>
        )
}