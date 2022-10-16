import '../scss/App/App.css';
import { PerStore } from '../Redux/Action/ActionType/GetByLocation';

interface Props {
	store: PerStore;
}

const StoreCard = ({ store }: Props) => {
	console.log(store);
	return (
		<section className="container-fluid">
			<div
				className="col-12 col-lg-3 col-md-6 mx-auto cardshadow"
				style={{ width: '18rem' }}
			>
				<div className="inner">
					<img
						className="card-img-top img-fluid store-img "
						src={store.imgUrl}
						alt=""
					/>
				</div>
				<div className="card-body">
					<h5 className="card-title">{store.name}</h5>

					<span>$$$</span>
					{store.tag.map((t) => (
						<span className="">, {t}</span>
					))}
				</div>
			</div>
		</section>
	);
};

export default StoreCard;
