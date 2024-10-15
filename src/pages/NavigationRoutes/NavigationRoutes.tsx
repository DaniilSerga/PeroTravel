import React, {FC} from 'react';
import {Route, Routes} from 'react-router-dom';

import {AccountPage, MainPage, TripsPage} from 'pages';

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
