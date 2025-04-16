
import React, { useState } from 'react';

function Hello() {
    const data = 'JSX stands for JavaScript XML';
    return (
        <>
            {/* Task 1 */}
            <div>Hello, React!</div>

            {/* Task 2 */}
            <h1>"Welcome to JSX"</h1>
            <p>{data}</p>
            <Greeting name='React' />
            <WelcomeMessage />
            <UserCard name='Shital' age={27} location='Maharashtra' />
            <Counter />
            <ClickButton />
            <UserForm /> {/* New form component */}
        </>
    );
}

const Greeting = ({ name }) => {
    return <h2>Hello, {name}!</h2>;
};

// Task 2 (Class Component)
class WelcomeMessage extends React.Component {
    render() {

        return (
            <div>
                <h1>Welcome to React!</h1>
            </div>
        );
    }
}

// Task 1 - Props and State 
const UserCard = ({ name, age, location }) => {
    return (
        <div className='card'>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <p>Location: {location}</p>
        </div>
    );
};

// Task 2 - Props and State 
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

// Task - 1 Handling Events 
function ClickButton() {
    const [text, setText] = useState("Not Clicked");

    const handleClick = () => {
        setText("Clicked!");
    };

    return (
        <div>
            <h2>{text}</h2>
            <button onClick={handleClick}>Click Here</button>
        </div>
    );
}

// Task - 2 Handling Events 
function UserForm() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <h2>Input Form</h2>
            <input
                type="text"
                placeholder="Type..."
                value={inputValue}
                onChange={handleChange}
            />
            <p>You typed: {inputValue}</p>
        </div>
    );
}

export default Hello;