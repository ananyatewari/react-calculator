import React from 'react'
import "../App.css"
import { ACTIONS } from '../App'

export default function Operations(props) {
    const operation = props.operation
  return (
    <>
    <button onClick={() => 
        props.dispatch({
            type: ACTIONS.CHOOSE_OPERATION,
            payload: {operation}
        })
    }>
        {operation}
    </button>
    </>
  )
}
