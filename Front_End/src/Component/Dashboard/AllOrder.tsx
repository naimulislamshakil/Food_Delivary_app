import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface Order {
	address: string;
	address2: string;
	country: string;
	email: string;
	id: string;
	name: string;
	phone: string;
	state: string;
	totalPrice: string;

	zip: string;

	_id: string;
}

const AllOrder = () => {
	const [orders, setOrder] = useState<Order[]>();

	useEffect(() => {
		fetch('http://localhost:5000/api/v1/get/payment', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')!)}`,
			},
		})
			.then((res) => res.json())
			.then((data) => setOrder(data.result))
			.catch((err) => toast.error(err.message));
	}, []);
	console.log(orders);
	return (
		<section>
			<table className="table table-striped table-striped-columns">
				<thead>
					<tr>
						<th scope="col">NO.</th>
						<th scope="col">AMOUNT</th>
						<th scope="col">DESCRIPTION</th>
						<th scope="col">CUSTOMER</th>

						<th scope="col">SHOW</th>
					</tr>
				</thead>
				<tbody>
					{orders?.map((order, index) => (
						<tr key={index}>
							<th className="mx-auto" scope="row">
								{index + 1}
							</th>
							<td className="mx-auto">{order.totalPrice}৳</td>
							<td className="mx-auto">{order.id}</td>
							<td className="mx-auto">{order.email}</td>
							<td className="mx-auto">
								<button className="btn btn-danger">SHOW DETILS</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
};

export default AllOrder;
