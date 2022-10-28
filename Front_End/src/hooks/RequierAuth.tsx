import { Navigate, useLocation } from 'react-router-dom';

interface Props {
	children: any;
}
// eslint-disable-next-line react-hooks/rules-of-hooks

const RequireAuth = ({ children }: Props) => {
	const location = useLocation();
	if (localStorage.getItem('user') !== undefined || null) {
		const userText = window.localStorage.getItem('user');
		const user = JSON.parse(userText!);

		if (!user) {
			return (
				<Navigate to="/login" state={{ from: location }} replace></Navigate>
			);
		}

		return children;
	}
};

export default RequireAuth;
