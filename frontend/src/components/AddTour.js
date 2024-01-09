import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function AddTour() {
  const [title,setTitle] = useState('');
  const [location,setLocation] = useState('');
  const [info,setInfo] = useState('');
  const [cost,setcost] = useState('');
  const [image,setImage] = useState('');
  const [date,setDate] = useState('');
  const [duration,setDuration] = useState('');
  const navigate = useNavigate();
  const apiUrl = 'http://localhost:5000/api/tours'

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const data = {
        image,
        date,
        title,
        info,
        location,
        duration,
        cost
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
        alert('Tour Added!');
        navigate('/tours');
      }

    }catch(err){
      console.log(err);
    }

  }
  return (
    <div className='add__tour__section'>
       
    
        <form className="register__form" style={{width:'100%',marginTop:'0px'}} onSubmit={handleSubmit}>
        <h3>Add Tour</h3>
            <div className='input__wrapper'>
                <label>Title</label>
                <input value={title} onChange={(e)=>setTitle(e.target.value)} type='text' placeholder='e.g. Paris Tour' />
            </div>
            <div className='input__wrapper'>
                <label>Image Url</label>
                <input value={image} onChange={(e)=>setImage(e.target.value)} type='text' />
            </div>
            <div className='input__wrapper'>
                <label>Info</label>
                <textarea  value={info} onChange={(e)=>setInfo(e.target.value)} placeholder='Write some details here...' />
            </div>
            <div className='input__wrapper'>
                <label>Cost($)</label>
                <input  value={cost} onChange={(e)=>setcost(e.target.value)}  type='number' />
            </div>
            <div className='input__wrapper'>
                <label>Duration(in Days)</label>
                <input  value={duration} onChange={(e)=>setDuration(e.target.value)}  type='number' />
            </div>
            <div className='input__wrapper'>
                <label>Location</label>
                <input  value={location} onChange={(e)=>setLocation(e.target.value)}  type='text' />
            </div>
            <div className='input__wrapper'>
                <label>Date</label>
                <input  value={date} onChange={(e)=>setDate(e.target.value)}  type='text' />
            </div>
            <button disabled={!title || !info || !image || !cost || !location || !date || !duration} type='submit' className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default AddTour