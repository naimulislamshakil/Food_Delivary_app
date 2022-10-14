import applogo from '../../assets/how/Patha-food.png';
import knife from '../../assets/how/icon-food.jpg';
import appStore from '../../assets/how/appstore.png';
import playStore from '../../assets/how/play-store.png';
import rode from '../../assets/how/step-illustration.png';
import select from '../../assets/how/Select-and-set-your-food.jpg';
import order from '../../assets/how/pathao-food-delivery.jpg';
import cash from '../../assets/how/pay-info.png';
import '../../scss/App/App.css';
import { Link } from 'react-router-dom';

const HowToDo = () => {
	return (
		<section className="container-fluid pt-4">
			{/* row 01 */}
			<div className="row">
				<div className="col-12 col-lg-7 d-flex flex-column justify-content-center align-items-start">
					<div className="row">
						<div className="col-3">
							<img className="mx-auto" src={knife} alt="" />
						</div>
						<div className="col-9">
							<h5 className="text-color">Get food with</h5>
							<h4 className="text-danger">Tasty Treat Food</h4>
						</div>
					</div>
					<h2 className="h1 text-color-number">01</h2>
					<div>
						<h2 className="ms-lg-2">Download the App</h2>
						<h4 className="ms-lg-4 text-color">
							Download the Tasty Treat App and order your food <br /> online to
							get the fastest delivery.
						</h4>
					</div>
					<div className="row">
						<div className="col-12 col-lg-6 mx-auto">
							<img className="me-3" src={playStore} alt="" />
						</div>
						<div className="col-12 col-lg-6">
							<img className="me-3" src={appStore} alt="" />
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-5 mt-3 mt-lg-0">
					<img className="img-fluid" src={applogo} alt="" />
				</div>
			</div>
			{/* row 02 */}
			<div className="row">
				<div className="col-12">
					<img className="img-fluid" src={rode} alt="" />
				</div>
			</div>
			{/* row 03 */}
			<div className="row">
				<div className="col-12 col-lg-5">
					<img src={select} className="img-fluid" alt="" />
				</div>
				<div className="col-12 col-lg-7">
					<h2 className="h1 text-color-number">02</h2>
					<div>
						<h2>Select and set your food</h2>
						<h4 className="text-color">
							Select the food you want from thousands of restaurants.
						</h4>
					</div>
				</div>
			</div>
			{/* row 04 */}
			<div className="row mt-5">
				<div className="col-12 col-lg-7 d-flex flex-column justify-content-center align-items-start">
					<h2 className="h1 text-color-number">03</h2>
					<div>
						<h2>Confirm your order and wait</h2>
						<h4 className="text-color">
							Just confirm your order and enjoy our fastest delivery. Fresh and
							delicious food will be delivered to your doorstep.
						</h4>
					</div>
				</div>
				<div className="col-12 col-lg-5">
					<img src={order} className="img-fluid" alt="" />
				</div>
			</div>
			{/* row 05 */}
			<div className="row mt-5">
				<div className="col-12 col-lg-7 d-flex flex-column justify-content-center align-items-start">
					<h2 className="h1 text-color-number">04</h2>
					<div>
						<h2>Pay Cashless for your Food</h2>
						<h4 className="text-color">
							Have no cash? No worries! <br /> Pay digitally instead of cash.
						</h4>
						<Link
							className="nav-link text-danger"
							style={{ fontSize: '18px' }}
							to="/"
						>
							Learn More
							<i className="bi bi-arrow-right ms-2"></i>
						</Link>
					</div>
				</div>
				<div className="col-12 col-lg-5">
					<img src={cash} className="img-fluid" alt="" />
				</div>
			</div>
		</section>
	);
};

export default HowToDo;
