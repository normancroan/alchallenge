import React from "react";

const CallsToAction = props => (
    <div className="CallsToActionsContainer">
        <button onClick={() => {window.location.href='tel:6037142983'}} className="CallToActionButton">Continue</button>
        <h3 onClick={() => {alert('Consider it done!')}} className="FadedText Restore">Restore Purchases</h3>
    </div>
);

export default CallsToAction;