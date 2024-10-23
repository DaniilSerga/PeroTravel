import React, {FC, useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';

import moneyIcon from 'assets/icons/moneyIcon.svg';
import timeIcon from 'assets/icons/timeIcon.svg';
import {Button} from 'components';
import {TRIPS} from 'constants/tripsData';
import {useCarousel, useDebounce} from 'hooks';

import {CarouselNavigation} from './CarouselNavigation';

import styles from './TripsCarousel.module.scss';

const TripsCarousel: FC = () => {
	const carouselRef = useRef<HTMLUListElement>(null);
	const {updateIndex, progress, updateProgress} = useCarousel(carouselRef);
	const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);
	const [isPreviousButtonDisabled, setPreviousButtonDisabled] = useState(true);
	const updateValues = useDebounce(({scrollLeft, scrollWidth, clientWidth}: HTMLUListElement) => {
		const totalLength = scrollWidth - clientWidth;

		setNextButtonDisabled(totalLength - scrollLeft === 0);
		setPreviousButtonDisabled(scrollLeft === 0);
		updateProgress((scrollLeft / totalLength) * 100);
	});

	const handleScroll = () => {
		if (!carouselRef.current) {
			return;
		}

		updateValues(carouselRef.current);
	};

	return (
		<section className={styles.tripsCarouselSection}>
			<div className={styles.tripsHeading}>
				<h2>Популярные экскурсии</h2>
				<Link to="trips">Смотреть все</Link>
			</div>

			<ul
				ref={carouselRef}
				onScroll={() => handleScroll()}
				className={styles.carousel}
			>
				{TRIPS.map((trip) => (
					<li
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
					</li>
				))}
			</ul>
			<CarouselNavigation
				isNextButtonDisabled={isNextButtonDisabled}
				isPreviousButtonDisabled={isPreviousButtonDisabled}
				progress={progress}
				updateIndex={updateIndex}
			/>
		</section>
	);
};

export default TripsCarousel;
