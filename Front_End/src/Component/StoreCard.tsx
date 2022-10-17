import '../scss/App/App.css';
import { PerStore } from '../Redux/Action/ActionType/GetByLocation';
import { useNavigate } from 'react-router-dom';

interface Props {
	store: PerStore;
}

const StoreCard = ({ store }: Props) => {
	const navigate = useNavigate();

	const getStore = (id: string) => {
		navigate(`/restaurants/${id}`);
	};
	return (
		<div
			onClick={(e) => getStore(store._id)}
			className="col-12 col-lg-3 col-md-6 mx-auto card shadow mt-3"
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
	);
};

export default StoreCard;
