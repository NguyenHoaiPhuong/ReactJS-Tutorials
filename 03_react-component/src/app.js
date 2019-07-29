import React, {Component} from 'react'
import Hello from './component/hello'
import Welcome from './component/welcome'

class App extends Component {
    render() {
        // Only return 1 jsx element.
        // In case of multiple elements, wrap them in <div>
        return(
            <div>
                <Hello name="Akagi" />
                <Hello name="Yushin" />
                <Hello name="Mogami" />

                <Welcome name="Akagi" />
                <Welcome name="Yushin" />
                <Welcome name="Mogami" />
            </div>            
        );
    }
}

export default App;