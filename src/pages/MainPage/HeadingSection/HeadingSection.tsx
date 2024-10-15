import React, {FC} from 'react';
import {Button} from 'components';
import vkIcon from 'assets/icons/vkIcon.svg';
import instaIcon from 'assets/icons/instaIcon.svg';
import facebookIcon from 'assets/icons/facebookIcon.svg';
import arrowRight from 'assets/icons/arrowRight.svg';

import styles from './HeadingSection.module.scss';

const HeadingSection: FC = () => {
	return (
		<section className={styles.mainSection}>
			<div>
				<div className={styles.mainSectionContent}>
					<div className={styles.mainSectionTitleContainer}>
						<h1>ПУТЕШЕСТВУЙ</h1>
						<div>
							<p>вместе с</p>
						</div>
						<h1>PERO TRAVEL</h1>
					</div>

					<div className={styles.socialNetworks}>
						<a href="https://vk.com">
							<img
								src={vkIcon}
								alt=""
							/>
						</a>
						<a href="https://instagram.com">
							<img
								src={instaIcon}
								alt=""
							/>
						</a>
						<a href="https://facebook.com">
							<img
								src={facebookIcon}
								alt=""
							/>
						</a>
					</div>
				</div>

				<div>
					<Button
						label="К экскурсиям"
						icon={
							<img
								src={arrowRight}
								alt=""
							/>
						}
					/>
				</div>
			</div>
		</section>
	);
};

export default HeadingSection;
