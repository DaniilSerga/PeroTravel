import React from 'react';

import {Footer, Header} from 'components';
import {NavigationRoutes} from 'pages';

const App = () => {
	return (
		<>
			<Header />
			<NavigationRoutes />
			<Footer />
		</>
	);
};

export default App;
