import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar";
import { Jumbo } from "./jumbo";
import { Card } from "./card";
import { Foot } from "./foot";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbo />
			<div className="container my-3">
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
					<div className="col-4 my-3">
						<Card />
					</div>
					<div className="col-4 my-3">
						<Card />
					</div>
					<div className="col-4 my-3">
						<Card />
					</div>
					<div className="col-4 my-3">
						<Card />
					</div>
					<div className="col-4 my-3">
						<Card />
					</div>
					<div className="col-4 my-3">
						<Card />
					</div>
				</div>
			</div>
			<Foot />
		</>
	);
};

export default Home;
