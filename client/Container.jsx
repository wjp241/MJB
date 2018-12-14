import React from 'react';
import Upload from './Upload.jsx';
import Display from './Display.jsx';

function Container (props) {
    return (
        <div>
            <Upload addToState={props.addToState} submit={props.submit}/>
            <hr></hr>
            <Display images={props.images} />
        </div>
    )
}

export default Container;