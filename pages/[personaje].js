import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import AdornoDesarrolloPersonaje from '../components/icons/AdornoDesarrolloPersonaje';
import RegresarIcon from '../components/icons/RegresarIcon';
import SwiperButtonNext from '../components/swiper/SwiperButtonNext';
import SwiperButtonPrev from '../components/swiper/SwiperButtonPrev';
import personajesIlustresData from '../data/personajesIlustresData';
import saludos from '../data/saludos';
import PlayIcon from '../components/icons/PlayIcon';

const Personaje = () => {
	const router = useRouter();
	const [personaje, setPersonaje] = useState(null);
	useEffect(() => {
		if (router.isReady) {
			personajesIlustresData.find((p) => {
				if (p.slug === router.query.personaje) {
					setPersonaje(p);
				}
			});
		}
	}, [router.isReady, router.query.personaje]);
	const [count, setCount] = useState(0);
	const [estadoModal, setEstadoModal] = useState(false);
	const [modalData, setModalData] = useState(null);

	const [widthScreen, setWidthScreen] = useState(null);

	useEffect(() => {
		setWidthScreen(window.innerWidth);
	}, []);

	return (
		personaje && (
			<div className="text-blanco bg-azulOscuro font-lato pb-24 lg:pb-48">
				<div className="container mx-auto px-5 lg:px-20 pt-20 relative">
					<div className="flex flex-col lg:flex-row lg:items-start">
						<div className="basis-1/2 lg:pr-14 mb-5 lg:mb-0">
							<div className="relative flex justify-between items-end mb-8">
								<div className="font-bold">
									<h1 className="text-2xl">
										{personaje.nombres}
									</h1>
									<div className=" text-4xl">
										<h1 className="mr-2">
											{personaje.apellidos}
										</h1>
									</div>
								</div>
								<div className="absolute right-0 top-2 lg:static lg:mb-1">
									<AdornoDesarrolloPersonaje />
								</div>
							</div>
							<div
								dangerouslySetInnerHTML={{
									__html: personaje.contenido,
								}}
							/>
						</div>
						<div className="basis-1/2 lg:px-14">
							<div className="relative">
								<Image
									alt={personaje.nombres}
									src={personaje.imgContenido}
									width={630}
									height={910}
									layout="responsive"
									draggable={false}
									priority
								/>
								<div
									className=" absolute bottom-0 inset-x-0 h-1/4"
									style={{
										background:
											'linear-gradient(180deg, rgba(25, 29, 41, 0) 0%, rgba(25, 29, 41, 0.185825) 14.54%, rgba(25, 29, 41, 0.354756) 27.76%, rgba(25, 29, 41, 0.59865) 53.54%, rgba(25, 29, 41, 0.880677) 77.99%, #191D29 100%)',
									}}></div>
								<p className="absolute bottom-5 left-6 right-6 text-xs">
									Fuente:{' '}
									<span>{personaje.fuenteImagen}</span>
								</p>
							</div>
						</div>
					</div>
					<div className="cursor-pointer">
						<Link href="/#personajesIlustres">
							<a>
								<RegresarIcon className="absolute top-10 lg:top-12 left-5 lg:left-0" />
							</a>
						</Link>
					</div>
				</div>
				<div className="container mx-auto px-20 relative mt-8">
					<p className="text-3xl font-semibold">Archivos inéditos</p>
					<Swiper
						spaceBetween={17}
						slidesPerView={widthScreen < 460 ? 1 : 4}
						// centeredSlides={true}
						loop={true}
						allowTouchMove={false}>
						<SwiperButtonPrev
							setCount={setCount}
							max={saludos.length - 1}
						/>
						{personaje.imagenesIndeditas.map((imagen) => {
							return (
								<SwiperSlide key={imagen.titulo}>
									<div
										className={`relative cursor-pointer`}
										onMouseEnter={() => {
											setTimeout(() => {
												setPersonaje({
													...personaje,
													imagenesIndeditas:
														personaje.imagenesIndeditas.map(
															(img) => {
																if (
																	img.titulo ===
																	imagen.titulo
																) {
																	return {
																		...img,
																		visible: true,
																	};
																}
																return img;
															}
														),
												});
											}, 200);
										}}
										onMouseLeave={() => {
											setPersonaje({
												...personaje,
												imagenesIndeditas:
													personaje.imagenesIndeditas.map(
														(img) => {
															if (
																img.titulo ===
																imagen.titulo
															) {
																return {
																	...img,
																	visible: false,
																};
															}
															return img;
														}
													),
											});
										}}
										// onClick={() => {
										// 	setModalData(`${saludo.video}`);
										// 	setEstadoModal(true);
										// }}
									>
										<div
											className={`mx-auto relative cursor-pointer h-[23rem]
													px-[0.5625rem] translate-y-3 ${imagen.visible && 'opacity-30'}
												`}>
											<Image
												alt={imagen.titulo}
												src={imagen.url}
												objectFit="cover"
												layout="fill"
												// layout="responsive"
												quality={100}
												// width={2336}
												// height={1616}
												className="w-full h-full"
											/>
										</div>
										{imagen.visible && (
											<div className="font-medium absolute top-1/4 translate-y-5 text-center text-blanco w-full px-10">
												<div className="">
													<p className="text-sm">
														{imagen.titulo}
													</p>
													<p className="mt-3 text-xs line-clamp-3">
														Fuente:&nbsp;
														{imagen.fuente}
													</p>
													<p className="mt-3 text-xs">
														Compilador:&nbsp;
														{imagen.compilador}
													</p>
												</div>
											</div>
										)}
									</div>
								</SwiperSlide>
							);
						})}
						<SwiperButtonNext
							setCount={setCount}
							max={saludos.length - 1}
						/>
					</Swiper>
				</div>
			</div>
		)
	);
};

export default Personaje;
