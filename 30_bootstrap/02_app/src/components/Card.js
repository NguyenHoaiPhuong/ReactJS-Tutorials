import React, { Component } from 'react'

export class Card extends Component {
    render() {
        return (
            <div className="card" style={{width: '25rem'}}>
                <div className="card-header" style={{backgroundColor: 'lightblue'}}>
                    {this.props.titleHandle}
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">Item 1</li>
                        <li className="list-group-item">Item 2</li>
                        <li className="list-group-item">Item 3</li>
                    </ul>                     
                </div>
            </div>
        )
    }
}

export default Card
