import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Signup() {
    const [firstName,setFN]=useState("");
    const [lastName,setLN]=useState("");
    const [email,setil]=useState("");
    const [password,setPass]=useState("");
    const [phoneNumber,setPN]=useState(0);
    const handleSignup = () =>{
     axios.post("http://localhost:3001/signups",{
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password,
        phoneNumber:phoneNumber
     });
    };


  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" value={firstName} onChange={e=>setFN(e.target.value)} required /><br />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" value={lastName} onChange={e=>setLN(e.target.value)} required /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={e=>setEmail(e.target.value)} required /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={e=>setPass(e.target.value)} required /><br />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={e=>setPN(e.target.value)} required /><br />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account?<Link to='/login'>Login</Link></p>
    </div>
  );
}