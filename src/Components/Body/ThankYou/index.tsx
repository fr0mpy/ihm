import * as React from 'react';
import { Grid, Theme, Typography } from '@mui/material';
import { useTheme, makeStyles } from '@mui/styles';
import Spacer from '../../Spacer';
import { Home } from '@mui/icons-material';

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		scrollSnapAlign: 'end',
		height: '100vh',
		textAlign: 'center',
		padding: theme.spacing(0, 36),
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(0, 4)
		}
	},
	page_heading: {
		lineHeight: 2.5,
		height: theme.spacing(5),
		position: 'fixed',
		textAlign: 'center',
		width: '100%'
	},
	thankYou: {
		fontFamily: 'Vujahday Script, cursive',
		fontWeight: 700,
		fontSize: '24px',
		margin: 0
	},
	text: {
		fontFamily: 'Suranna, serif !important',
		margin: 0,

		fontSize: '18px'
	},
	separator: {
		margin: '0 auto',
		borderBottom: 'solid 2px black',
		width: '400px',
		[theme.breakpoints.down('sm')]: {
			width: '75%'
		}
	},
	cta: {
		fontFamily: 'Suranna, serif !important',
		fontWeight: 700,
		margin: 0,
		fontSize: '18px',
		border: 'none',
		backgroundColor: 'transparent',
		cursor: 'pointer',
		'&:hover': {
			opacity: 0.8
		}
	}
}));

const ThankYou = () => {
	const theme = useTheme();
	const classes = useStyles(theme);

	const scrollToTop = () => {
		const home = document.getElementById('home');
		if (home) {
			home.scrollIntoView({
				behavior: 'smooth',
				block: 'end',
				inline: 'nearest'
			});
		}
	};

	return (
		<Grid
			id={'thankyou'}
			container
			justifyContent={'center'}
			alignItems={'center'}
			className={classes.container}
			direction={'column'}
		>
			<p className={classes.text}>If you've read this far,</p>
			<Spacer vertical spacing={2} />

			<div className={classes.thankYou}>Thank You</div>
			<Spacer vertical spacing={2} />

			<p className={classes.text}>
				Your time spent reading this project in a sea of others is hugely
				appreciated.
			</p>
			<Spacer vertical spacing={2} />

			<p className={classes.text}>
				If you have any questions, feel free to reach out over Twitter or
				Discord. As with most projects, the Discord will be the best place to
				talk and get updates. Not to mention meet others interested in the
				history of the Internet and what it represents today.
			</p>
			<Spacer vertical spacing={6} />

			<button className={classes.cta} onClick={() => scrollToTop()}>
				<p className={classes.cta}>Back to top ^</p>
			</button>
		</Grid>
	);
};

export default ThankYou;
