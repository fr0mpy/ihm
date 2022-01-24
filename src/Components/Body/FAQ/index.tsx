import * as React from 'react';
import { Grid, Theme, Typography } from '@mui/material';
import { useTheme, makeStyles } from '@mui/styles';
import Spacer from '../../Spacer';
import FadeInWrapper from '../../FadeInWrapper';

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		scrollSnapAlign: 'end',
		height: 'fit-content',
		textAlign: 'center',
		padding: theme.spacing(0, 36),
		margin: theme.spacing(14, 0),
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(0, 4),
			margin: theme.spacing(19, 0)
		}
	},
	page_heading: {
		lineHeight: 2.5,
		height: theme.spacing(5),
		position: 'fixed',
		textAlign: 'center',
		width: '100%'
	},
	question: {
		fontFamily: 'Vujahday Script, cursive',
		fontWeight: 700,
		fontSize: '24px',
		margin: 0
	},
	answer: {
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
	title: {
		textAlign: 'center',
		fontFamily: 'Vujahday Script, cursive',
		fontWeight: 700,
		fontSize: '20px',
		margin: 0
	}
}));

const FAQ = () => {
	const theme = useTheme();
	const classes = useStyles(theme);

	return (
		<>
			<Spacer vertical spacing={1} className={classes.separator} />
			<Grid
				id={'faq'}
				container
				justifyContent={'center'}
				alignItems={'center'}
				className={classes.container}
			>
				<Typography>
					<p className={classes.title}>FAQ</p>

					<FadeInWrapper text>
						<Spacer vertical spacing={4} />
						<p className={classes.question}>When is the mint?</p>
						<Spacer vertical spacing={2} />
						<p className={classes.answer}>
							The mint will be the 31st March 2020 at 12:00 UTC. Please Google
							what your local time will be when it is 12:00UTC (link)
						</p>
					</FadeInWrapper>
					<FadeInWrapper text>
						<Spacer vertical spacing={4} />
						<p className={classes.question}>
							How much will it cost to mint a webCard?
						</p>
						<Spacer vertical spacing={2} />
						<p className={classes.answer}>
							Each webCard will cost 0.055eth, plus gas.
						</p>
					</FadeInWrapper>
					<FadeInWrapper text>
						<Spacer vertical spacing={4} />

						<p className={classes.question}>
							How many webCards can I mint at once?
						</p>
						<Spacer vertical spacing={2} />
						<p className={classes.answer}>
							You will be able to mint a maximum of 5 IHM Cards at a time. This
							way people who want to collect a handful at once can do, but also
							to avoid wallets holding too many, too early.
						</p>
					</FadeInWrapper>
					<FadeInWrapper text>
						<Spacer vertical spacing={4} />

						<p className={classes.question}>How do I get whitelisted?</p>
						<Spacer vertical spacing={2} />
						<p className={classes.answer}>
							Join the discord (link) and follow the steps in the 'whiteList'
							channel.
						</p>
					</FadeInWrapper>
					<FadeInWrapper text>
						<Spacer vertical spacing={4} />

						<p className={classes.question}>How will rarity work?</p>
						<Spacer vertical spacing={2} />
						<p className={classes.answer}>
							There will be 55 webCards total, with each card having a total
							supply between 1 - 200. The lower the supply, the rarer. However,
							in it's own right, each card will be somewhat rare.
						</p>
					</FadeInWrapper>
					<FadeInWrapper text>
						<Spacer vertical spacing={4} />
						<p className={classes.question}>
							What will The Internet History Museum be?
						</p>
						<Spacer vertical spacing={2} />
						<p className={classes.answer}>
							The Internet history museum will be a community ran place within
							the metaverse where people will be able to visit and see how we
							got to where we are today with the internet.
							<br />
							<br />
							Once the webCards roadmap is complete, planning and execution of
							The IHM will begin.
						</p>
					</FadeInWrapper>
				</Typography>
			</Grid>
			<Spacer vertical spacing={1} className={classes.separator} />
		</>
	);
};

export default FAQ;
