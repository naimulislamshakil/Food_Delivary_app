import applogo from '../../assets/how/Patha-food.png';
import knife from '../../assets/how/icon-food.jpg';
import appStore from '../../assets/how/appstore.png';
import playStore from '../../assets/how/play-store.png';
import rode from '../../assets/how/step-illustration.png';
import select from '../../assets/how/Select-and-set-your-food.jpg';
import '../../scss/App/App.css';

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
					<img src={select} alt="" />
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
		</section>
	);
};

export default HowToDo;
