import React, { Component } from 'react';


// button that will handle clicks and display happy birthday
const Button = (props) => {
    return (
        <button onClick={props.handleClick}>Happy Birthday!</button>
    );
    }
    // class that will display all person info
class PersonCard extends Component{
    constructor(props) {
        super(props);
    this.state = {
        clickCount: 0
        // using state to keep track of click count
        }
    }
    handleClick = () => {
        this.setState({
        clickCount: this.state.clickCount + 1
        // addin 1 to the state coutn every time btton is clicked
        })
    }
    render(){
        // destructuring props passed in
        const  {firstName, lastName, age, hairColor} = this.props
        return(
            // returning JSX to display the info in person card
            <div>
                <h2> {lastName} , {firstName} </h2>
                <p>{age + this.state.clickCount}</p>
                <p>{hairColor}</p>
                <Button handleClick={this.handleClick} count={this.state.clickCount}/>
            </div>
        );
    }
}

export default PersonCard;


