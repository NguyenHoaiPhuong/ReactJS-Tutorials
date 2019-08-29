import React, { Component } from 'react'

export class Card extends Component {
    render() {
        return (
            <div className="card" style={{width: '18rem'}}>
                <div className="card-header" style={{backgroundColor: 'lightblue'}}>
                    Panel title
                </div>
                <div className="card-body">
                    <p className="card-text">Panel Content</p>                        
                </div>
            </div>
        )
    }
}

export default Card
