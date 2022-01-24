import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
const useStyles = makeStyles((theme: Theme) => ({
	container: {
		display: 'flex',
		justifyContent: 'space-evenly',
		width: '160px'
	},
	img: {
		width: '40px',
		height: '40px',
		cursor: 'pointer',
		'&:hover': {
			opacity: '0.8'
		}
	}
}));

const SocialLinks = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<a
				className={classes.img}
				href="https://discord.gg/f4FpuWhPkW"
				target="_blank"
				rel="noreferrer"
			>
				<img src="/images/discord.png" alt="" className={classes.img} />
			</a>
			<a
				className={classes.img}
				href="https://twitter.com/webcardsnft"
				target="_blank"
				rel="noreferrer"
			>
				<img src="/images/twitter.png" alt="" className={classes.img} />
			</a>
			<a className={classes.img} href="/" target="_blank" rel="noreferrer">
				<img src="/images/opensea.png" alt="" className={classes.img} />
			</a>
		</div>
	);
};

export default SocialLinks;
