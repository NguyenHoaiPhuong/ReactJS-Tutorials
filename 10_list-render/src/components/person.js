import React from 'react'

function Person({personHandler}) {
    return (
        <h1>            
            I am {personHandler.name}. I am {personHandler.age} years old. I know {personHandler.skill}.
        </h1>
    )
}

export default Person
