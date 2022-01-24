import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Backdrop } from '@mui/material';

interface IProps {
	open: boolean;
	children: any;
	closeModal(): void;
}

const ModalWrapper = ({ open, children, closeModal }: IProps) => {
	return (
		<Modal
			open={open}
			onClose={closeModal}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 750
			}}
		>
			{children}
		</Modal>
	);
};

export default ModalWrapper;
