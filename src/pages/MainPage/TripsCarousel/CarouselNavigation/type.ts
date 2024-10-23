export interface Props {
	isNextButtonDisabled: boolean;
	isPreviousButtonDisabled: boolean;
	progress: number;
	updateIndex: (value: number | 'increment' | 'decrement') => void;
}
