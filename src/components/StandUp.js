import React from 'react';
import './../css/StandUp.css';

const display = (name) =>(
    name[0] && name [1]?
        name[0] + "     " + name[1]:
    location.reload()
)

const Standup = (props) => {
    return (
    <div className="StandUp">
        {display(props.name)}
        <br />
        <button onClick={() => (props.spin(props.name))}>
            SPIN
            </button>
    </div>
    )
}

export default Standup;