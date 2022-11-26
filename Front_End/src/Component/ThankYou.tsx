import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
	return (
		<section className="page_404">
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12 d-flex flex-column justify-content-center align-items-center">
						<div className="col-sm-10 col-sm-offset-1  text-center">
							<div className="four_zero_four_bg">
								<h1 className="text-center ">Congratulations!</h1>
							</div>

							<div className="contant_box_404 mt-5">
								<p>Congratulations! Your payment is successfull.</p>

								<Link to="/" className="link_404">
									Go to Home
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ThankYou;
