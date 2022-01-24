import { makeStyles } from '@mui/styles';
import * as React from 'react';
import clsx from 'clsx';

interface IProps {
	activeIndex: number | null;
	index: null | number;
	link: string;
	drawerLinks?: boolean;
	scrollIntoView(elementId: string): void;
	setActiveIndex(index: number | null): void;
}

const useStyles = makeStyles({
	link: {
		backgroundColor: 'transparent',
		border: 'none',
		color: 'black',
		cursor: 'pointer',
		fontFamily: 'Vujahday Script, cursive',
		fontSize: '18px',
		fontWeight: 'bold',
		margin: 'auto 0',
		textDecoration: 'none',
		'&:hover': {
			opacity: '0.7 !important'
		}
	},
	active_link: {
		textDecoration: 'underline'
	},
	marginBottom: {
		marginBottom: '12px !important'
	}
});

const HashLink = ({
	index,
	link,
	setActiveIndex,
	activeIndex,
	drawerLinks,
	scrollIntoView
}: IProps) => {
	const classes = useStyles();

	const elementId = link.replace(/\s/g, '').toLowerCase();

	return (
		<button
			className={clsx(
				classes.link,
				index === activeIndex ? classes.active_link : '',
				'header-link',
				drawerLinks ? classes.marginBottom : ''
			)}
			onClick={() => {
				if (index) {
					setActiveIndex(index);
				}
				scrollIntoView(elementId);
			}}
		>
			{link}
		</button>
	);
};

export default HashLink;
