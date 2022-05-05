import React, { useState } from 'react';
import PlayIcon from './icons/PlayIcon';
import Image from 'next/image';
import { Modal } from './Modal';

export const Videos = () => {
	const [estadoModal, setEstadoModal] = useState(false);
	const [modalData, setModalData] = useState(null);
	return (
		<div className="bg-blanco">
			<div className="px-4 py-4 md:container mx-auto md:py-10 md:px-20">
				<h2 className="text-center text-5xl text-amarillo mb-12 font-bold">
					Videos de aniversario
				</h2>

				<div className="grid grid-cols-2 md:grid-cols-3  grid-rows-2 md:grid-rows-2 gap-4 mb-4">
					<div className="col-span-2 row-span-2 relative cursor-pointer md:col-span-2 md:row-span-2 ">
						<div
							onClick={() => {
								setModalData(
									'https://www.youtube.com/embed/1cXpVlqm99c'
								);
								setEstadoModal(true);
							}}>
							<Image
								alt=""
								className="h-full object-cover"
								layout="responsive"
								draggable={false}
								quality={100}
								width={673}
								height={362}
								src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/nuestra_universidad_videos_aniversario_df7b9b4a73.png?updated_at=2022-05-04T19:54:48.222Z"></Image>
							<PlayIcon
								className={`fill-blanco absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
							/>
							<p
								className={`text-xs md:text-sm text-blanco absolute bottom-0 left-0 p-4`}>
								¡Nuestra universidad, la universidad de todas
								las sangres celebra 471 años!
							</p>
						</div>
					</div>
					<div className="col-span-1 row-span-1 relative cursor-pointer md:col-span-1 md:row-span-1">
						<div
							onClick={() => {
								setModalData(
									'https://www.youtube.com/embed/Hmf_5-jYdR8'
								);
								setEstadoModal(true);
							}}>
							<Image
								alt=""
								className="h-full object-cover"
								layout="responsive"
								quality={100}
								width={324}
								height={167}
								draggable={false}
								src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/historia_fray_san_martin_videos_aniversario_d7da7030e2.png?updated_at=2022-05-04T19:41:29.745Z"></Image>
							<PlayIcon
								className={`fill-blanco absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
							/>
							<p
								className={`text-xs md:text-sm text-blanco absolute bottom-0 left-0 p-4`}>
								La historia detrás de la estatua de Fray Tomás
								de San Martin
							</p>
						</div>
					</div>
					<div className="col-span-1 row-span-1 relative cursor-pointer md:col-span-1 md:row-span-1">
						<div
							onClick={() => {
								setModalData(
									'https://www.youtube.com/embed/cC66g7rC8yc'
								);
								setEstadoModal(true);
							}}>
							<Image
								alt=""
								className="h-full object-cover"
								layout="responsive"
								quality={100}
								width={324}
								height={167}
								draggable={false}
								src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/legado_plateria_san_marcos_videos_aniversario_b9771aaebd.png?updated_at=2022-05-04T19:43:37.481Z"></Image>
							<PlayIcon
								className={`fill-blanco absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
							/>
							<p
								className={`text-xs md:text-sm text-blanco absolute bottom-0 left-0 p-4`}>
								Legado en Platería de San Marcos ¿Dónde se
								encuentran y quien las custodia?
							</p>
						</div>
					</div>
				</div>
				<Modal estado={estadoModal} setEstado={setEstadoModal}>
					{modalData &&
						(estadoModal === true ? (
							<iframe
								width="100%"
								height="480"
								src={modalData}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen></iframe>
						) : (
							<></>
						))}
				</Modal>
			</div>
		</div>
	);
};
