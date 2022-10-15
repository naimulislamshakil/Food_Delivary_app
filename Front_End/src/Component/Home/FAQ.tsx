import React from 'react';

const FAQ = () => {
	return (
		<section className="container-fluid mt-3">
			<div className="text-center">
				<h2 className="text-center">Frequently Asked Questions</h2>
				<button className="btn btn-outline-danger my-4">I'm A Customer</button>
			</div>
			<div className="accordion" id="accordionPanelsStayOpenExample">
				<div className="accordion-item">
					<h2 className="accordion-header" id="panelsStayOpen-headingOne">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseOne"
							aria-expanded="true"
							aria-controls="panelsStayOpen-collapseOne"
						>
							I got worng food. What should i do?
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseOne"
						className="accordion-collapse collapse show"
						aria-labelledby="panelsStayOpen-headingOne"
					>
						<div className="accordion-body">
							We’re extremely sorry for the inconvenience. Please report this
							issue through our website with a photo of the food or you can also
							immediately contact our support team with the helpline
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="panelsStayOpen-headingTwo">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							My foodman's number is unreachable. what should I do?
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div className="accordion-body">
							We’re extremely sorry about the inconvenience. Please, inform our
							support team and we will take actions accordingly to help you.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="panelsStayOpen-headingThree">
						<button
							className="accordion-button collapsed border-0"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseThree"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseThree"
						>
							The foodman refused to take my order. What can I do?
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseThree"
						className="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingThree"
					>
						<div className="accordion-body">
							Please inform our support at 01879212420 immediately and we will
							take care of the issue.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="panelsStayOpen-headingfore">
						<button
							className="accordion-button collapsed border-0"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapsefore"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapsefore"
						>
							The foodman cancelled my order. What should I do?
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapsefore"
						className="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingfore"
					>
						<div className="accordion-body">
							We’re extremely sorry for the inconvenience. Please, place your
							order again from the same restaurant and your desired food will be
							delivered to you by another nearby foodman.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="panelsStayOpen-headingfive">
						<button
							className="accordion-button collapsed border-0"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapsefive"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapsefive"
						>
							I forgot to apply promo code on my food order. What can I do?
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapsefive"
						className="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingfive"
					>
						<div className="accordion-body">
							Since you’ve already placed an order, you will need to proceed
							with the current order. Please remember to apply the promo on your
							next order and you will have your food delivered with a discount.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="panelsStayOpen-headingsix">
						<button
							className="accordion-button collapsed border-0"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapsesix"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapsesix"
						>
							I want to order from a location that is not in the website.
							Possiable?
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapsesix"
						className="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingsix"
					>
						<div className="accordion-body">
							According to our policy, you can only order from the location
							available on the website. So, it is not possible for you to order
							from a location that is not on our website.
						</div>
					</div>
				</div>
			</div>
			<div className="text-center my-5">
				<button className=" btn btn-outline-success">
					View All FAQ <i className="bi bi-arrow-right ms-3"></i>
				</button>
			</div>
		</section>
	);
};

export default FAQ;
