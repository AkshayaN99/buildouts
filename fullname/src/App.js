import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmission = () => {
    const concatenatedName = `${firstName} ${lastName}`;
    setFullName(concatenatedName);
  };

  return (
    <div>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={handleFirstNameChange} required />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={handleLastNameChange} required />
      </label>
      <br />
      <button onClick={handleSubmission}>Submit</button>
      <br />
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
