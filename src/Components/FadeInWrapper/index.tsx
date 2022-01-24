import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
	fadeInSection: {
		opacity: 0,
		visibility: 'hidden',
		willChange: 'opacity, visibility',
		transform: 'translateY(20vh)'
	},
	FadeInSection_isVisible: {
		transform: 'none',
		// opacity: 1,
		transition: 'opacity 0.8s ease-in, transform .8s ease-in',
		visibility: 'visible'
	},
	fadeInSection2: {
		opacity: 0,
		visibility: 'hidden',
		willChange: 'opacity, visibility'
	},
	FadeInSection_isVisible2: {
		transform: 'none',
		// opacity: 1,
		transition: 'opacity 0.75s ease-in',
		visibility: 'visible'
	}
}));

const FadeInWrapper = (props: any) => {
	const [isVisible, setVisible] = React.useState(true);
	const domRef = React.useRef<HTMLDivElement>(null);

	const classes = useStyles();

	React.useEffect(() => {
		let options = {
			root: document.querySelector('#wrapperContainer'),
			rootMargin: '0px',
			threshold: 0
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => setVisible(entry.isIntersecting));
		}, options);
		if (domRef.current) {
			observer.observe(domRef.current);
		}
		return () => {
			if (domRef.current) {
				observer.unobserve(domRef.current);
			}
		};
	}, []);

	React.useEffect(() => {
		console.log('is intersecting', isVisible);
	}, []);

	const setClassName = () => {
		if (props.text) {
			return isVisible
				? classes.FadeInSection_isVisible2
				: classes.fadeInSection2;
		} else {
			return isVisible
				? classes.FadeInSection_isVisible
				: classes.fadeInSection;
		}
	};

	return (
		<div className={setClassName()} ref={domRef ? domRef : ''}>
			{props.children}
		</div>
	);
};

export default FadeInWrapper;
