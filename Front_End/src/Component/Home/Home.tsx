import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import Category from './Category';
import HowToDo from './HowToDo';
import Location from './Location';
import Service from './Service';
import WhyTrasty from './WhyTrasty';

const Home = () => {
	return (
		<div>
			<Banner />
			<Category />
			<Service />
			<Location />
			<HowToDo />
			<Brands />
			<WhyTrasty />
		</div>
	);
};

export default Home;
