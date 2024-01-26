import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [err,setErr]=useState("")

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmission = (e) => {
    e.preventdefault();
    if(firstName===""&& lastName===""){
         setErr("Invalid")
    }else if (firstName==="" || lastName===""){
      setErr("Invalid")
 }else{
    const concatenatedName = `${firstName} ${lastName}`;
    setFullName(concatenatedName);
 }
  };

  return (
    <form onSubmit={handleSubmission}>
      {err && <p>{err}</p>}
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
      <button type='submit'>Submit</button>
      <br />
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
    </form>
  );
}

export default App;
