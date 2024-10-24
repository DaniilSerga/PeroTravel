import React, {FC} from 'react';

import {HeadingSection} from './HeadingSection';
import {TripsCarousel} from './TripsCarousel';

const MainPage: FC = () => {
	return (
		<main>
			<HeadingSection />
			<TripsCarousel />
		</main>
	);
};

export default MainPage;
