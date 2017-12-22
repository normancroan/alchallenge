import React from 'react';

const Benefit = props => (
    <div className="BenefitContainer">
        <div className="Benefit">
            <h1>{props.title}</h1>
            {props.subtitle && <p>{props.subtitle}</p>}
        </div>
    </div>
);

export default Benefit;