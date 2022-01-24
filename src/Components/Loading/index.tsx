import React, { memo } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';

const useStyles = makeStyles({
	container_loading: {
		backgroundColor: 'white',
		position: 'absolute',
		height: '100vh',
		width: '100vw',
		zIndex: 3,
		transitionProperty: 'height',
		transitionDuration: '250ms'
	},
	container: {
		backgroundColor: 'white',
		position: 'absolute',
		height: '0vh',
		width: '100vw',
		zIndex: 3
	},
	root: {
		color: 'black !important',
		marginTop: '40vh',
		marginLeft: '50vw'
	},
	spinner: {
		width: '45px',
		height: '70px',
		backgroundColor: 'black',
		margin: '100px auto',
		webkitAnimation: 'rotateplane 1.2s infinite ease-in-out',
		animation: '$rotateplane 1.2s infinite ease-in-out'
	},
	'@-webkit-keyframes rotateplane': {
		'0%': {
			transform: 'perspective(120px)'
		},
		'50%': {
			transform: 'perspective(120px) rotateY(180deg)'
		},
		'100%': {
			transform: 'perspective(120px) rotateY(180deg) rotateX(180deg)'
		}
	},
	'@keyframes rotateplane': {
		'0%': {
			transform: 'perspective(120px) rotateX(0deg) rotateY(0deg)'
		},
		'50%': {
			transform: 'perspective(120px) rotateX(-180.1deg) rotateY(0deg)'
		},
		'100%': {
			transform: 'perspective(120px) rotateX(-180deg) rotateY(-179.9deg)'
		}
	}
});

interface IProps {
	isLoading: boolean;
}

const Loading = memo(({ isLoading }: IProps) => {
	const classes = useStyles();
	return (
		<Grid
			container
			className={isLoading ? classes.container_loading : classes.container}
			justifyContent={'center'}
			alignContent={'center'}
		>
			{isLoading ? <div className={classes.spinner} /> : null}
		</Grid>
	);
});

export default Loading;
