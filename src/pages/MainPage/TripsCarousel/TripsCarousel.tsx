import React, {FC, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';

import moneyIcon from 'assets/icons/moneyIcon.svg';
import timeIcon from 'assets/icons/timeIcon.svg';
import {Button} from 'components';
import {TRIPS} from 'constants/tripsData';

import {CarouselNavigation} from './CarouselNavigation';

import styles from './TripsCarousel.module.scss';

const TripsCarousel: FC = () => {
	const carouselRef = useRef<HTMLDivElement>(null);

	return (
		<section>
			<div className={styles.tripsHeading}>
				<h2>Популярные экскурсии</h2>
				<Link to="trips">Смотреть все</Link>
			</div>

			<div
				ref={carouselRef}
				className={styles.carousel}
			>
				{TRIPS.map((trip) => (
					<div
						key={trip.id}
						className={styles.card}
					>
						<img
							className={styles.cardCover}
							src={trip.img}
							alt=""
						/>
						<div className={styles.cardOverlay}></div>
						<div className={styles.cardContent}>
							<div className={styles.contentContainer}>
								<p>{trip.type}</p>
								<h4>{trip.title}</h4>
								<div className={styles.cardBasicInfo}>
									<div>
										<img
											src={timeIcon}
											alt=""
										/>
										<p>{trip.duration}</p>
									</div>
									<div>
										<img
											src={moneyIcon}
											alt=""
										/>
										<p>{trip.price}</p>
									</div>
								</div>
								<p>{trip.description}</p>
							</div>
							<div className={styles.buttonWrapper}>
								<Button label="Подробнее" />
							</div>
						</div>
					</div>
				))}
			</div>
			{/* <CarouselNavigation /> */}
		</section>
	);
};

export default TripsCarousel;
