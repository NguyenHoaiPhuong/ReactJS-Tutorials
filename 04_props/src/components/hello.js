import React from 'react'
import './hello.css'

export default function Hello(props) {
    return (
        <div className="Hello">
            <p>Hello {props.name} {props.children}</p>
        </div>
    )
}
