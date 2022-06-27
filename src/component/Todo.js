import React, { useState } from 'react'
import { Button, Typography, Box, TextField } from "@mui/material";

const Todo = () => {
    const [todo, setTodo] = useState('')
    const handleChange =(event) =>{
      setTodo(event.target.value)
    }
  
    const [todos, setTodos] = useState([])
  
    const addTodo= () =>{
      setTodos([...todos, todo])
      setTodo('')
    }
  
  return (
    <Box sx={{  p: 2, border: "1px solid grey" }}>
        <Typography gutterBottom> ToDo Application</Typography>
        <TextField value={todo} onChange={handleChange} id="outlined-basic" label="Enter Task for Today" variant="outlined" />
        <Button sx={{marginTop:5}} variant="contained" onClick={addTodo}> Click Me</Button>
       {todos.map(todo =>{
        return <Typography variant = 'h4'>{todo}</Typography>
      })}
      </Box>
  )
}

export default Todo
