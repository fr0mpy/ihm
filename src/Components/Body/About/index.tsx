import * as React from 'react';
import { Grid, Theme, Typography } from '@mui/material';
import { useTheme, makeStyles } from '@mui/styles';
import FadeInWrapper from '../../FadeInWrapper';
import Spacer from '../../Spacer';
import StickyWrapper from '../../StickyWrapper';
import Logo from '../../Logo';
import { mobileDevice } from '../../../helpers/layout';

/*
    We need to have a value stored, which increases / decreases with each scroll
    We need variables stored with values: 100, 200, 300, 400
    A different component is rendered with each 100
    The opacity of that component is set using the 100 value
*/

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		height: '100vh',
		padding: theme.spacing(0, 48),
		margin: theme.spacing(6, 0),
		[theme.breakpoints.down('sm')]: {
			padding: 0,
			height: 'fit-content',
			margin: theme.spacing(6, 0)
		}
	},
	page_heading: {
		lineHeight: 2.5,
		height: theme.spacing(5),
		position: 'fixed',
		textAlign: 'center',
		width: '100%'
	},
	text: {
		fontFamily: 'Suranna, serif !important',
		fontSize: '20px !important',
		padding: theme.spacing(0, 4),
		textAlign: 'center'
	},
	img_container: {
		display: 'flex',
		justifyContent: 'space-evenly'
	},
	img: {
		width: '75px',
		height: '125px',
		boxShadow: 'rgb(0 0 0) 12px 12px 42px 0px'
	},
	bold_text: {
		fontFamily: 'Suranna, serif !important',
		fontWeight: 700,
		fontSize: '20px !important',
		textAlign: 'center'
	},
	roadmap_text: {
		textAlign: 'center',
		fontFamily: 'Vujahday Script, cursive',
		fontWeight: 700,
		fontSize: '20px',
		margin: 0
	}
}));

const About = () => {
	const theme = useTheme();
	const classes = useStyles(theme);

	return (
		<Grid
			id={'about'}
			container
			justifyContent={'center'}
			alignItems={'center'}
			className={classes.container}
		>
			<Typography className={classes.text}>
				{mobileDevice && <Spacer vertical spacing={4} />}
				<FadeInWrapper text>Okay, so what are webCards?</FadeInWrapper>
				<FadeInWrapper text>
					<Spacer vertical spacing={4} />
					webCards are an NFT collection by (what will soon be) The Internet
					History Museum: a metaverse project focussed towards preserving
					internet culture.
					<Spacer vertical spacing={4} />
					The webCards collection is made up of{' '}
					<span className={classes.bold_text}>55</span> unique ERC-1155 tokens,
					with each unique token having it's own supply of between
					<span className={classes.bold_text}> 1 - 200</span> - resulting in a
					collection of <span className={classes.bold_text}>5,555</span> total
					webCards. The minting of which will be used to fund The IHM.
					<Spacer vertical spacing={4} />
				</FadeInWrapper>
				<FadeInWrapper text>
					Each card - inspired by one of many moments which has shaped the
					internet - will cost{' '}
					<span className={classes.bold_text}> 0.055 </span>
					eth, plus gas and will grant the holder to make their own personal
					mark on the Internet History Museum and participate as part of the
					eventual DAO this project is likely to become. Holders will also be
					able to download a full resolution file of their card - Which they can
					use as their pfp or even their mobile background.
					<Spacer vertical spacing={4} />
				</FadeInWrapper>
				<FadeInWrapper text>
					We will begin community discussions for the museum once our initial
					roadmap below is complete.
				</FadeInWrapper>
				<Spacer vertical spacing={4} />
			</Typography>
		</Grid>
	);
};

export default About;
