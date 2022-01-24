import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { Theme } from '@mui/material';

interface IProps {
	children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		backgroundColor: 'white',
		position: 'sticky',
		opacity: 0.8,
		top: '64px',
		width: '100%'
	}
}));

const StickyWrapper = ({ children }: IProps) => {
	const classes = useStyles();
	return <div className={classes.root}>{children}</div>;
};

export default StickyWrapper;
