import { Link } from "react-router-dom";

function Tour({ image,onDelete, date, info, title, location, cost, duration,_id }) {
	return (
		<article className="tour-card">
			<div className="tour-img-container">
				<img src={image} className="tour-img" alt="Tibet Adventure" />
				<p className="tour-date">{date}</p>
				
			</div>
			<div className="tour-info">
				<div className="tour-title">
					<h4>{title}</h4>
				</div>
				<p>{info}</p>
				<div className="tour-footer">
					<p>
						<span>
							<i className="fas fa-map"></i>
						</span>
						{location}
					</p>
					<p>from ${cost}</p>
					<p>{duration} days</p>
				</div>
				<br/>
				<div class="tour__footer">
				<Link to={`/explore-tour/${_id}`} className="btn">Explore Tour</Link>
				<i title="Delete?" onClick={()=>onDelete(_id)} className="fas fa-trash deleteIcon"></i>
				</div>
			</div>
		</article>
	);
}

export default Tour;
