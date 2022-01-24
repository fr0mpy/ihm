import { Box, Button, Grid, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import Web3 from 'web3';
import { getElementPosition } from '../../helpers/elements';
import {
	desktopDevice,
	mobileDevice,
	tabletDevice
} from '../../helpers/layout';
import ConnectWalletButton from '../ConnectWallet';
import HamburgerMenu from '../hamburgerMenu';
// import { Link } from 'react-router-dom';
import HashLink from '../HashLink';
import ModalWrapper from '../Modal';
import SocialLinks from '../SocialLinks';
import Spacer from '../Spacer';

const useStyles = makeStyles((theme: Theme) => ({
	container_loading: {
		backgroundColor: 'white',
		display: 'flex',
		justifyContent: 'space-between',
		padding: '12px 8px',
		position: 'fixed',
		width: '100%',
		zIndex: 3,
		opacity: 0
		// top: '-70px'
	},
	container: {
		background: 'rgba(255, 255, 255, 0.8)',
		display: 'flex',
		justifyContent: 'space-between',
		padding: '12px 8px',
		position: 'fixed',
		width: '100%',
		zIndex: 3,
		transitionDelay: '1.8s',
		transition: 'opacity .6s ease-in'
	},
	sub_container: {
		width: 'fit-content !important',
		marginLeft: '50px'
	},

	links_container: {
		width: 'fit-content !important'
	},
	drawer_links_container: {
		width: '100% !important',
		display: 'flex',
		flexFlow: 'column'
	},
	marginBottom: {
		marginBottom: '12px'
	},
	spacer: {
		margin: '0 auto'
	},
	root: {
		background: 'rgba(255, 255, 255, 0.8)',
		position: 'absolute',
		top: '45%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		height: '380px',
		width: '75%',
		padding: theme.spacing(4, 3, 3, 3),
		outline: 'none',
		border: 'solid 4px black !important',
		boxShadow: 'rgb(0 0 0) 12px 12px 42px 0px',
		borderRadius: '8px',
		'& button': {
			fontSize: '30px',
			marginBottom: '20px !important'
		}
	}
}));

interface IProps {
	isLoading: boolean;
}

const Header = ({ isLoading }: IProps) => {
	const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
	const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

	const contentLinks = ['Gallery', 'About', 'Road Map', 'Team', 'FAQ'];
	const classes = useStyles();

	const scrollTo = (scrollPosition?: number) => {
		const bodyElement = document.getElementById('wrapperContainer');

		if (bodyElement && scrollPosition) {
			return bodyElement.scrollTo({ top: scrollPosition, behavior: 'smooth' });
		} else return;
	};

	const scrollIntoView = (elementId: string) => {
		const element = getElementPosition(elementId);
		const bodyElement = document.getElementById('wrapperContainer');
		const getElement = document.getElementById(elementId);

		if (mobileDevice) {
			if (element) {
				getElement?.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
					inline: 'nearest'
				});
			}
		}
		if (desktopDevice) {
			if (element) {
				if (bodyElement) {
					switch (elementId) {
						case 'gallery':
							return scrollTo(643);
						case 'about':
							return scrollTo(1600);
						case 'roadmap':
							return scrollTo(2300);
						case 'team':
							return scrollTo(4020);
						case 'faq':
							return scrollTo(4775);
					}
				}
			} else return;
		}
	};

	const renderLinks = (
		links: Array<string>,
		spacing: number,
		spacer?: number,
		drawerLinks?: boolean
	) => {
		return (
			<Grid
				container
				direction={drawerLinks ? 'column' : 'row'}
				className={
					drawerLinks ? classes.drawer_links_container : classes.links_container
				}
				wrap="nowrap"
			>
				{spacer ? <Spacer horizontal spacing={3} /> : null}
				{links.map((link, i) => {
					return (
						<>
							<HashLink
								activeIndex={activeIndex}
								index={i}
								link={link}
								scrollIntoView={scrollIntoView}
								setActiveIndex={setActiveIndex}
								drawerLinks={drawerLinks}
							/>
							{<Spacer horizontal spacing={spacing} />}
						</>
					);
				})}
			</Grid>
		);
	};

	const test = (value: boolean) => {
		console.log('click');
		setMenuOpen(value);
	};

	const renderDesktopHeader = () => {
		return (
			<div
				className={isLoading ? classes.container_loading : classes.container}
			>
				{renderLinks(contentLinks, 3, 3)}
				<Grid
					container
					className={classes.sub_container}
					justifyContent={'space-around'}
					wrap={'nowrap'}
					alignItems={'center'}
				>
					<SocialLinks />
					<Spacer horizontal spacing={2} />
					<ConnectWalletButton />
					<Spacer horizontal spacing={3} />
				</Grid>
			</div>
		);
	};

	const renderMobileHeader = () => {
		return (
			<div
				className={isLoading ? classes.container_loading : classes.container}
			>
				<HamburgerMenu onClick={() => setMenuOpen(true)} />
				<div style={{ width: 'fit-content' }}>
					<SocialLinks />
					{tabletDevice ? <ConnectWalletButton /> : null}
				</div>
				{menuOpen ? (
					<ModalWrapper open={menuOpen ? true : false} closeModal={closeModal}>
						<div className={classes.root} onClick={() => closeModal()}>
							{renderLinks(contentLinks, 3, 6, true)}
						</div>
					</ModalWrapper>
				) : null}

				{/* {renderLinks(contentLinks, 3, 'spacer')}
	            <Grid
	                container
	                className={classes.sub_container}
	                justifyContent={'space-around'}
	                wrap={'nowrap'}
	                alignItems={'center'}
	            >
	                <Spacer horizontal spacing={2} />
	                <Spacer horizontal spacing={3} />
	            </Grid> */}
			</div>
		);
	};

	const closeModal = () => {
		setMenuOpen(false);
	};

	const renderHeader = () => {
		if (desktopDevice) {
			return renderDesktopHeader();
		} else return renderMobileHeader();
	};

	return renderHeader();
};

export default Header;
