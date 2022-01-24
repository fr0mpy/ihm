import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		padding: theme.spacing(0.5),
		height: '40px',
		width: '40px',
		display: 'flex',
		flexFlow: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	bar: {
		height: '3px',
		width: '100%',
		backgroundColor: 'black',
		marginBottom: theme.spacing(0.75),
		borderRadius: theme.spacing(1),
		'&:last-child': {
			marginBottom: 'unset'
		}
	}
}));

interface IProps {
	onClick: (value: boolean) => any;
}

const HamburgerMenu = ({ onClick }: IProps) => {
	const classes = useStyles();
	return (
		<div className={classes.container} onClick={() => onClick(true)}>
			<div className={classes.bar} />
			<div className={classes.bar} />
			<div className={classes.bar} />
		</div>
	);
};

export default HamburgerMenu;
