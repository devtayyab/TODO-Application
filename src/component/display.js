import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Edit} from '../store/action'
import {Delete} from '../store/action'
import {Button} from 'react-bootstrap'

export const Display = () =>{
    const Todos =useSelector((state)=>{  
        console.log(state.todo)
        return state.todo

        
    })
    const dispatch =useDispatch();


   

    return(
        <div>
        
            {Todos.map((v,i)=>
           <>
           <br/>
            <li key={i}>{v}
            <Button variant="outline-warning" onClick={()=>dispatch(Edit(i = i))}>Edit</Button>
            <Button variant="outline-danger" onClick={()=>dispatch(Delete(i = i))}>Delete</Button>
            
            </li>
            </>
        )}
       
        </div>
    )
}