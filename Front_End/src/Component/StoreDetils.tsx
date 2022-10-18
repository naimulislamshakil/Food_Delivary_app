import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetSingleStoreAction } from '../Redux/Action/Action/GetByIdAction';
import { RootStore } from '../Redux/Store';

const StoreDetils = () => {
	const { id } = useParams();

	const dispatch = useDispatch();
	const { store } = useSelector((state: RootStore) => state.storeById);

	useEffect(() => {
		dispatch(GetSingleStoreAction(id));
	}, [dispatch, id]);

	console.log(store);

	return (
		<section className="container-fluid">
			<div className="row">
				<div className="col-12">
					<img
						className="w-100 img-fluid h-25"
						src={store?.data.imgUrl}
						alt=""
					/>
					<div>
						<h2>{store?.data.name}</h2>
						<span className="bg-danger text-white p-2 rounded-pill ms-3">
							{store?.data.place}
						</span>
						<div className="mt-2 ms-3">
							<span className="text-danger">$$$</span>
							{store?.data.tag.map((tag) => (
								<span className="ms-2 text-danger">- {tag}</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StoreDetils;
