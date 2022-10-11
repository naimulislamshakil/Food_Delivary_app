import dhaka from '../../assets/place/dhaka.jpg';
import chittagong from '../../assets/place/chittagong.jpg';
import sylhet from '../../assets/place/sylhet.jpg';
import coxs from '../../assets/place/coxs.jpg';
import rajshahi from '../../assets/place/rajshahi.jpg';
import khulna from '../../assets/place/khulna.jpg';
import comilla from '../../assets/place/comilla.jpg';
import barisal from '../../assets/place/barisal.jpg';
import rangpur from '../../assets/place/rangpur.jpg';
import pirojpur from '../../assets/place/pirojpur.jpg';
import chandpur from '../../assets/place/chandpur.jpg';
import bhola from '../../assets/place/bhola.jpg';
import '../../scss/App/App.css';

const CityItem = [
	{
		name: 'Dhaka',
		img: dhaka,
		letter: 'D',
	},
	{
		name: 'Chittagong',
		img: chittagong,
		letter: 'C',
	},
	{
		name: 'Sylhet',
		img: sylhet,
		letter: 'S',
	},
	{
		name: "Cox's Bazar",
		img: coxs,
		letter: 'C',
	},
	{
		name: 'Rajshahi',
		img: rajshahi,
		letter: 'R',
	},
	{
		name: 'Khulna',
		img: khulna,
		letter: 'K',
	},
	{
		name: 'Comilla',
		img: comilla,
		letter: 'C',
	},
	{
		name: 'Barisal',
		img: barisal,
		letter: 'B',
	},
	{
		name: 'Rangpur',
		img: rangpur,
		letter: 'R',
	},
	{
		name: 'Pirojpur',
		img: pirojpur,
		letter: 'P',
	},
	{
		name: 'Chandpur',
		img: chandpur,
		letter: 'C',
	},
	{
		name: 'Bhola',
		img: bhola,
		letter: 'B',
	},
];

const Location = () => {
	return (
		<section className="container-fluid">
			<h2 className="font">Find us in these town and many more!</h2>
			<div className="row">
				{CityItem.map((item, index) => (
					<div
						className="col-lg-4 col-12 col-md-6 image mx-auto mb-3"
						style={{ maxWidth: '18rem', maxHeight: '10rem' }}
					>
						<img src={item.img} className="img-fluid image_img " alt="" />

						<div className="image_overlay">
							<h5 className="image_title">{item.name}</h5>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Location;
