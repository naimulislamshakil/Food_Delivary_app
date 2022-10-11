import bannerLogo from '../../assets/images/hero.png';
import '../../scss/App/App.css';

const Banner = () => {
	return (
		<section className="container-fluid bg-light">
			<div className="row">
				<div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start">
					<div>
						<h5>Easy way to make an order.</h5>
						<h2>
							<span className="text-danger">Hungry? </span>
							<span className="text-warning">Just wait food at</span>
							<span className="text-success"> your door.</span>
							<p className="para">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
								dolor alias deleniti <br /> possimus id et expedita laudantium
								dolore provident doloribus.
							</p>
						</h2>
					</div>
					<div>
						<button className="btn btn-outline-danger outl">
							Order Now
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-arrow-right-circle ms-2"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div className="col-12 col-lg-4">
					<img className="img-fluid" src={bannerLogo} alt="" />
				</div>
			</div>
		</section>
	);
};

export default Banner;
