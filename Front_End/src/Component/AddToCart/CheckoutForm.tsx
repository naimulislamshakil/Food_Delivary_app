import React, { FormEvent, useEffect, useState } from 'react';
import { useStripe, CardElement, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';

interface Props {
	totalPrice: string | undefined;
	name: string | undefined;
	email: string | undefined;
	placeOrder: (id: string) => void;
}

const CheckoutForm = ({ totalPrice, name, email, placeOrder }: Props) => {
	const stripe = useStripe();
	const elements = useElements();
	const [clientsecrect, setClientsecrect] = useState('');

	useEffect(() => {
		if (totalPrice) {
			const total = parseInt(totalPrice);
			fetch('http://localhost:5000/api/v1/create_payment_intent', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')!)}`,
				},
				body: JSON.stringify({ total }),
			})
				.then((res) => res.json())
				.then((data) => setClientsecrect(data.clientSecrect));
		}
	}, [totalPrice]);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);

		if (card == null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card,
		});

		if (error) {
			toast.error(error.message);
		}

		const { paymentIntent, error: intentError } =
			await stripe.confirmCardPayment(clientsecrect, {
				payment_method: {
					card: card,
					billing_details: {
						name,
						email,
					},
				},
			});

		if (intentError) {
			toast.error(intentError?.message);
		} else {
			toast.success('Congratulations! Your payment is successfull.');
			placeOrder(paymentIntent.id);
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<CardElement
				options={{
					style: {
						base: {
							fontSize: '16px',
							color: '#424770',
							'::placeholder': {
								color: '#aab7c4',
							},
						},
						invalid: {
							color: '#9e2146',
						},
					},
				}}
			/>
			<button
				className="btn btn-danger mt-4 "
				type="submit"
				disabled={!stripe || !clientsecrect}
			>
				Pay
			</button>
		</form>
	);
};

export default CheckoutForm;
