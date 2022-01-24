import { Grid, Theme, Typography } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import { mobileDevice } from '../../helpers/layout';
import Logo from '../Logo';
import Spacer from '../Spacer';

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		height: 'fit-content',
		padding: theme.spacing(0, 1.5)
	},
	subContainer: {
		height: '100%',
		width: 'fit-content !important'
	},
	text: {
		fontFamily: 'Vujahday Script, cursive',
		textAlign: 'center'
	},
	img: {
		width: '260px',
		height: '388px',
		boxShadow:
			'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
	}
}));

const CenterContainer = () => {
	const theme = useTheme();
	const classes = useStyles(theme);

	return (
		<>
			{mobileDevice ? (
				<Grid
					container
					direction={'column'}
					wrap={'nowrap'}
					justifyContent={'space-between'}
					alignItems={'center'}
					className={classes.container}
				>
					<Logo text={'IHM Cards'} />
					<img src="/images/card.jpg" alt="" className={classes.img} />
					<Spacer vertical spacing={3} />
					<Typography className={classes.text}>
						A historical collectable of 50 ERC-1155 NFT's inspired by a handful
						of the most important technological & cultural moments which shaped
						the internet we experience today.
						<br />
						<br />
						There will be a supply of between 1 - 200 for each card. In total
						being 5555 cards. The sale of which will provide the funding for The
						Internet History Museum.
					</Typography>

					{/* <Grid
						item
						container
						direction={'column'}
						justifyContent={'center'}
						className={classes.subContainer}
					>
						<Logo text={"webCards"} />
					</Grid> */}
				</Grid>
			) : null}
		</>
	);
};

export default CenterContainer;
