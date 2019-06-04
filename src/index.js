import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <h1>Hello World!!!</h1>
        </React.Fragment>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));