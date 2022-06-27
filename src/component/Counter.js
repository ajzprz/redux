import React from 'react'
import {Button, Typography, Box} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, getProductData } from '../store/slices/counterSlice'
import { useEffect, useContext } from 'react';
import {NameContext} from '..';


export default function Counter() {
  const count = useSelector(state => state.counter.value)
  const products = useSelector((state) => state.counter.products);
  const dispatch = useDispatch()
  const data = useContext(NameContext)
  
  console.log(data)

  useEffect(() => {
    dispatch(getProductData('1'))
  }, [])

  console.log(products)


  return (
    <div>
      <Box  sx={{p:4}} display='flex'>
        <Button
            variant='contained'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Typography variant='h4'>{count}</Typography>
        <Button variant='contained'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </Box>
    </div>
  )
}