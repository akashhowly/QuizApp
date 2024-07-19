
import React from 'react';
import './Quizform.css';
import { Link } from 'react-router-dom';
import useLocalStorage from './useLocalStorage'; 

export default function Quizeform() {
  const [name, setName] = useLocalStorage('name', '');
  const [email, setEmail] = useLocalStorage('email', '');

  const handleCreateQuiz = () => {
      
      if (!name || !email) {
          alert('You have to fill all inputs');
      } else {
          
          window.location.href = '/create';
           
           setName('');
           setEmail('');
      }
  };

  return (
      <div className='body'>
          <div className='navDiv'>
              <nav className='navBar'>
                  <button><li>HOME</li></button>
                  <button><li>ABOUT</li></button>
                  <button><li>FEATURES</li></button>
                  <button><li>CONTACT</li></button>
                  {/* <button><li>LOG OUT</li></button> */}
              </nav>
          </div>
          <h1>Quiz Creation Form</h1>
          <label htmlFor="name">Name: </label>
          <input
              type="text"
              name="name"
              placeholder='Enter Your Name Here'
              value={name}
              onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email: </label>
          <input
              type="text"
              name="email"
              placeholder='Enter Your Email Here'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <button onClick={handleCreateQuiz}>Create Quiz</button>
      </div>
  );
}
