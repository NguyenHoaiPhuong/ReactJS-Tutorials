import React from 'react'

function NameList() {
    const names = ['Bruce', 'Diana', 'Akagi']
    const nameList = names.map(name => <h1>Hello {name}</h1>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
