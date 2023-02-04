import "./card.style.css";

const Card = ({ monster }) => {
	return (
		<div
			key={monster.id}
			className="card-container"
		>
			<img
				src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
				alt="monster"
			/>
			<h2>{monster.name}</h2>
			<p>{monster.email}</p>
		</div>
	);
};

export default Card;
