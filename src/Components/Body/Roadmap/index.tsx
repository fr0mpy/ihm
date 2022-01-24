import * as React from 'react';
import clsx from 'clsx';

import { Grid, Theme, Typography } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import Spacer from '../../Spacer';
import FadeInWrapper from '../../FadeInWrapper';
import { desktopDevice } from '../../../helpers/layout';
import StickyWrapper from '../../StickyWrapper';
import Logo from '../../Logo';

const useStyles = makeStyles((theme: Theme) => ({
	text: {
		fontSize: '18px',
		textAlign: 'center',
		fontFamily: 'Suranna, serif !important'
	},
	img: {
		width: '260px',
		height: '388px',
		boxShadow: 'rgb(0 0 0) 12px 12px 42px 0px',

		[theme.breakpoints.down('sm')]: {
			width: '130px',
			height: '220px',
			margin: '16px auto'
		}
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		scrollSnapAlign: 'end',
		flexFlow: 'column',
		textAlign: 'center',
		padding: theme.spacing(2, 0),
		height: 'fit-content',
		[theme.breakpoints.down('sm')]: {
			// padding: theme.spacing(0, 4)
			padding: theme.spacing(0, 4)
		}
	},
	subContainer: {
		display: 'flex',
		flexFlow: 'row',
		width: '75%',
		justifyContent: 'space-evenly',

		[theme.breakpoints.down('sm')]: {
			minWidth: 'unset',
			maxWidth: 'unset',
			flexFlow: 'column',
			display: 'flex',
			justifyContent: 'center'
		}
	},
	title: {
		fontWeight: 700,
		fontSize: '24px',
		fontFamily: 'Vujahday Script, cursive'
	},
	text_container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexFlow: 'column',
		minWidth: '410px',
		maxWidth: '410px',

		[theme.breakpoints.down('sm')]: {
			minWidth: 'unset',
			maxWidth: 'unset'
		}
	}
}));

const RoadMap = () => {
	const theme = useTheme();
	const classes = useStyles(theme);

	const renderDesktopRoadMap = () => {
		return (
			<>
				<div className={classes.container} id={'roadmap'}>
					<div className={classes.subContainer}>
						<img src="/images/card.jpg" alt="" className={classes.img} />
						<div className={classes.text_container}>
							<div className={classes.title}>- 25% Minted -</div>
							<Spacer vertical spacing={1} />
							<FadeInWrapper text>
								<div className={classes.text}>
									1 Eth giveaway to a random holder
								</div>
							</FadeInWrapper>
						</div>
					</div>
					<Spacer vertical spacing={2} />
					<div className={classes.subContainer}>
						<div className={classes.text_container}>
							<div className={classes.title}>- 50% Minted -</div>
							<Spacer vertical spacing={1} />
							<FadeInWrapper text>
								<div className={classes.text}>
									3 Eth giveaway to a random holder
								</div>
								<div className={classes.text}>Begin marketing initiative</div>
							</FadeInWrapper>
						</div>
						<img src="/images/spam.jpg" alt="" className={classes.img} />
					</div>
					<Spacer vertical spacing={2} />
					<div className={classes.subContainer}>
						<img src="/images/card.jpg" alt="" className={classes.img} />
						<div className={classes.text_container}>
							<div className={classes.title}>- 75% Minted -</div>
							<FadeInWrapper text>
								<Spacer vertical spacing={1} />
								<div className={classes.text}> 5 eth giveaway</div>
							</FadeInWrapper>
							<FadeInWrapper text>
								<div className={classes.text}>
									2.5% total sales stored to donate to wikipedia,
								</div>
							</FadeInWrapper>
							<FadeInWrapper text>
								<div className={classes.text}>
									10% total sales put into a community scholarship fund. (link)
								</div>
							</FadeInWrapper>
						</div>
					</div>
					<Spacer vertical spacing={2} />
					<div className={classes.subContainer}>
						<div className={classes.text_container}>
							<div className={classes.title}>- 100% Minted -</div>
							<FadeInWrapper text>
								<Spacer vertical spacing={1} />
								<div className={classes.text}>
									Continue marketing initiative
								</div>
							</FadeInWrapper>
							<FadeInWrapper text>
								<div className={classes.text}>Update the IHM site</div>
							</FadeInWrapper>
							<FadeInWrapper text>
								<div className={classes.text}>
									Begin planning & execution of the The Internet History Museum
								</div>
							</FadeInWrapper>
						</div>
						<img src="/images/spam.jpg" alt="" className={classes.img} />
					</div>
				</div>
			</>
		);
	};

	const renderMobileRoadMap = () => {
		return (
			<>
				<div className={classes.container} id={'roadmap'}>
					<Spacer vertical spacing={4} />
					<div className={classes.subContainer}>
						<div className={classes.text_container}>
							<div className={classes.title}>- 25% Minted -</div>
							<Spacer vertical spacing={1} />
							<FadeInWrapper text>
								<div className={classes.text}>
									1 Eth giveaway to a random holder
								</div>
								<Spacer vertical spacing={4} />
							</FadeInWrapper>
						</div>
						<img src="/images/card.jpg" alt="" className={classes.img} />
					</div>
					<Spacer vertical spacing={6} />
					<div className={classes.subContainer}>
						<div className={classes.text_container}>
							<div className={classes.title}>- 50% Minted -</div>
							<Spacer vertical spacing={1} />
							<FadeInWrapper text>
								<div className={classes.text}>
									3 Eth giveaway to a random holder
								</div>
								<div className={classes.text}>Begin marketing initiative</div>
								<Spacer vertical spacing={4} />
							</FadeInWrapper>
						</div>
						<img src="/images/spam.jpg" alt="" className={classes.img} />
					</div>
					<Spacer vertical spacing={6} />
					<div className={classes.subContainer}>
						<div className={classes.text_container}>
							<div className={classes.title}>- 75% Minted -</div>
							<FadeInWrapper text>
								<Spacer vertical spacing={1} />
								<div className={classes.text}> 5 eth giveaway</div>
								<Spacer vertical spacing={4} />
							</FadeInWrapper>
							<FadeInWrapper text>
								<div className={classes.text}>
									2.5% total sales stored to donate to wikipedia,
								</div>
							</FadeInWrapper>
							<FadeInWrapper text>
								<div className={classes.text}>
									10% total sales put into a community scholarship fund. (link)
								</div>{' '}
								<Spacer vertical spacing={4} />
							</FadeInWrapper>
							<img src="/images/card.jpg" alt="" className={classes.img} />
						</div>
					</div>
					<Spacer vertical spacing={6} />
					<div className={classes.subContainer}>
						<div className={classes.text_container}>
							<div className={classes.title}>- 100% Minted -</div>
							<FadeInWrapper text>
								<Spacer vertical spacing={1} />
								<div className={classes.text}>
									Continue marketing initiative
								</div>
							</FadeInWrapper>
							<FadeInWrapper text>
								<div className={classes.text}>Update the IHM site</div>
							</FadeInWrapper>
							<FadeInWrapper text>
								<div className={classes.text}>
									Begin planning & execution of the The Internet History Museum
								</div>
							</FadeInWrapper>
						</div>
						<Spacer vertical spacing={4} />

						<img src="/images/spam.jpg" alt="" className={classes.img} />
					</div>
				</div>
			</>
		);
	};

	const renderRoadmap = () => {
		if (desktopDevice) {
			return renderDesktopRoadMap();
		} else {
			return renderMobileRoadMap();
		}
	};

	return renderRoadmap();
};

export default RoadMap;
