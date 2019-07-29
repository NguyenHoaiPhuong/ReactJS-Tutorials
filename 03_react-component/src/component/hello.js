import React from 'react'
import './hello.css'

const Hello = (props) => {
    return(
        <h1 className="Hello">Hello {props.name}</h1>
    )
}

export default Hello