import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Welcomepage() {
    const [name,setName]=useState('');
    localStorage.setItem('name',name);
    const navigate=useNavigate();

    const playgame=()=>{
        navigate('/game');
    }
  return (
    <div>
        <h1> <u>React Tiles</u></h1>

        <div className='box1'>
            <h1><u>Enter Your Name :</u> </h1>

            <div className='box2'>
                <input type='text' onChange={(e)=>setName(e.target.value)}/>
                <h1>{name}</h1>
            </div>
            <button onClick={playgame}>Play</button>
        </div>
    </div>
  )
}
