import React from 'react';

const display = (name) =>(
    name?
        name[0] + "     " + name[1]:
    location.reload()
)

const TWENTY_FOUR_HOURS = 1000 * 60 * 60 * 24;

const next = change => {
    setInterval(change, 1500)
}

const Standup = (props) => {
    return (
    <div className="StandUp">
        {display(props.name)}
        <br />
        {next(() => (props.spin(props.name)))}
        <button onClick={() => (props.spin(props.name))}>
            SPIN
            </button>
    </div>
    )
}

export default Standup;