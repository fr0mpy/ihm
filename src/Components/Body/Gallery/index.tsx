import * as React from 'react';
import { Grid, Theme, Typography } from '@mui/material';
import { useTheme, makeStyles } from '@mui/styles';
import Spacer from '../../Spacer';
import { desktopDevice, mobileDevice } from '../../../helpers/layout';
import FadeInWrapper from '../../FadeInWrapper';
import StickyWrapper from '../../StickyWrapper';
import Logo from '../../Logo';
import ModalWrapper from '../../Modal';
import GalleryImage from '../../GalleryImage';

/*
    We need to have a value stored, which increases / decreases with each scroll
    We need variables stored with values: 100, 200, 300, 400
    A different component is rendered with each 100
    The opacity of that component is set using the 100 value
*/

const useStyles = makeStyles((theme: Theme) => ({
	container: {},
	page_heading: {
		lineHeight: 2.5,
		height: theme.spacing(5),
		position: 'fixed',
		textAlign: 'center',
		width: '100%'
	},
	img_main_container: {
		fontFamily: 'Suranna, serif !important',
		fontSize: '18px',
		padding: theme.spacing(0, 4),
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(0, 3)
		}
	},
	img_container: {
		display: 'flex',
		justifyContent: 'space-evenly',
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
			justifyContent: 'space-evenly',
			width: 'calc(100% - 20px)'
		}
	},
	img: {
		width: '9rem',
		height: '15rem',
		boxShadow: 'rgb(0 0 0) 12px 12px 42px 0px',
		cursor: 'pointer',
		margin: theme.spacing(1),
		[theme.breakpoints.up('sm')]: {
			width: '225px',
			height: '350px',
			margin: theme.spacing(2)
		}
	}
}));

interface IOwnProps {
	screenNumber: number;
}

const Gallery = () => {
	const theme = useTheme();
	const classes = useStyles(theme);
	const [selectedImg, setSelectedImg] = React.useState<string>('');

	const closeModal = () => {
		setSelectedImg('');
	};

	const renderDesktopGallery = () => {
		return (
			<Grid
				id={'gallery'}
				container
				justifyContent={'center'}
				alignItems={'center'}
				className={classes.container}
			>
				<ModalWrapper open={selectedImg ? true : false} closeModal={closeModal}>
					<GalleryImage galleryImg={selectedImg} closeModal={closeModal} />
				</ModalWrapper>
				<div className={classes.img_main_container}>
					<Spacer vertical spacing={12} />
					<div className={classes.img_container}>
						<img
							src="/images/spam.jpg"
							alt=""
							className={classes.img}
							onClick={() => setSelectedImg('/images/spam.jpg')}
						/>
						<img
							src="/images/card.jpg"
							alt=""
							className={classes.img}
							onClick={() => setSelectedImg('/images/card.jpg')}
						/>
						<img
							src="/images/spam.jpg"
							alt=""
							className={classes.img}
							onClick={() => setSelectedImg('/images/spam.jpg')}
						/>
						<img
							src="/images/card.jpg"
							alt=""
							className={classes.img}
							onClick={() => setSelectedImg('/images/card.jpg')}
						/>
					</div>
					<div className={classes.img_container}>
						<img
							src="/images/card.jpg"
							alt=""
							className={classes.img}
							onClick={() => setSelectedImg('/images/card.jpg')}
						/>
						<img
							src="/images/spam.jpg"
							alt=""
							className={classes.img}
							onClick={() => setSelectedImg('/images/spam.jpg')}
						/>
						<img
							src="/images/card.jpg"
							alt=""
							className={classes.img}
							onClick={() => setSelectedImg('/images/card.jpg')}
						/>
						<img
							src="/images/spam.jpg"
							alt=""
							className={classes.img}
							onClick={() => setSelectedImg('/images/spam.jpg')}
						/>
					</div>
					<br />
					{mobileDevice ? '(touch to enlarge)' : ''}
					<Spacer vertical spacing={mobileDevice ? 6 : 2} />
				</div>
			</Grid>
		);
	};

	const renderMobileGallery = () => {
		return (
			<Grid
				id={'gallery'}
				container
				justifyContent={'center'}
				alignItems={'center'}
				className={classes.container}
			>
				<ModalWrapper open={selectedImg ? true : false} closeModal={closeModal}>
					<GalleryImage galleryImg={selectedImg} closeModal={closeModal} />
				</ModalWrapper>
				<div className={classes.img_main_container}>
					<Spacer vertical spacing={6} />
					<div className={classes.img_container}>
						<img
							src="/images/spam.jpg"
							alt=""
							className={classes.img}
							onClick={() => setSelectedImg('/images/spam.jpg')}
						/>
						<img
							src="/images/card.jpg"
							alt=""
							className={classes.img}
							onClick={() => setSelectedImg('/images/card.jpg')}
						/>
					</div>
					<div className={classes.img_container}>
						<img
							src="/images/card.jpg"
							alt=""
							className={classes.img}
							onClick={() => setSelectedImg('/images/card.jpg')}
						/>
						<img
							src="/images/spam.jpg"
							alt=""
							className={classes.img}
							onClick={() => setSelectedImg('/images/spam.jpg')}
						/>
					</div>
					<div className={classes.img_container}>
						<img
							src="/images/spam.jpg"
							alt=""
							className={classes.img}
							onClick={() => setSelectedImg('/images/spam.jpg')}
						/>
						<img
							src="/images/card.jpg"
							alt=""
							className={classes.img}
							onClick={() => setSelectedImg('/images/card.jpg')}
						/>
					</div>

					<br />
					{mobileDevice ? '(touch to enlarge)' : ''}
					<Spacer vertical spacing={mobileDevice ? 6 : 2} />
				</div>
			</Grid>
		);
	};

	const renderGallery = () => {
		if (desktopDevice) {
			return renderDesktopGallery();
		} else {
			return renderMobileGallery();
		}
	};

	return renderGallery();
};

export default Gallery;
