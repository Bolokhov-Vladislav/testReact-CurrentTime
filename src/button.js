import React from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.myClick = this.myClick.bind(this);

    } 

    myClick() {
        document.querySelector('.wrapper').style.backgroundColor = "red";
    }

    render() {
        return(
            <button onClick={this.myClick} className="clicker">change design</button>
        )
    }
}
export default Button;