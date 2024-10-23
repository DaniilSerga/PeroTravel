import React, {FC} from 'react';

import {ReactComponent as SoftArrow} from 'assets/icons/softArrowRight.svg';

import {Props} from './type';

import styles from './CarouselNavigation.module.scss';

const CarouselNavigation: FC<Props> = ({isNextButtonDisabled, isPreviousButtonDisabled, progress, updateIndex}) => {
	return (
		<div className={styles.navigationContainer}>
			<div className={styles.buttonsContainer}>
				<button
					className={isPreviousButtonDisabled ? styles.disabledButton : styles.activeButton}
					disabled={isPreviousButtonDisabled}
					onClick={() => updateIndex('decrement')}
				>
					<SoftArrow />
				</button>

				<button
					className={isNextButtonDisabled ? styles.disabledButton : styles.activeButton}
					disabled={isNextButtonDisabled}
					onClick={() => updateIndex('increment')}
				>
					<SoftArrow />
				</button>
			</div>
			<div className={styles.progressBarContainer}>
				<div
					style={{width: `${progress}%`}}
					className={styles.progressBar}
				></div>
			</div>
		</div>
	);
};

export default CarouselNavigation;
