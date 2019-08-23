import React from 'react'
import Person from './person';

function PersonList() {
    const persons = [
        {
            name: "Akagi",
            age: 33,
            skill: "golang",
        },
        {
            name: "Yushin",
            age: 28,
            skill: "C/C++",
        },
        {
            name: "Mogami",
            age: 27,
            skill: "python",
        }
    ];

    const personList = persons.map(person => <Person personHandler={person} />)
    return (
        <div>
            {personList}
        </div>
    )
}

export default PersonList
    