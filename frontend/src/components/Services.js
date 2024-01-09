import { useEffect, useState } from 'react';
import { services } from "../data";
import Service from "./Service";
import Title from "./Title";

function Services() {
	const apiUrl ='http://localhost:5000/api/services';
	const [servicesData, setServicesData] = useState([]);

	useEffect(()=>{
		const getServices = async ()=>{
			try{
				const response = await fetch(apiUrl,{
					method:'GET'
				});
				const services = await response.json();
				console.log(services);
				setServicesData(services);
			}catch(err){
				console.log(err);
			
			}
		}
		getServices();
	},[]);


	return (
		<div>
			<section className="section services" id="services">
				<Title title="our" span="services" />
				<div className="section-center services-center">
					{servicesData.map((service) => (
						<Service key={service.id} {...service} />
					))}
				</div>
			</section>
		</div>
	);
}

export default Services;
