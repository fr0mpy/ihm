import * as React from 'react';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { JsxElement } from 'typescript';

const useStyles = makeStyles((theme: Theme) => ({
	img: {
		width: '280px',
		height: '440px',
		boxShadow: 'rgb(0 0 0) 12px 12px 42px 0px'
	}
}));

const CardShuffler = () => {
	const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
	const classes = useStyles();
	const cardSrcs = [
		'/images/card.jpg',
		'/images/spam.jpg',
		'/images/card.jpg',
		'/images/spam.jpg',
		'/images/card.jpg',
		'/images/spam.jpg'
	];

	React.useEffect(() => {
		beginShuffle();
	}, []);

	const beginShuffle = () => {
		setInterval(() => {
			if (currentCardIndex === 4) {
				setCurrentCardIndex(0);
			} else {
				setCurrentCardIndex(currentCardIndex + 1);
			}
		}, 1000);
	};

	const renderCards = () => {
		return cardSrcs.map((src, index) => {
			return (
				<img
					src={src}
					alt=""
					className={currentCardIndex ? classes.img : classes.img}
				/>
			);
		});
	};

	return <> {renderCards}</>;
};
export default CardShuffler;
