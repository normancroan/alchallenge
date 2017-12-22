import React from 'react';

const Option = props => (
    <div onClick={() => props.onOptionClicked(props.option.id)} className={`Option ${props.option.selected ? "OptionSelected" : "OptionIdle"}`}>
        <h1 className="Option">{props.option.title}</h1>
        <h3 className="Option">{props.option.tagline}</h3>
        <h3 className="Option">{props.option.price}</h3>
    </div>
);

export default Option;