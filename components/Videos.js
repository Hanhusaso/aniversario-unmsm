import React, { useState } from 'react';
import PlayIcon from './icons/PlayIcon';
import Image from 'next/image';
import { Modal } from './Modal';
import ReactPlayer from 'react-player';

export const Videos = () => {
	const [estadoModal, setEstadoModal] = useState(false);
	const [modalData, setModalData] = useState(null);
	return (
		<div className="px-4 py-4 md:container mx-auto md:py-10 md:px-20 bg-blanco">
			<h2 className="text-center text-5xl text-amarillo mb-12 font-bold">
				Videos de aniversario
			</h2>

			<div className="grid grid-cols-6 md:grid-cols-3  grid-rows-6 md:grid-rows-4 gap-4 mb-4">
				<div className="col-span-6 row-span-2 relative cursor-pointer md:col-span-2 md:row-span-2 ">
					<div
						onClick={() => {
							setModalData(
								'https://afroperuanos.s3.us-east-2.amazonaws.com/videos/Martin+Alvarado-1.m4v'
							);
							setEstadoModal(true);
						}}>
						<Image
							className="h-full object-cover"
							layout="responsive"
							draggable={false}
							quality={100}
							width={673}
							height={362}
							src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rudy_Shady_png_ff8af3ef4e.png"></Image>
						<PlayIcon
							className={`fill-blanco absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
						/>
						<p
							className={`text-xs md:text-sm text-blanco absolute bottom-0 left-0 p-4`}>
							Conoce la Ciudad universitaria
						</p>
					</div>

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
				<div className="col-span-3 row-span-1 relative cursor-pointer md:col-span-1 md:row-span-1">
					<div
						onClick={() => {
							setModalData(
								'https://afroperuanos.s3.us-east-2.amazonaws.com/videos/Lorry+Salcedo+Mitrani-1.m4v'
							);
							setEstadoModal(true);
						}}>
						<Image
							className="h-full object-cover"
							layout="responsive"
							quality={100}
							width={324}
							height={167}
							draggable={false}
							src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rudy_Shady_png_ff8af3ef4e.png"></Image>
						<PlayIcon
							className={`fill-blanco absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
						/>
						<p
							className={`text-xs md:text-sm text-blanco absolute bottom-0 left-0 p-4`}>
							Saludo del Dr. Ramón García, rector de la UARM
						</p>
					</div>

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
				<div className="col-span-3 row-span-1 relative cursor-pointer md:col-span-1 md:row-span-1">
					<Image
						className="h-full object-cover"
						layout="responsive"
						quality={100}
						width={324}
						height={167}
						draggable={false}
						src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rudy_Shady_png_ff8af3ef4e.png"></Image>
					<PlayIcon
						className={`fill-blanco absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
					/>
					<p
						className={`text-xs md:text-sm text-blanco absolute bottom-0 left-0 p-4`}>
						Saludo del premio nobel Mario Vargas Llosa
					</p>
				</div>
				<div className="col-span-6 row-span-2 relative cursor-pointer md:col-span-1 md:row-span-1">
					<Image
						className="h-full object-cover"
						layout="responsive"
						quality={100}
						width={324}
						height={167}
						draggable={false}
						src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rudy_Shady_png_ff8af3ef4e.png"></Image>
					<PlayIcon
						className={`fill-blanco absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
					/>
					<p
						className={`text-xs md:text-sm text-blanco absolute bottom-0 left-0 p-4`}>
						Saludo del Dr. Ramón García, rector de la UARM
					</p>
				</div>
				<div className="col-span-3 row-span-1 relative cursor-pointer md:col-span-2 md:row-span-2">
					<Image
						className="h-full object-cover"
						layout="responsive"
						quality={100}
						width={673}
						height={362}
						draggable={false}
						src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rudy_Shady_png_ff8af3ef4e.png"></Image>
					<PlayIcon
						className={`fill-blanco absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
					/>
					<p
						className={`text-xs md:text-sm text-blanco absolute bottom-0 left-0 p-4`}>
						Conoce la huaca sanmarquina
					</p>
				</div>
				<div className="col-span-3 row-span-1 relative cursor-pointer md:col-span-1 md:row-span-1">
					<Image
						className="h-full object-cover"
						layout="responsive"
						quality={100}
						width={324}
						height={167}
						draggable={false}
						src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rudy_Shady_png_ff8af3ef4e.png"></Image>
					<PlayIcon
						className={`fill-blanco absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
					/>
					<p
						className={`text-xs md:text-sm text-blanco absolute bottom-0 left-0 p-4`}>
						Saludo de la Dra. Ruth Shady
					</p>
				</div>
			</div>
		</div>
	);
};
