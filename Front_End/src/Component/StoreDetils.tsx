import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetStoreById } from '../Redux/Action/Action/GetByIdAction';
import { RootStore } from '../Redux/Store';

const StoreDetils = () => {
	const { id } = useParams();

	const dispatch = useDispatch();
	const store = useSelector((state: RootStore) => state.storeById);

	useEffect(() => {
		dispatch(GetStoreById(id));
	}, [dispatch, id]);

	console.log(store);
	return (
		<section className="container-fluid">
			<div className="row">
				<div className="col-12">
					<img src="" alt="" />
				</div>
			</div>
		</section>
	);
};

export default StoreDetils;
