import React, { useState } from 'react';
import PlayIcon from '../icons/PlayIcon';
import Image from 'next/image';
import { Modal } from '../Modal';
import ReactPlayer from 'react-player';

export const Todos = () => {
	const [estadoModal, setEstadoModal] = useState(false);
	const [modalData, setModalData] = useState(null);
	return (
		<>
			<div className="grid grid-cols-3 grid-rows-4 gap-4 mb-4">
				<div className="relative cursor-pointer col-span-2 row-span-2">
					<div
						onClick={() => {
							setModalData(
								'https://afroperuanos.s3.us-east-2.amazonaws.com/videos/Martin+Alvarado-1.m4v'
							);
							setEstadoModal(true);
						}}
					>
						<Image
							className="h-full object-cover"
							layout="responsive"
							draggable={false}
							quality={100}
							width={673}
							height={362}
							src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rudy_Shady_png_ff8af3ef4e.png"
						></Image>
						<PlayIcon
							className={`fill-blanco absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
						/>
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
				<div className="relative cursor-pointer col-span-1 row-span-1">
					<div
						onClick={() => {
							setModalData(
								'https://afroperuanos.s3.us-east-2.amazonaws.com/videos/Lorry+Salcedo+Mitrani-1.m4v'
							);
							setEstadoModal(true);
						}}
					>
						<Image
							className="h-full object-cover"
							layout="responsive"
							quality={100}
							width={324}
							height={167}
							draggable={false}
							src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rudy_Shady_png_ff8af3ef4e.png"
						></Image>
						<PlayIcon
							className={`fill-blanco absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
						/>
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
				<div className="relative cursor-pointer col-span-1 row-span-1">
					<Image
						className="h-full object-cover"
						layout="responsive"
						quality={100}
						width={324}
						height={167}
						draggable={false}
						src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rudy_Shady_png_ff8af3ef4e.png"
					></Image>
					<PlayIcon
						className={`fill-blanco absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
					/>
				</div>
				<div className="relative cursor-pointer col-span-1 row-span-1">
					<Image
						className="h-full object-cover"
						layout="responsive"
						quality={100}
						width={324}
						height={167}
						draggable={false}
						src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rudy_Shady_png_ff8af3ef4e.png"
					></Image>
					<PlayIcon
						className={`fill-blanco absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
					/>
				</div>
				<div className="relative cursor-pointer col-span-2 row-span-2">
					<Image
						className="h-full object-cover"
						layout="responsive"
						quality={100}
						width={673}
						height={362}
						draggable={false}
						src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rudy_Shady_png_ff8af3ef4e.png"
					></Image>
					<PlayIcon
						className={`fill-blanco absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
					/>
				</div>
				<div className="relative cursor-pointer col-span-1 row-span-1">
					<Image
						className="h-full object-cover"
						layout="responsive"
						quality={100}
						width={324}
						height={167}
						draggable={false}
						src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rudy_Shady_png_ff8af3ef4e.png"
					></Image>
					<PlayIcon
						className={`fill-blanco absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
					/>
				</div>
			</div>
		</>
	);
};
