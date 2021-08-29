import React from "react";

export const Card = () => {
	return (
		<>
			<div className="card text-center" style={{ width: "18rem" }}>
				<img
					src="https://www.metisgl.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card&apos;s content.
					</p>
				</div>

				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
		</>
	);
};
