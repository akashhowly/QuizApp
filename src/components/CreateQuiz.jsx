import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from './useLocalStorage'; // 

export default function CreateQuiz() {
    const [quizName, setQuizName] = useLocalStorage('quizName', '');
    const [question, setQuestion] = useLocalStorage('question', '');
    const [option1, setOption1] = useLocalStorage('option1', '');
    const [option2, setOption2] = useLocalStorage('option2', '');
    const [option3, setOption3] = useLocalStorage('option3', '');
    const [option4, setOption4] = useLocalStorage('option4', '');
    const [quizCreated, setQuizCreated] = useState(false);

    const handleAddQuestion = () => {
        if (!quizName || !question || !option1 || !option2 || !option3 || !option4) {
            alert('You have to fill all inputs');
            return;
        }
        alert('Question added successfully');

        setQuizName('');
        setQuestion('');
        setOption1('');
        setOption2('');
        setOption3('');
        setOption4('');
    };

    const handleSubmit = () => {
        const confirmSubmit = window.confirm('Are you sure you want to submit the quiz?');
        if (confirmSubmit) {
            setQuizCreated(true);
            setQuizName('');
            setQuestion('');
            setOption1('');
            setOption2('');
            setOption3('');
            setOption4('');
        }
    };

    return (
        <div>
            <div className='navDiv'>
                <nav className='navBar'>
                    <button><li>HOME</li></button>
                    <button><li>ABOUT</li></button>
                    <button><li>FEATURES</li></button>
                    <button><li>CONTACT</li></button>
                    {/* <button><li>LOG OUT</li></button> */}
                </nav>
            </div>
            <hr />
            <div>
                <h2><label htmlFor="quizName">Enter Quiz Name:</label></h2>
                <h2>
                    <input
                        type="text"
                        name="quizName"
                        placeholder='Enter Your Quiz Name Here'
                        value={quizName}
                        onChange={(e) => setQuizName(e.target.value)}
                    />
                </h2>
                <hr />
            </div>
            <label htmlFor="question">Enter the question:</label>
            <input
                type="text"
                name="question"
                placeholder='Enter the question'
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            /><br />
            <label htmlFor="option1">Option 1</label>
            <input
                type="text"
                name="option1"
                placeholder='Enter option'
                value={option1}
                onChange={(e) => setOption1(e.target.value)}
            /><br />
            <label htmlFor="option2">Option 2</label>
            <input
                type="text"
                name="option2"
                placeholder='Enter option'
                value={option2}
                onChange={(e) => setOption2(e.target.value)}
            /><br />
            <label htmlFor="option3">Option 3</label>
            <input
                type="text"
                name="option3"
                placeholder='Enter option'
                value={option3}
                onChange={(e) => setOption3(e.target.value)}
            /><br />
            <label htmlFor="option4">Option 4</label>
            <input
                type="text"
                name="option4"
                placeholder='Enter option'
                value={option4}
                onChange={(e) => setOption4(e.target.value)}
            /><br />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/"><button>Back</button></Link>
                <button onClick={handleAddQuestion}>Add</button>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {quizCreated && <p>Quiz is successfully created!</p>}
        </div>
    );
}
