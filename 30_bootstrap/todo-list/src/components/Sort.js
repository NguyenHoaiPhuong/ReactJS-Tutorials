import React, { Component } from 'react'

class Sort extends Component {
    render() {
        return (
            <div className="col-6">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort by
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">NAME ACS</a>
                        <a className="dropdown-item" href="#">NAME DESC</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">LEVEL ACS</a>
                        <a className="dropdown-item" href="#">LEVEL DESC</a>
                    </div>
                    <span className="badge badge-success">NAME - DECS</span>
                </div>                
            </div>
        )
    }
}

export default Sort
