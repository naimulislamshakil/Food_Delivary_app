import CategoryImg01 from '../../assets/images/category-01.png';
import CategoryImg02 from '../../assets/images/category-02.png';
import CategoryImg03 from '../../assets/images/category-03.png';
import CategoryImg04 from '../../assets/images/category-04.png';
import '../../scss/App/App.css';

const CategoryItem = [
	{
		title: 'Fast Food',
		img: CategoryImg01,
	},
	{
		title: 'Pizza',
		img: CategoryImg02,
	},
	{
		title: 'Asian Food',
		img: CategoryImg03,
	},
	{
		title: 'Row Meat',
		img: CategoryImg04,
	},
];

const Category = () => {
	return (
		<section className="container-fluid py-2">
			<div className="row">
				{CategoryItem.map((item, index) => (
					<div
						key={index}
						className="card-item col-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center"
					>
						<div>
							<img src={item.img} alt="" />
						</div>
						<h5>{item.title}</h5>
					</div>
				))}
			</div>
		</section>
	);
};

export default Category;
