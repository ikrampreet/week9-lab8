import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Faq() {
  return (
    <div className='faq__wrapper'>
         <div className='faq__links__wrapper'>
         <h3>Top FAQs</h3>
            <ul>
                <li>
                    <Link to="/faq/1">#1 What is Backroads?</Link>
                </li>
                <li>
                    <Link to="/faq/2">#2 Where is Backroads?</Link>
                </li>
                <li>
                    <Link to="/faq/3">#3 How is Backroads?</Link>
                </li>
                <li>
                    <Link to="/faq/4">#4 How to register at Backroads?</Link>
                </li>
            </ul>
        </div>
        <div className='faq__area'>
            <Outlet />

        </div>
        
      
    </div>
  )
}

export default Faq