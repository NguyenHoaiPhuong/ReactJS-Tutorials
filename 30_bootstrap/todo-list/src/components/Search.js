import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <div className="col-4">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" ref="search" placeholder="Search for..." />
                    <div className="input-group-append">
                        <button className="btn btn-success" type="button">Search</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
