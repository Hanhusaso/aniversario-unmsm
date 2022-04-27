import React, { useState } from 'react';
import PlayIcon from './icons/PlayIcon';
import Image from 'next/image';
import { Modal } from './Modal';
import ReactPlayer from 'react-player';

export const Videos = () => {
	const [activo, setActivo] = useState(false);
	const handleActivo = () => {
		setActivo(!activo);
	};
	const [estadoModal, setEstadoModal] = useState(false);
	const [modalData, setModalData] = useState(null);

	const tipoVideos = () => {
		console.log('hola');
	};

	return (
		<div className="mx-20">
			<h2 className="text-center text-5xl text-amarillo mb-4 font-bold">
				Videos de aniversario
			</h2>
			<ul className="flex items-center justify-center mb-4">
				<li
					onClick={handleActivo}
					className={
						activo
							? 'cursor-pointer bg-azulOscuro text-white font-semibold  py-1 px-2 mx-2  rounded'
							: 'cursor-pointer bg-transparent hover:bg-azulOscuro hover:text-white text-azulOscuro font-semibold  py-1 px-2 mx-2 border border-azulOscuro hover:border-transparent rounded'
					}
				>
					Todos
				</li>
				<li
					onClick={handleActivo}
					className={
						activo
							? 'cursor-pointer bg-azulOscuro text-white font-semibold  py-1 px-2 mx-2  rounded'
							: 'cursor-pointer bg-transparent hover:bg-azulOscuro hover:text-white text-azulOscuro font-semibold  py-1 px-2 mx-2 border border-azulOscuro hover:border-transparent rounded'
					}
				>
					Sedes
				</li>
				<li
					onClick={handleActivo}
					className={
						activo
							? 'cursor-pointer bg-azulOscuro text-white font-semibold  py-1 px-2 mx-2  rounded'
							: 'cursor-pointer bg-transparent hover:bg-azulOscuro hover:text-white text-azulOscuro font-semibold  py-1 px-2 mx-2 border border-azulOscuro hover:border-transparent rounded'
					}
				>
					Institucionales
				</li>
				<li
					onClick={handleActivo}
					className={
						activo
							? 'cursor-pointer bg-azulOscuro text-white font-semibold  py-1 px-2 mx-2  rounded'
							: 'cursor-pointer bg-transparent hover:bg-azulOscuro hover:text-white text-azulOscuro font-semibold  py-1 px-2 mx-2 border border-azulOscuro hover:border-transparent rounded'
					}
				>
					Miscelánea
				</li>
			</ul>

			<div className="grid grid-cols-3 grid-rows-4 gap-4 mb-4">
				<div className="relative cursor-pointer col-span-2 row-span-2">
					<Image
						onClick={() => {
							setModalData(
								'https://afroperuanos.s3.us-east-2.amazonaws.com/videos/Martin+Alvarado-1.m4v'
							);
							setEstadoModal(true);
						}}
						className="h-full object-cover"
						layout="responsive"
						quality={100}
						width={673}
						height={362}
						src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rudy_Shady_png_ff8af3ef4e.png"
					></Image>
					<PlayIcon
						className={`absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
					/>
					<Modal estado={estadoModal} setEstado={setEstadoModal}>
						{modalData && (
							<ReactPlayer
								controls
								url={modalData}
								width="100%"
								height="100%"
							/>
						)}
					</Modal>
				</div>
				<div className="relative cursor-pointer col-span-1 row-span-1">
					<Image
						onClick={() => {
							setModalData(
								'https://afroperuanos.s3.us-east-2.amazonaws.com/videos/Lorry+Salcedo+Mitrani-1.m4v'
							);
							setEstadoModal(true);
						}}
						className="h-full object-cover"
						layout="responsive"
						quality={100}
						width={324}
						height={167}
						src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rudy_Shady_png_ff8af3ef4e.png"
					></Image>
					<PlayIcon
						className={`absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
					/>
					<Modal estado={estadoModal} setEstado={setEstadoModal}>
						{modalData &&
							(estadoModal === true ? (
								<ReactPlayer
									controls
									url={modalData}
									width="100%"
									height="100%"
									playing={true}
								/>
							) : (
								<ReactPlayer
									controls
									url={modalData}
									width="100%"
									height="100%"
									playing={false}
								/>
							))}
					</Modal>
				</div>
				<div className="relative cursor-pointer col-span-1 row-span-1">
					<Image
						className="h-full object-cover"
						layout="responsive"
						quality={100}
						width={324}
						height={167}
						src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rudy_Shady_png_ff8af3ef4e.png"
					></Image>
					<PlayIcon
						className={`absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
					/>
				</div>
				<div className="relative cursor-pointer col-span-1 row-span-1">
					<Image
						className="h-full object-cover"
						layout="responsive"
						quality={100}
						width={324}
						height={167}
						src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rudy_Shady_png_ff8af3ef4e.png"
					></Image>
					<PlayIcon
						className={`absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
					/>
				</div>
				<div className="relative cursor-pointer col-span-2 row-span-2">
					<Image
						className="h-full object-cover"
						layout="responsive"
						quality={100}
						width={673}
						height={362}
						src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rudy_Shady_png_ff8af3ef4e.png"
					></Image>
					<PlayIcon
						className={`absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
					/>
				</div>
				<div className="relative cursor-pointer col-span-1 row-span-1">
					<Image
						className="h-full object-cover"
						layout="responsive"
						quality={100}
						width={324}
						height={167}
						src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rudy_Shady_png_ff8af3ef4e.png"
					></Image>
					<PlayIcon
						className={`absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
					/>
				</div>
			</div>
		</div>
	);
};
