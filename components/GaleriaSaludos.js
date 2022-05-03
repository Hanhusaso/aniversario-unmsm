import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import PlayIcon from './icons/PlayIcon';
import SwiperButtonNext from './swiper/SwiperButtonNext';
import SwiperButtonPrev from './swiper/SwiperButtonPrev';
import ReferenciaIcon from './icons/ReferenciaIcon';
import saludos from '../data/saludos';
import { Modal } from './Modal';
import ReactPlayer from 'react-player';

export const GaleriaSaludos = () => {
	const [count, setCount] = useState(0);
	const [estadoModal, setEstadoModal] = useState(false);
	const [modalData, setModalData] = useState(null);

	const [widthScreen, setWidthScreen] = useState(null);

	useEffect(() => {
		setWidthScreen(window.innerWidth);
	}, []);

	return (
		widthScreen && (
			<div id="galeriaDeSaludos" className="bg-blanco pt-[3.625rem] pb-8">
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-amarillo font-adelleBold font-semibold text-5xl pb-1 px-2 text-center">
						Galería de Saludos
					</h1>
					<p className="pb-8">
						Saludos de la comunidad sanmarquina <br />y
						personalidades del Perú y el mundo
					</p>
				</div>
				<div className="container mx-auto bg-blanco px-20 relative">
					<Swiper
						// modules={[Navigation]}
						spaceBetween={0}
						slidesPerView={widthScreen < 460 ? 1 : 5}
						centeredSlides={true}
						loop={true}
						// loopFillGroupWithBlank={true}
						// navigation
					>
						<SwiperButtonPrev
							setCount={setCount}
							max={saludos.length - 1}
						/>
						{saludos.map((saludo) => {
							return (
								<SwiperSlide key={saludo.id}>
									{({ isActive }) => (
										<div
											className="relative cursor-pointer"
											onClick={() => {
												setModalData(`${saludo.video}`);
												setEstadoModal(true);
											}}>
											<div
												className={`mx-auto relative cursor-pointer ${
													!isActive &&
													'px-[0.5625rem] translate-y-3 brightness-[0.5]'
												} ${
													isActive && 'brightness-105'
												}`}>
												<Image
													src={saludo.img}
													alt={saludo.nombre}
													// objectFit="cover"
													layout="responsive"
													quality={100}
													width={196}
													height={240}
													className="w-full h-full"
												/>
											</div>
											<div className="font-medium absolute top-1/4 translate-y-5 text-center text-blanco w-full px-10">
												<div className="flex justify-center w-full">
													<PlayIcon
														className={` fill-blanco`}
													/>
												</div>
												{!isActive && (
													<div className="line-clamp-4">
														<p className="mt-2">
															{saludo.nombre}
														</p>
														<p className="text-xs">
															{saludo.biodata}
														</p>
													</div>
												)}
											</div>
										</div>
									)}
								</SwiperSlide>
							);
						})}
						<SwiperButtonNext
							setCount={setCount}
							max={saludos.length - 1}
						/>
					</Swiper>
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
				<div className="flex flex-col items-center justify-center text-center pt-4 px-6 md:px-48">
					<ReferenciaIcon />
					<p className="mt-3 text-lg font-semibold">
						{saludos[count].cita}
					</p>
					<p className="mt-3 font-semibold text-sm">
						{saludos[count].nombre}
					</p>
					<p className="mt-1 mb-8 text-xs">
						{saludos[count].biodata}
					</p>
				</div>
			</div>
		)
	);
};
