import React from 'react'
import "../App.css"
import { ACTIONS } from '../App'

export default function App(props) {
    const {digit} = props
  return (
    <>
      {/* <div className="display">
        <input type="text" id='input'/>
        <input type="text" id='result'/>
      </div> */}
        <button onClick={() => props.dispatch({
            type: ACTIONS.ADD_DIGIT,
            payload: {digit}
        })}>
            {props.digit}
        </button>  
    </>
  )
}
