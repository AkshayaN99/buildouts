import React, { useEffect, useState } from 'react';

function App(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  useEffect(()=>{
  },[])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'firstName' ) {
      const regex = /^[a-zA-Z0-9!@#$%^&*()-_+=<>?]+$/;
    if (!regex.test(value)) {
      setFirstNameError('First Name should contain only alphabets,special characters and numbers');
    } else {
      setFirstNameError('');
      setFirstName(value);
    }
      
    } else if (name === 'lastName') {
      const regex = /^[a-zA-Z0-9!@#$%^&*()-_+=<>?]+$/;
    if (!regex.test(value)) {
      setLastNameError('Last Name should contain only alphabets,special characters and numbers');
    } else {
      setLastNameError('');
      setLastName(value);
    }
  }  

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFullName = `${firstName} ${lastName}`.trim();
    setFullName(newFullName);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {firstNameError && <p>{firstNameError}</p>}
        {lastNameError && <p>{lastNameError}</p>}
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
};

export default App;