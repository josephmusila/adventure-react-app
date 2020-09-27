import React from "react";
import CardItem from "./CardItem";
import "./Card.css";
function Cards(props) {
	return (
		<div className="cards">
			<h1>Check out these EPIC destinations</h1>
			<div className="card__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src="images/img-9.jpg"
							text="Explore the hidden waterfall
                            inside the Amazon Jungle"
							label="Adventure"
							path="/services"
						/>
						<CardItem
							src="images/img-2.jpg"
                            text="Travel trough the islands of bali
                            in private cruise"
							label="Luxury"
							path="/services"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src="images/img-1.jpg"
							text="Epic Sunset on Tibet Highlands"
							label="Adventure"
							path="/services"
						/>
						<CardItem
							src="images/img-3.jpg"
                            text="Sail in Atlantic ocean in uncharted waters"
							label="Luxury"
							path="/services"
						/>
						<CardItem
							src="images/img-4.jpg"
                            text="Experience football on top of himalayas mountains"
							label="Luxury"
							path="/services"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
