
import Tour from "./Tour";
import Title from "./Title";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Tours() {
	const apiUrl ='http://localhost:5000/api/tours';
	const [toursData, setToursData] = useState([]);
	const getTours = async ()=>{
		try{
			const response = await fetch(apiUrl,{
				method:'GET'
			});
			const tours = await response.json();
			console.log(tours);
			setToursData(tours);
		}catch(err){
			console.log(err);
		
		}
	}

	useEffect(()=>{
		const getTours = async ()=>{
			try{
				const response = await fetch(apiUrl,{
					method:'GET'
				});
				const tours = await response.json();
				console.log(tours);
				setToursData(tours);
			}catch(err){
				console.log(err);
			
			}
		}
		getTours();
	},[]);
	const handleDelete = async (id)=>{
		try{
			const response = await fetch(apiUrl+`/${id}`,{
				method:'DELETE',
				headers:{
					'role':'admin'
				}
			});
			const tours = await response.json();
			console.log(tours);
			if(response.status===200){
				getTours();
				alert("Deleted Tour Successfully!");
			}
		

		}catch(err){
			console.log(err);
			
		}
	}
	return (
		<div>
			<section className="section" id="tours">
				<div >
				<Title title="featured" span="tours" />
				<Link to="/add-tour" className="btn" style={{float:'right',margin:'1rem'}}>Create Tour</Link>
				</div>
				<hr/>
				<div className="section-center featured-center">
					{toursData.length > 0 ? toursData.map((tour) => (
						<Tour onDelete={handleDelete} key={tour._id} {...tour} />
					)):
					<h3>No Tours</h3>}
				</div>
			</section>
		</div>
	);
}

export default Tours;
