import React, { useState } from 'react';
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

export const GaleriaSaludos = () => {
	const [count, setCount] = useState(0);
	// const [referencia, setReferencia] = useState(saludos[0]);
	return (
		<div className="bg-blanco pt-[3.625rem] pb-8">
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-amarillo font-adelleBold font-semibold text-5xl pb-1">
					Galería de Saludos
				</h1>
				<p className="pb-8">
					Saludos de la comunidad sanmarquina <br />y personalidades
					del Perú y el mundo
				</p>
			</div>
			<div className="container mx-auto bg-blanco px-20 relative">
				<Swiper
					// modules={[Navigation]}
					spaceBetween={0}
					slidesPerView={5}
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
										className={`mx-auto relative cursor-pointer ${
											!isActive &&
											'px-[0.5625rem] translate-y-3'
										} ${isActive && 'brightness-105'}`}>
										<Image
											src={saludo.img}
											alt={saludo.nombre}
											// objectFit="cover"
											layout="responsive"
											quality={100}
											width={196}
											height={240}
										/>
										<PlayIcon
											className={`absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-[18px]`}
										/>
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
			</div>
			<div className="flex flex-col items-center justify-center pt-4">
				<ReferenciaIcon />
				<p className="mt-3 text-lg font-semibold">
					{saludos[count].cita}
				</p>
				<p className="mt-3 font-semibold text-sm">
					{saludos[count].nombre}
				</p>
				<p className="mt-1 mb-8 text-xs">{saludos[count].biodata}</p>
			</div>
		</div>
	);
};
