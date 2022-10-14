import man from '../../assets/brands/Res_logo_2.png';
import joh from '../../assets/brands/Res_logo_3.png';
import inn from '../../assets/brands/Res_logo_4.png';
import chi from '../../assets/brands/Res_logo_5.png';
import sal from '../../assets/brands/Res_logo_7.png';
import bur from '../../assets/brands/Res_logo_9.png';
import the from '../../assets/brands/Res_logo_10.png';
import pizz from '../../assets/brands/Res_logo_11.png';
import burg from '../../assets/brands/Res_logo_12.png';

const brands = [
	{
		logo: man,
		tooltip: 'Manhattan',
	},
	{
		logo: joh,
		tooltip: 'Johnny Rockets',
	},
	{
		logo: inn,
		tooltip: 'Pizza Inn',
	},
	{
		logo: chi,
		tooltip: 'Chillox',
	},
	{
		logo: sal,
		tooltip: "Salam's Kitchen",
	},
	{
		logo: bur,
		tooltip: 'Burger Xpress',
	},
	{
		logo: the,
		tooltip: 'The Pabulum',
	},
	{
		logo: pizz,
		tooltip: 'Pizza King',
	},
	{
		logo: burg,
		tooltip: 'Burgerology',
	},
];

const Brands = () => {
	return (
		<section className="container-fluid mt-3">
			<h2 className="h1">Some of our top partners</h2>
			<div className="row">
				{brands.map((brand, index) => (
					<div
						title={brand.tooltip}
						style={{ cursor: 'pointer' }}
						key={index}
						className="col-12 col-md-2 mx-auto mt-2"
					>
						<img className="img-fluid" src={brand.logo} alt="" />
					</div>
				))}
			</div>
		</section>
	);
};

export default Brands;
