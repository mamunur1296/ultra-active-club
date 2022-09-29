import React from 'react';
import './Questionsandanswers.css';

const Questionsandanswers = () => {
    return (
        <div className='container my-5'>
            <h2 className='' > Some common questions and discussions</h2>
            <div className='q-contain'>
                <h5 className='my-5'>How does React work?</h5>
                <p>How does React Work? React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM. React only changes what needs to be changed!</p>
                <h5  className='my-5'>What is the difference between props and estates?</h5>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
                <h5  className='my-5'>What does the use effect do other than load data?</h5>
                <p>The useEffect hook is the Swiss Army knife of all the hooks. It’s the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it.

                Pretty much anything you want to “do” in a React component other than return JSX (any sort of side effect), will go into a useEffect. (and you can have more than one useEffect per component, too)

                All this power comes with a tradeoff: useEffect can be confusing until you understand how it works.

                In this post, we’re going to look at lots of useEffect examples so that you understand the mental model and can use it effectively in your own code.

                Here’s what we’ll cover:</p>
            </div>
        </div>
    );
};

export default Questionsandanswers;