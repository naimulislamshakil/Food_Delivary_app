import React from 'react';
import { PerStore } from '../Redux/Action/ActionType/GetByLocation';

interface Props {
	store: PerStore;
}

const StoreCard = ({ store }: Props) => {
	console.log(store);
	return (
		<section className="container-fluid">
			<h2>gxghnsxg</h2>
		</section>
	);
};

export default StoreCard;
