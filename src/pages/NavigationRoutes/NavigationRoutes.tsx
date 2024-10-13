import React, {FC} from 'react';
import {AccountPage, MainPage, TripsPage} from 'pages';
import {Route, Routes} from 'react-router-dom';

const NavigationRoutes: FC = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<MainPage />}
			/>
			<Route
				path="/trips"
				element={<TripsPage />}
			/>
			<Route
				path="/account"
				element={<AccountPage />}
			/>
		</Routes>
	);
};

export default NavigationRoutes;
