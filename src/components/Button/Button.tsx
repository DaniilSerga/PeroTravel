import React, {FC} from 'react';

import {Props} from './type';

import styles from './Button.module.scss';

const Button: FC<Props> = ({label, icon}) => {
	return (
		<button className={styles.button}>
			<p>{label}</p>
			{icon && icon}
		</button>
	);
};

export default Button;
