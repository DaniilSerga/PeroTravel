import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import {HeadingSection} from './HeadingSection';
import {TripsCarousel} from './TripsCarousel';

import styles from './MainPage.module.scss';

const MainPage: FC = () => {
	return (
		<main>
			<HeadingSection />
			<TripsCarousel />
		</main>
	);
};

export default MainPage;
