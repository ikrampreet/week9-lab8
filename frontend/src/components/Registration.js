import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function Registration() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const apiUrl = 'http://localhost:5000/api/users';
    const navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
      try{
        let data = {
            name,
            email,
            password,
            role:"guest"
        }
        const response = await fetch(apiUrl,{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json',
                'role':'admin'
            }
        });
        const result =await response.json();
        console.log(result);
       if(response.status===200){
        alert('User Registered!');
        navigate('/');
       }
      }catch(err){
        console.log(err);
        alert(err.message);
      }
       
    }
  return (
    <div className='register__wrapper'>
        <h3>Register Here</h3>
        <form className="register__form" onSubmit={handleSubmit}>
            <div className='input__wrapper'>
                <label>Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type='text' placeholder='e.g. John Doe' />
            </div>
            <div className='input__wrapper'>
                <label>Email</label>
                <input  value={email} onChange={(e)=>setEmail(e.target.value)}   type='email' placeholder='e.g. john@example.com' />
            </div>
            <div className='input__wrapper'>
                <label>Password</label>
                <input  value={password} onChange={(e)=>setPassword(e.target.value)}  type='password' />
            </div>
            <button disabled={!name || !email || !password} type='submit' className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Registration