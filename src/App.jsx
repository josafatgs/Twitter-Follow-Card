import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
	const formatUserName = (userName) => `@${userName}`; // Función que recibe un userName y devuelve un string con el formato @userName

	return (
		<section className="App">
			<TwitterFollowCard isFollowing userName={"JosafatGs"} formatUserName={formatUserName} initialIsFollowing={true}>
				Josafat Garcia
			</TwitterFollowCard>
            <TwitterFollowCard isFollowing userName={"JosafatGs"} formatUserName={formatUserName} initialIsFollowing={false} >
				Josafat Garcia
			</TwitterFollowCard>
		</section>
	);
}
