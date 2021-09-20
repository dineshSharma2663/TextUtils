import React from 'react';

function AlertComp(props) {
    return (
        props.title && <div className="alert alert-success" role="alert">
            {props.title}
        </div>
    );
}

export default AlertComp;