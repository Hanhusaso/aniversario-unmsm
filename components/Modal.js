import React, { useState, useEffect, useRef } from 'react';

export const Modal = ({ children, estado, setEstado }) => {
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
		element.classList.remove(...classesToRemove);
		element.classList.add(...classesToAdd);
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
				<div className="modal-flex-container flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
					<div
						onClick={() => setEstado(false)}
						className="modal-bg-container fixed inset-0 bg-azulOscuro/75"></div>
					<div className="modal-space-container hidden sm:inline-block sm:align-middle sm:h-screen">
						&nbsp;
					</div>
					<div
						id="modal-container"
						ref={modal}
						className="modal-container max-h-full inline-block  align-bottom text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl w-full">
						<div className="modal-wrapper">{children}</div>
					</div>
				</div>
			</div>
		</>
	);
};
