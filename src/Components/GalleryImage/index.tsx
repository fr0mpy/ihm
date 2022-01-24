import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		position: 'absolute',
		top: '45%',
		left: '50%',
		transform: 'translate(-50%, -50%)'

		// [theme.breakpoints.down('sm')]: {
		// 	height: 'calc(100% - 12px)'
		// }
	},
	img: {
		boxShadow: 'rgb(0 0 0) 12px 12px 42px 0px',
		width: '22rem',
		[theme.breakpoints.down('sm')]: {
			width: '20rem'
		}
	},
	close: {
		color: 'white',
		textAlign: 'right',
		fontFamily: 'Vujahday Script, cursive',
		fontWeight: 700,
		fontSize: '22px'
	}
}));

interface IProps {
	galleryImg: string;
	closeModal(): void;
}

const GalleryImage = ({ galleryImg, closeModal }: IProps) => {
	const classes = useStyles();
	return (
		<>
			<div className={classes.root} onClick={() => closeModal()}>
				<img src={galleryImg} alt={''} className={classes.img} />
			</div>
		</>
	);
};

export default GalleryImage;
