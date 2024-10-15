import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {TRIPS} from 'constants/tripsData';

import styles from './TripsCarousel.module.scss';

const TripsCarousel: FC = () => {
	return (
		<section>
			<div className={styles.tripsHeading}>
				<h2>Популярные экскурсии</h2>
				<Link to="trips">Смотреть все</Link>
			</div>

			<div></div>
		</section>
	);
};

export default TripsCarousel;
