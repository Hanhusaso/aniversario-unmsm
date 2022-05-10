import React, { useState, useEffect, useRef } from 'react';

export const ModalDos = ({ children, estado, setEstado }) => {
	const [firstRender, setFirstRender] = useState(true);

	const modalContainer = useRef(null);
	const modal = useRef(null);

	const openModal = () => {
		showAndHide(
			modalContainer.current,
			['block', 'bg-fadeIn'],
			['hidden', 'bg-fadeOut']
		);
		showAndHide(modal.current, ['modal-scaleIn'], ['modal-scaleOut']);
	};
	const closeModal = () => {
		showAndHide(modalContainer.current, ['bg-fadeOut'], ['bg-fadeIn']);
		showAndHide(modal.current, ['modal-scaleOut'], ['modal-scaleIn']);

		setTimeout(() => {
			showAndHide(modalContainer.current, ['hidden'], ['block']);
		}, 500);
	};

	const showAndHide = (element, classesToAdd, classesToRemove) => {
		element.classList.add(...classesToAdd);
		element.classList.remove(...classesToRemove);
	};

	useEffect(() => {
		if (!firstRender) {
			if (estado) {
				openModal();
			} else {
				closeModal();
			}
		}
	}, [estado]);

	useEffect(() => {
		setFirstRender(false);
	}, [setFirstRender]);

	return (
		<>
			<div
				id="modal-component-container"
				ref={modalContainer}
				className="z-40 fixed inset-0 hidden">
				<div
					onClick={() => setEstado(false)}
					className="flex items-center justify-center min-h-screen">
					<div className="modal-bg-container fixed inset-0 bg-azulOscuro/90"></div>
					{/* <div className="modal-space-container hidden sm:inline-block sm:align-middle sm:h-screen">
						&nbsp;
					</div> */}
					<div
						id="modal-container"
						ref={modal}
						className="flex justify-center items-center h-screen shadow-xl transform transition-all w-full">
						{children}
					</div>
				</div>
			</div>
		</>
	);
};
