import "../assets/styles/Card.css";
import { useState } from "react";

interface CardI {
	firstname: string;
	imgSrc: string;
}

function Card({ firstname, imgSrc }: CardI) {
	const [count, setCount] = useState(0);
	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<figure>
			<img
				src={imgSrc}
				alt={`Representation of ${firstname}, a character of the The legend of zelda universe`}
			/>
			<figcaption>{firstname}</figcaption>
			<button onClick={handleClick}>
  {count} <img src="https://i.ibb.co/LRhqrpL/Rubis-vert-Oo-T3-D.webp" alt="green rubis" style={{ width: '50%', height: '50%' }} />
</button>
		</figure>
	);
}

export default Card;
