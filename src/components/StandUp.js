import React from 'react';
import './../css/Standup.css';

const display = (name) =>(
    name?
        name.map((item, i) => (
        <p key={i}>{item}</p>)):
    location.reload()
)

const TWENTY_FOUR_HOURS = 1000 * 60 * 60 * 24;

const next = change => {
    setInterval(change, TWENTY_FOUR_HOURS)
}

const Standup = (props) => {
    return (
    <div className="StandUp">
        {display(props.name)}
        {next(() => (props.spin(props.name)))}
        <button onClick={() => (props.spin(props.name))}>
            SPIN
            </button>
    </div>
    )
}

export default Standup;