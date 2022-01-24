import FAQ from './FAQ/index';
import Home from './Home';
import RoadMap from './Roadmap';
import * as React from 'react';
import { Theme, Fab } from '@mui/material';
import { useTheme, makeStyles } from '@mui/styles';
import Gallery from './Gallery';
import Team from './Team';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import About from './About';
import ThankYou from './ThankYou';
import { getElementPosition } from '../../helpers/elements';
import Loading from '../Loading';
import FadeInWrapper from '../FadeInWrapper';

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		overflowY: 'auto',
		height: '100vh',
		'&::-webkit-scrollbar': {
			width: '0.4em'
		},
		'&::-webkit-scrollbar-track': {
			padding: '0 16px'
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: 'black',
			borderRadius: '8px',
			border: 'solid 2px white'
		}
	}
}));

interface IProps {
	isLoading: boolean;
	setIsLoading(isLoading: boolean): void;
}

const Body = ({ setIsLoading, isLoading }: IProps) => {
	const theme = useTheme();
	const classes = useStyles(theme);
	const [scrollTop, setScrollTop] = React.useState<number>(0);
	const [screenNumber, setScreenNumber] = React.useState<number>(0);

	const ref: React.RefObject<HTMLDivElement> = React.useRef(null);
	React.useEffect(() => {
		const onScroll = (e: any) => {
			setScrollTop(e.target.scrollTop);
			getActivePageLink(e.target.scrollTop);
			setScreenNumber(determineScreenNumber());
			console.log('scrollTop', scrollTop);
		};

		if (ref.current) {
			ref.current.addEventListener('scroll', onScroll);
		}

		return () => {
			if (ref.current) {
				ref.current.removeEventListener('scroll', onScroll);
			}
		};
	}, [scrollTop]);

	const setActivePageLink = (elementIndex?: number) => {
		const pageLinks = Array.from(
			document.getElementsByClassName('header-link')
		);

		if (pageLinks) {
			(pageLinks as Array<HTMLElement>).forEach(
				(pageLink: HTMLElement, index: number) => {
					if (elementIndex === index) {
						pageLink.style.textDecoration = 'underline';
					} else {
						pageLink.style.textDecoration = 'none';
					}
				}
			);
		} else return;
	};

	const getActivePageLink = (scrollTop: number) => {
		if (scrollTop < 642) {
			setActivePageLink();
		}
		if (scrollTop >= 642 && scrollTop < 1600) {
			setActivePageLink(0);
		}
		if (scrollTop >= 1600 && scrollTop < 2300) {
			setActivePageLink(1);
		}
		if (scrollTop >= 2300 && scrollTop < 4020) {
			setActivePageLink(2);
		}
		if (scrollTop >= 4020 && scrollTop < 4773) {
			setActivePageLink(3);
		}
		if (scrollTop >= 4773) {
			setActivePageLink(4);
		}
		if (scrollTop >= 5830) {
			setActivePageLink();
		}
	};

	const determineScreenNumber = () => {
		const windowHeight = window.innerHeight ?? screen.height;
		return Math.round(scrollTop / windowHeight);
	};

	return (
		<div className={classes.container} ref={ref} id={'wrapperContainer'}>
			<Loading isLoading={isLoading} />
			<Home setIsLoading={setIsLoading} isLoading={isLoading} />
			<Gallery />
			<About />
			<RoadMap />
			<Team />
			<FAQ />
			<ThankYou />
		</div>
	);
};

export default Body;
