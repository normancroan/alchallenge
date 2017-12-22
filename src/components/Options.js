import React, { Component } from 'react';
import Option from "./Option";

class Options extends React.Component{
    state = {
        options: [
            {
                id: 1,
                title: '3',
                tagline: 'months',
                price: '$9.99/mth',
                selected: false
            },
            {
                id: 2,
                title: '3-Day',
                tagline: 'free trial',
                price: 'Free',
                selected: true
            },
            {
                id: 3,
                title: '12',
                tagline: 'months',
                price: '$4.99/mth',
                selected: false
            }
        ]
    }
    onOptionClicked = id => {
        const updatedOptions = this.state.options
            .map(option => {
                if (option.id === id) {
                    return {
                        ...option,
                        selected: true
                    }
                }
                return {
                    ...option,
                    selected: false
                }
            })
        this.setState(id => ({
            options: [...updatedOptions]
        }));
        
    }
    render(){
        return (
            <div className="OptionsContainer">
                {this.state.options.map(option => <Option key={option.id} option={option} onOptionClicked={this.onOptionClicked}/>)}
            </div>
        )
    }
}

export default Options;