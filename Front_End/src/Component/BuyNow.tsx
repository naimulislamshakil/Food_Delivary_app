import React from 'react';
import { useParams } from 'react-router-dom';

const BuyNow = () => {
	const { id } = useParams();
	return (
		<section className="container-fluid">
			<h2>{id}</h2>
		</section>
	);
};

export default BuyNow;
