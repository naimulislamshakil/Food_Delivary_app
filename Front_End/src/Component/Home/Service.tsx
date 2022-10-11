import serviceImg01 from '../../assets/images/service-01.png';
import serviceImg02 from '../../assets/images/service-02.png';
import serviceImg03 from '../../assets/images/service-03.png';
import '../../scss/App/App.css';
const ServiceItem = [
	{
		title1: 'Fastest',
		title2: 'Delivery',
		img: serviceImg01,
		description:
			'Get your food delivered in less than an hour! That’s as fast as it can get.',
	},
	{
		title1: 'So Much to',
		title2: 'Choose From',
		img: serviceImg02,
		description:
			'Find your favourite among the thousands of restaurants in our app.',
	},
	{
		title1: 'Best Offers',
		title2: 'In Town!',
		img: serviceImg03,
		description:
			'Get the best offers and combos at the best price only at Pathao Food!',
	},
];

const Service = () => {
	return (
		<section className="container-fluid bg-light py-3">
			{/* <div className="row">
				<div className="col-12"> */}
			<div className="row">
				{ServiceItem.map((item, index) => (
					<div
						key={index}
						// data-aos={item.slide}
						className="col-lg-4 col-12 mx-auto mb-3"
						style={{ maxWidth: '18rem' }}
					>
						<img src={item.img} className="img-fluid" alt="" />

						<div className="mt-3">
							<h2 className="text-center">{item.title1}</h2>
							<h2 className="text-center">{item.title2}</h2>
							<p className="text-center text-color">{item.description}</p>
						</div>
					</div>
				))}
			</div>
			{/* </div>
			</div> */}
		</section>
	);
};

export default Service;
