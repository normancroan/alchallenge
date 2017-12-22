import React from 'react';

const Option = props => (
    <div onClick={() => props.onOptionClicked(props.option.id)} className={`Option ${props.option.selected ? "OptionSelected" : "OptionIdle"}`}>
        <h1>{props.option.title}</h1>
        <h3>{props.option.tagline}</h3>
        <h2>{props.option.price}</h2>
    </div>
);

export default Option;