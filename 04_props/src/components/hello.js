import React from 'react'
import './hello.css'

// export default function Hello(props) {
//     return (
//         <div className="Hello">
//             <p>Hello {props.name} {props.children}</p>
//         </div>
//     )
// }

// export default function Hello({name, children}) {
//     return (
//         <div className="Hello">
//             <p>Hello {name} {children}</p>
//         </div>
//     )
// }

export default function Hello(props) {
    let {name, children} = props
    return (
        <div className="Hello">
            <p>Hello {name} {children}</p>
        </div>
    )
}