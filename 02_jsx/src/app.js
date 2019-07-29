import React from 'react';

// Nested Element
class App1 extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <h2>Content</h2>
                <p>Here is the content</p>
            </div>
        );
    }
};

// Custom Attribute
export class App2 extends React.Component {
    render() {
        return (
            <div>
                <h1 data-myattribute="somevalue">Custom Attribute</h1>
            </div>
        )
    }
};

// Javascript Expression
export class App3 extends React.Component {
    render() {
        let i = 1;
        return(
            <div>
                <h1> {i === 1? 'True!!!' : 'False'} </h1>
            </div>
        );        
    }
}

// Style
export class App4 extends React.Component {
    render() {
        let myStyle = {
            fontSize: 100,
            color: '#FF0000',
        }

        return (
            <div>
                <h1 style={myStyle}>Style</h1>
                {/*Multi line comment...*/}
            </div>
        );
    }
}

export default App1;