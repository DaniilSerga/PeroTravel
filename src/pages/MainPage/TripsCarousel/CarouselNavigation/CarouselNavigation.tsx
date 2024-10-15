import React, {FC} from 'react';

import {ReactComponent as SoftArrow} from 'assets/icons/softArrowRight.svg';

import styles from './CarouselNavigation.module.scss';

const CarouselNavigation: FC = () => {
	return (
		<div>
			<div className={styles.buttonsContainer}>
				<SoftArrow />
				<SoftArrow />
			</div>
		</div>
	);
};

export default CarouselNavigation;
