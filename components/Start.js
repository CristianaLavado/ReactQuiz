import React from "react";

export default function Start(props) {

    return (
        <div className="start">
            <h1 className="start--title">Quizzical</h1>
            <p className="start--text">Press the button to start the quiz.</p>
            <button className="start--button" onClick={props.toggleStart}>Start quiz</button>
        </div>
    )
}