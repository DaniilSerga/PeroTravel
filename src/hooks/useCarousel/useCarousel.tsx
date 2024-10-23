import {useEffect, useState} from 'react';

function useCarousel(carouselRef: React.RefObject<HTMLUListElement>, initialIndex = 0) {
	const [currentIndex, setCurrentIndex] = useState(initialIndex);
	const [progress, setProgress] = useState(0);

	/**
	 * @param value takes a number as an index value, or simple 'increment', 'decrement' values to add or subtract 1
	 */
	const updateIndex = (value: number | 'increment' | 'decrement') => {
		if (value === 'increment') {
			setCurrentIndex((prevValue) => {
				updateCarouselScrollLeft(prevValue + 1);
				return prevValue + 1;
			});
			return;
		}

		if (value === 'decrement') {
			setCurrentIndex((prevValue) => {
				updateCarouselScrollLeft(prevValue - 1, prevValue - 1 === 1);
				return prevValue - 1;
			});
			return;
		}

		updateCarouselScrollLeft(value);
		setCurrentIndex(value);
	};

	const updateProgress = (value: number) => {
		setProgress(value);
	};

	const updateCarouselScrollLeft = (index: number, reset?: boolean) => {
		if (!carouselRef.current) {
			return;
		}

		if (reset) {
			carouselRef.current.scrollLeft = 0;
			return;
		}

		const {scrollWidth, clientWidth} = carouselRef.current;
		const totalLength = scrollWidth - clientWidth;

		carouselRef.current.scrollLeft = (totalLength / 4) * index;
	};

	useEffect(() => {
		const progressPrecentage = +progress.toFixed();

		if (progressPrecentage < 25) {
			setCurrentIndex(1);
		} else if (progressPrecentage < 50) {
			setCurrentIndex(2);
		} else if (progressPrecentage < 75) {
			setCurrentIndex(3);
		} else if (progressPrecentage <= 100) {
			setCurrentIndex(4);
		}
	}, [progress]);

	return {currentIndex, updateIndex, progress, updateProgress};
}

export default useCarousel;
