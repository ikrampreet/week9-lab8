import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getTourById, tours } from '../data';

function ExploreTour() {
    const [tour,setTour] = useState("");
    const {id} = useParams();
    useEffect(()=>{
        const tourDetails = getTourById(id);
       console.log(tourDetails);
        setTour(tourDetails);
    },[id])
  return (
    <div className='explore__tour'>
        
        <div className='tour__banner' style={{backgroundImage:`linear-gradient(rgba(34, 34, 34, 0.447),rgba(128, 128, 128, 0.501)),url('${tour?.image}')`}}>
            <h1>{tour?.title}</h1>
        </div>
        <br/>
        <div className="tour-footer" style={{padding:'1rem'}}>
					<p>
						<span>
							<i className="fas fa-map"></i>
						</span>
						{tour?.location}
					</p>
					<p>from ${tour?.cost}</p>
					<p>{tour?.duration} days</p>
                    <p>Date: {tour?.date}</p>
				</div>
                <br/>
        <hr/>
        <div className='tour__description'>
            <h2>Description</h2>
            {tour?.info}
        </div>
    </div>
  )
}

export default ExploreTour