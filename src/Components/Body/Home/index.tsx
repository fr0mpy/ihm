import { Button, Grid, Theme, Typography } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import {
	mobileDevice,
	desktopDevice,
	tabletDevice
} from '../../../helpers/layout';
import Logo from '../../Logo';
import Spacer from '../../Spacer';
import clsx from 'clsx';
import React from 'react';
import SocialLinks from '../../SocialLinks';
import CardShuffler from '../../CardSuffler';

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		// padding: theme.spacing(0, 1.5),
		height: '100vh',
		scrollSnapAlign: 'end',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	subContainer: {
		height: '100%',
		width: 'fit-content !important'
	},
	text: {
		transitionDelay: '1.4s',
		transition: 'opacity 1s ease-in',
		fontFamily: 'Suranna, serif !important',
		fontSize: '20px !important',
		padding: theme.spacing(0, 0, 0, 4),
		textAlign: 'center'
	},
	sub_title: {
		transitionDelay: '1s',
		transition: 'opacity .75s ease-in',
		fontFamily: 'Vujahday Script, cursive !important',
		textAlign: 'center',
		fontSize: '1.25rem'
	},
	mobile_sub_title: {
		transitionDelay: '1s',
		transition: 'opacity .75s ease-in',
		fontFamily: 'Vujahday Script, cursive !important',
		textAlign: 'center',
		fontSize: '1.3rem'
	},
	img: {
		transition: 'opacity .8s ease-in !important',
		width: '280px',
		height: '440px',
		boxShadow: 'rgb(0 0 0) 12px 12px 42px 0px'
	},
	imageLocked: {
		marginTop: theme.spacing(7),
		position: 'fixed'
	},
	button: {
		transitionDelay: '1.7s !important',
		transition: 'opacity 1s ease-in !important',
		backgroundColor: 'black !important',
		color: 'white',
		height: '4rem',
		width: '18rem',
		margin: '0 auto !important',
		'&:hover': {
			border: 'solid 3px white !important',
			outline: 'solid 2px black !important',
			fontsize: '30px',
			// backgroundColor: '#373737 !important',
			boxShadow: 'rgb(0 0 0) 12px 12px 42px 0px',
			transition:
				'border .075s ease-in, outline .075s ease-in, box-shadow .075s ease-in !important'
		}
	},
	center_container: {
		marginLeft: '40px',
		width: '650px',
		display: 'flex',
		flexFlow: 'column',
		justifyContent: 'center'
	},
	loading: {
		opacity: '0 !important'
	},
	loading_button: {
		opacity: '0 !important',
		background: 'black !important',
		backgroundColor: 'black !important',
		color: 'white',
		height: '52px',
		width: '250px'
	},
	logo_text: {
		transitionDelay: '.5s',
		transition: 'opacity .75s ease-in',
		fontFamily: 'Vujahday Script, cursive',
		fontSize: '42px',
		height: 'fit-content',
		textAlign: 'center',
		lineHeight: '1'
	},
	mobile_logo_text: {
		transitionDelay: '.5s',
		transition: 'opacity .75s ease-in',
		fontFamily: 'Vujahday Script, cursive',
		fontSize: '5rem',
		height: 'fit-content',
		textAlign: 'center',
		lineHeight: '1'
	},
	cta_disabled: {
		color: 'white !important',
		border: 'solid 3px white !important',
		outline: 'solid 2px black !important'
	},
	mobile_img: {
		height: '25rem',
		width: '15rem',
		margin: theme.spacing(0.25),
		boxShadow: 'rgb(0 0 0) 12px 12px 42px 0px',
		transition: 'opacity .8s ease-in !important'
	},
	img_container: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%'
	},
	mobile_container: {
		height: '100vh',
		padding: theme.spacing(2)
	},
	mobile_center_container: {}
}));

interface IProps {
	isLoading: boolean;
	setIsLoading(isLoading: boolean): void;
}

const Home = ({ setIsLoading, isLoading }: IProps) => {
	const theme = useTheme();
	const classes = useStyles(theme);

	// const renderDesktopLayout = () => {
	// 	return (
	// 		<>
	// 			<Grid
	// 				id={'home'}
	// 				container
	// 				alignItems={'center'}
	// 				className={classes.container}
	// 				direction={'row'}
	// 				justifyContent={'center'}
	// 				wrap={'nowrap'}
	// 			>
	// 				<img
	// 					src="/images/card.jpg"
	// 					alt=""
	// 					className={isLoading ? classes.loading : classes.img}
	// 					onLoad={() => {
	// 						setIsLoading(false);
	// 					}}
	// 				/>
	// 				<div className={classes.center_container}>
	// 					<Logo
	// 						text={'webCards'}
	// 						className={isLoading ? classes.loading : classes.logo_text}
	// 					/>
	// 					<Typography
	// 						className={isLoading ? classes.loading : classes.sub_title}
	// 					>
	// 						The internet history NFT collection
	// 					</Typography>
	// 					<Spacer vertical spacing={2} />
	// 					<Typography className={isLoading ? classes.loading : classes.text}>
	// 						webCards are a collection of 5,555 hand crafted ERC-1155 NFTs,
	// 						each inspired by some of the most important technological &
	// 						cultural moments which have shaped the internet we know today.
	// 					</Typography>
	// 					<Spacer vertical spacing={4} />
	// 					<Button
	// 						variant="contained"
	// 						disabled
	// 						classes={{ disabled: classes.cta_disabled }}
	// 						className={isLoading ? classes.loading_button : classes.button}
	// 					>
	// 						Mint coming soon...
	// 					</Button>
	// 				</div>
	// 				<Spacer vertical spacing={2} />
	// 			</Grid>
	// 		</>
	// 	);
	// };

	const renderDesktopLayout = () => {
		return (
			<>
				<Grid
					id={'home'}
					container
					alignItems={'center'}
					className={classes.mobile_container}
					direction={'column'}
					justifyContent={'center'}
					wrap={'nowrap'}
				>
					<Spacer vertical spacing={4} />
					<div className={classes.mobile_center_container}>
						<Logo
							text={'webCards'}
							className={isLoading ? classes.loading : classes.mobile_logo_text}
						/>
						<div
							className={isLoading ? classes.loading : classes.mobile_sub_title}
						>
							The internet history NFT collection
						</div>
					</div>
					<Spacer vertical spacing={2} />
					<Grid container direction={'row'} justifyContent={'center'}>
						<img
							src="/images/card.jpg"
							alt=""
							className={isLoading ? classes.loading : classes.mobile_img}
							onLoad={() => {
								setIsLoading(false);
							}}
						/>
						<Spacer horizontal spacing={1} />
						<img
							src="/images/card.jpg"
							alt=""
							className={isLoading ? classes.loading : classes.mobile_img}
							onLoad={() => {
								setIsLoading(false);
							}}
						/>
						<Spacer horizontal spacing={1} />
						<img
							src="/images/card.jpg"
							alt=""
							className={isLoading ? classes.loading : classes.mobile_img}
							onLoad={() => {
								setIsLoading(false);
							}}
						/>
						<Spacer horizontal spacing={1} />
						<img
							src="/images/card.jpg"
							alt=""
							className={isLoading ? classes.loading : classes.mobile_img}
							onLoad={() => {
								setIsLoading(false);
							}}
						/>
						<Spacer horizontal spacing={1} />
						<img
							src="/images/card.jpg"
							alt=""
							className={isLoading ? classes.loading : classes.mobile_img}
							onLoad={() => {
								setIsLoading(false);
							}}
						/>
					</Grid>
					<Spacer vertical spacing={4} />
					<Button
						variant="contained"
						disabled
						classes={{ disabled: classes.cta_disabled }}
						className={isLoading ? classes.loading_button : classes.button}
					>
						Mint coming soon...
					</Button>
					{/* <div className={classes.center_container}>
						<Logo
							text={'webCards'}
							className={isLoading ? classes.loading : classes.logo_text}
						/>
						<Typography
							className={isLoading ? classes.loading : classes.sub_title}
						>
							The internet history NFT collection
						</Typography>
						<Spacer vertical spacing={2} />
						<Typography className={isLoading ? classes.loading : classes.text}>
							webCards are a collection of 5,555 hand crafted ERC-1155 NFTs,
							each inspired by some of the most important technological &
							cultural moments which have shaped the internet we know today.
						</Typography>
						<Spacer vertical spacing={4} />
						
					</div> */}
				</Grid>
			</>
		);
	};
	const renderMobileLayout = () => {
		return (
			<>
				<Grid
					id={'home'}
					container
					alignItems={'center'}
					className={classes.mobile_container}
					direction={'column'}
					justifyContent={'center'}
					wrap={'nowrap'}
				>
					<Spacer vertical spacing={4} />
					<div className={classes.mobile_center_container}>
						<Logo
							text={'webCards'}
							className={isLoading ? classes.loading : classes.mobile_logo_text}
						/>
						<div
							className={isLoading ? classes.loading : classes.mobile_sub_title}
						>
							The internet history NFT collection
						</div>
					</div>
					<Spacer vertical spacing={2} />
					<img
						src="/images/card.jpg"
						alt=""
						className={isLoading ? classes.loading : classes.mobile_img}
						onLoad={() => {
							setIsLoading(false);
						}}
					/>
					<Spacer vertical spacing={5} />
					<Button
						variant="contained"
						disabled
						classes={{ disabled: classes.cta_disabled }}
						className={isLoading ? classes.loading_button : classes.button}
					>
						Mint coming soon...
					</Button>
					{/* <div className={classes.center_container}>
						<Logo
							text={'webCards'}
							className={isLoading ? classes.loading : classes.logo_text}
						/>
						<Typography
							className={isLoading ? classes.loading : classes.sub_title}
						>
							The internet history NFT collection
						</Typography>
						<Spacer vertical spacing={2} />
						<Typography className={isLoading ? classes.loading : classes.text}>
							webCards are a collection of 5,555 hand crafted ERC-1155 NFTs,
							each inspired by some of the most important technological &
							cultural moments which have shaped the internet we know today.
						</Typography>
						<Spacer vertical spacing={4} />
						
					</div> */}
					<Spacer vertical spacing={4} />
				</Grid>
			</>
		);
	};

	const renderHome = () => {
		if (desktopDevice) {
			return renderDesktopLayout();
		} else return renderMobileLayout();
	};

	return renderHome();
};

export default Home;
