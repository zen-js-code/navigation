import React from 'react';
import {render} from 'react-dom';

import 'semantic-ui-css/semantic.min.css';

import {Button} from 'semantic-ui-react';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
};

const App = () => (
    <div style={styles}>
        <h2>Start editing to see some magic happen {'\u2728'}</h2>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
    </div>
);

render(<App />, document.getElementById('root'));
