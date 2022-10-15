import logo from '../../assets/images/res-logo.png';
import { Link } from 'react-router-dom';
import '../../scss/App/App.css';

const Fooder = () => {
	const d = new Date();
	const year = d.getFullYear();
	return (
		<footer className="footer-06 p-5">
			<div className="container-fluid ">
				<div className="row pt-4">
					<div className="col-md-6 order-md-last">
						<div className="row justify-content-end">
							<div className="col-md-12 col-lg-6 text-md-right mb-md-0 mb-4">
								<div className="footer-heading">
									<div>
										<img
											className="img-fluid"
											style={{ width: '80px' }}
											src={logo}
											alt=""
										/>
									</div>
									<div className="d-flex">
										<h6 className="text-warning fw-bold">Tasty</h6>
										<h6 className="text-danger fw-bold ms-2">Treat</h6>
									</div>
								</div>
								<p className="copyright text-color">
									{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
									Copyright &copy;
									{year} tastytreat.com- WebSite made by Naimul Islam. All
									Rights Reserved.
									{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-lg-6">
						<div className="row">
							<div className="col-md-6 mb-md-0 mb-4">
								<h2 className="footer-heading">Information</h2>
								<ul className="list-unstyled">
									<li>
										<Link to="/" className="py-1 d-block nav-link">
											<span className="ion-ios-checkmark-circle-outline mr-2"></span>
											Our Company
										</Link>
									</li>
									<li>
										<Link to="/" className="py-1 d-block nav-link">
											<span className="ion-ios-checkmark-circle-outline mr-2"></span>
											Data
										</Link>
									</li>
									<li>
										<Link to="/" className="py-1 d-block nav-link">
											<span className="ion-ios-checkmark-circle-outline mr-2"></span>
											Pricing
										</Link>
									</li>
									<li>
										<Link to="/" className="py-1 d-block nav-link">
											<span className="ion-ios-checkmark-circle-outline mr-2"></span>
											Contact Us
										</Link>
									</li>
									<li>
										<Link to="/" className="py-1 d-block nav-link">
											<span className="ion-ios-checkmark-circle-outline mr-2"></span>
											Support
										</Link>
									</li>
								</ul>
							</div>

							<div className="col-md-6 mb-md-0 mb-4">
								<div>
									<h5>Address</h5>
									<div className="d-flex">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="50"
											height="50"
											fill="currentColor"
											className="bi bi-geo-alt-fill text-success me-2"
											viewBox="0 0 16 16"
										>
											<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
										</svg>
										<p>
											215 N Clippert St, Lansing Charter Township, Michigan-(
											48912)
										</p>
									</div>
								</div>
								<div>
									<h5>Phone</h5>
									<div className="d-flex">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="25"
											height="25"
											fill="currentColor"
											className="bi bi-telephone-fill me-2 text-success"
											viewBox="0 0 16 16"
										>
											<path
												fill-rule="evenodd"
												d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
											/>
										</svg>
										<p>(517) 316-2009</p>
									</div>
								</div>
								<div>
									<h5>Email</h5>
									<div className="d-flex">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="25"
											height="25"
											fill="currentColor"
											className="bi bi-envelope-check text-success me-2"
											viewBox="0 0 16 16"
										>
											<path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
											<path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
										</svg>
										<p>info@tastytreat.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 text-center fooder-icon">
						<i className="bi bi-facebook "></i>
						<i className="bi bi-whatsapp "></i>
						<i className="bi bi-github "></i>
						<i className="bi bi-linkedin "></i>
						<i className="bi bi-youtube "></i>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Fooder;
