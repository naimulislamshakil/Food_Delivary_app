import React, { FormEvent, useEffect } from 'react';
import { useStripe, CardElement, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';

interface Props {
	totalPrice: string | undefined;
}

const CheckoutForm = ({ totalPrice }: Props) => {
	const stripe = useStripe();
	const elements = useElements();

	useEffect(() => {
		if (totalPrice) {
			const total = parseInt(totalPrice);
			fetch('http://localhost:5000/api/v1/create_payment_intent', {
				method: 'POST',
				headers: {},
			});
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
		} else {
			console.log('[PaymentMethod]', paymentMethod);
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
			<button className="btn btn-danger mt-4 " type="submit" disabled={!stripe}>
				Pay
			</button>
		</form>
	);
};

export default CheckoutForm;
