import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	text: {
		fontFamily: 'Vujahday Script, cursive',
		fontSize: '42px',
		height: 'fit-content',
		textAlign: 'center',
		lineHeight: '1',
		width: '100%'
	}
});

interface IProps {
	text: string;
	className?: string;
}

const HeaderText = ({ text, className }: IProps) => {
	const classes = useStyles();

	return <div className={className ?? classes.text}>{text}</div>;
};

export default HeaderText;
