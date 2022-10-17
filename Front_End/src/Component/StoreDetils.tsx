import React from 'react';
import { useParams } from 'react-router-dom';

const StoreDetils = () => {
	const { id } = useParams();
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
