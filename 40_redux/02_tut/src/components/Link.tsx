import React, { Component } from 'react'
import { Action } from '../actions/actions'

type Props = {
    onClick: () => Action,
    active: boolean,
    children: string
}

type States = {

}

export class Link extends Component<Props, States> {
    render() {
        let {onClick, active, children} = this.props
        return (
            <button
                onClick={onClick}
                disabled={active}
                style={{
                    marginLeft: '4px',
                }}
            >
                {children}
            </button>
        )
    }
}

export default Link
