import Card from "./components/Card";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<main>
				<Card
					firstname="Link"
					imgSrc="https://i.ibb.co/ZKJ7QrJ/Link-Artwork-BOTW-2.webp"
				/>
				<Card
					firstname="Zelda"
					imgSrc="https://i.ibb.co/3rF8XMB/Tot-K-Zelda.webp"
				/>
				<Card
					firstname="Ganon"
					imgSrc="https://i.ibb.co/XL4KQPr/Tot-K-Ganondorf.webp"
				/>
			</main>
		</>
	);
}

export default App;
