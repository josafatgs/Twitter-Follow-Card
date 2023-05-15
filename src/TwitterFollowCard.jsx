import { useState } from "react"; // Hook UseState para manejar el estado de un componente
import "./App.css";
export function TwitterFollowCard({ formatUserName ,userName = "unknown", children = "unknown", initialIsFollowing = false}) {

	const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

	// This is the same as:
	// const state = useState(false);
	// const isFollowing = state[0];
	// const setIsFollowing = state[1];

	const text = isFollowing ? "Siguiendo" : "Seguir";
	const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button";
	const handleClick = () => {
		setIsFollowing(!isFollowing);
	};
	return (
		<article className="tw-followCard">
			<header className="tw-followCard-header">
				<img
					className="tw-followCard-avatar"
					alt="Avatar de Elon Musk"
					src={`https://unavatar.io/${userName}`}
				/>
				<div className="tw-followCard-info">
					<strong>{children}</strong>
					<span className="tw-followCard-infoUserName">
						{formatUserName(userName)}
					</span>
				</div>
			</header>

			<aside>
				<button className={buttonClassName} onClick={handleClick}>
					{text}
				</button>
			</aside>
		</article>
	);
}
