import React, { useState } from 'react';
import './App.css';

function App() {
  const [userType, setUserType] = useState('parent');

  return (
      <div className="login-container">
        <h2>Learning Partners</h2>
        <div className="user-type">
          <label>
            <input
                type="radio"
                name="userType"
                value="parent"
                checked={userType === 'parent'}
                onChange={() => setUserType('parent')}
            />
            학부모
          </label>
          <label>
            <input
                type="radio"
                name="userType"
                value="teacher"
                checked={userType === 'teacher'}
                onChange={() => setUserType('teacher')}
            />
            선생님
          </label>
        </div>
        <input type="text" className="input-field" placeholder="ID" aria-label="ID" />
        <input type="password" className="input-field" placeholder="PW" aria-label="Password" />
        <div className="forgot-password">
          아이디나 비번을 잊으셨나요? <a href="#">아이디/PW 찾기</a>
        </div>
        <div className="button-container">
          <button className="button">LOG IN</button>
          <button className="button">회원가입</button>
        </div>
      </div>
  );
}

export default App;