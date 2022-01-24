import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import clsx from 'clsx';

const useStyles = makeStyles({
	connect_wallet: {
		backgroundColor: 'black !important',
		color: 'white',
		whiteSpace: 'nowrap',
		padding: '8px 28px !important',
		height: '46px',
		width: '190px',
		transition: 'none',

		'&:hover': {
			border: 'solid 3px white !important',
			outline: 'solid 2px black !important'
		}
	},
	connected: {
		backgroundColor: 'black !important',
		color: 'white',
		whiteSpace: 'nowrap',
		padding: '8px 28px !important',
		height: '46px',
		width: '190px',
		cursor: 'default !important',
		transition: 'none',
		border: 'solid 3px white !important',
		outline: 'solid 2px black !important'
	}
});

const ConnectWalletButton = () => {
	const [walletConnected, setWalletConnected] = React.useState<boolean>(false);
	const classes = useStyles();

	const connectWallet = () => {
		if ((window as any).ethereum) {
			(window as any).ethereum
				.request({ method: 'eth_requestAccounts' })
				.then((accounts: Array<string>) => {
					const [account] = accounts;
					(window as any).userWalletAddress = account;
					setWalletConnected(true);
				});
		} else {
			alert('No Web3 Wallet Extension Detected');
		}
	};

	return (
		<Button
			variant="contained"
			className={walletConnected ? classes.connected : classes.connect_wallet}
			onClick={() => connectWallet()}
			disableTouchRipple={walletConnected}
		>
			{walletConnected
				? (window as any).userWalletAddress.slice(0, 8) + '...'
				: 'Connect Wallet'}
		</Button>
	);
};

export default ConnectWalletButton;
