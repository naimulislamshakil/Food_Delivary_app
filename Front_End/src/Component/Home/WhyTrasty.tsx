import why from '../../assets/images/location.png';
import '../../scss/App/App.css';

const WhyTrasty = () => {
	return (
		<section className="container-fluid mt-5">
			<div className="row">
				<div className="col-12 col-lg-5">
					<img src={why} className="img-fluid" alt="" />
				</div>
				<div className="col-12 col-lg-7 d-flex flex-column justify-content-center align-items-start">
					<div className="d-flex flex-column justify-content-center align-items-start">
						<div>
							<h2>
								Why <span className="text-warning">Tasty</span>{' '}
								<span className="text-danger">Treat</span>?
							</h2>
							<p className="text-color text">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
								quos dolorem recusandae numquam adipisci, at atque. Maiores sunt
								consequuntur quod iure dolor deserunt nemo illo.
							</p>
						</div>
						<div>
							<div className="d-flex justify-content-start align-items-center">
								<i className="bi bi-check-circle text-success me-2"></i>
								<h5>Fresh and tasty foods.</h5>
							</div>
							<p className="text-color">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
								at.
							</p>
						</div>
						<div>
							<div className="d-flex justify-content-start align-items-center">
								<i className="bi bi-check-circle text-success me-2"></i>
								<h5>Quick support.</h5>
							</div>
							<p className="text-color">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
								at.
							</p>
						</div>
						<div>
							<div className="d-flex justify-content-start align-items-center">
								<i className="bi bi-check-circle text-success me-2"></i>
								<h5>Order from any location.</h5>
							</div>
							<p className="text-color">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
								at.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyTrasty;
