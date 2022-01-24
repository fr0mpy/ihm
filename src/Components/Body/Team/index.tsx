import * as React from 'react';
import { Grid, Theme, Typography } from '@mui/material';
import { useTheme, makeStyles } from '@mui/styles';
import FadeInWrapper from '../../FadeInWrapper';
import Spacer from '../../Spacer';
import { mobileDevice } from '../../../helpers/layout';
import StickyWrapper from '../../StickyWrapper';
import Logo from '../../Logo';

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		height: '100vh',
		padding: theme.spacing(0, 48),
		[theme.breakpoints.down('sm')]: {
			height: 'fit-content',
			padding: 0,
			margin: '112px 0'
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
	}
}));

const Team = () => {
	const theme = useTheme();
	const classes = useStyles(theme);

	return (
		<Grid
			id="team"
			container
			justifyContent={'center'}
			alignItems={'center'}
			className={classes.container}
		>
			{/* <Spacer vertical spacing={8} /> */}
			<FadeInWrapper text>
				<Typography className={classes.text}>
					<FadeInWrapper text>
						And the team?
						<Spacer vertical spacing={4} />
					</FadeInWrapper>
					<FadeInWrapper text>
						Well frens, right now it's just me ^_^ My names Tombi and I'm a web
						developer and collectables fan.
						<Spacer vertical spacing={4} />
					</FadeInWrapper>
					<FadeInWrapper text>
						I became hooked by the internet as a 5 year old kid sometime around
						1997 when my dad first showed me his new computer - A machine
						running Windows 95' and the revolutionary new web browser: Internet
						Explorer.
						<Spacer vertical spacing={4} />
					</FadeInWrapper>
					<FadeInWrapper text>
						At that point in time, the world wide web was only a year older than
						I was and looking back, it truly feels as though I've grown up
						alongside the internet. And man, has it changed over this time or
						what.
						<Spacer vertical spacing={4} />
					</FadeInWrapper>
					<FadeInWrapper text>
						So this collection is my tribute to the internet.
						<Spacer vertical spacing={4} />
					</FadeInWrapper>
					<FadeInWrapper text>
						I hope as this community and project grows, that we will gather
						other peoples expressions of the internets progression and archive
						them in a single space for the world to look through forever.
						<Spacer vertical spacing={4} />
					</FadeInWrapper>
				</Typography>
			</FadeInWrapper>
		</Grid>
	);
};

export default Team;
