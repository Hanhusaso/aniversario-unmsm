import React, { useEffect, useState, useContext, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Triangulo from './icons/Triangulo';
import personajesIlustresData from '../data/personajesIlustresData';
import { Modal } from './Modal';
import ReactPlayer from 'react-player';
import PersonajesContext from '../contexts/personajesContext';

export const PersonajesIlustres = () => {
	const {
		setPersonajesIlustresRef,
		personajes,
		setPersonajes,
		personajeElegido,
		setPersonajeElegido,
	} = useContext(PersonajesContext);

	const [estadoModal, setEstadoModal] = useState(false);
	const [modalData, setModalData] = useState(null);

	const personajesIlustresRef = useRef(null);

	useEffect(() => {
		setPersonajesIlustresRef(personajesIlustresRef);
	}, [personajesIlustresRef, setPersonajesIlustresRef]);

	// const scrollPersonajes = () => {
	// 	personajesIlustresRef.current.scrollIntoView({
	// 		behavior: 'smooth',
	// 		block: 'start',
	// 	});
	// };

	return (
		<>
			<div
				className="bg-gris"
				id="personajesIlustres"
				ref={personajesIlustresRef}>
<<<<<<< HEAD
				<div className="container mx-auto px-24">
					<div className="pt-16 flex items-start">
						<h1 className="text-amarillo font-adelleBold font-semibold text-5xl mr-16 leading-none -translate-y-2">
							Personajes ilustres
						</h1>
						<p className="pb-16">
							La figura de hombres y mujeres que dejaron su legado
							a futuras generaciones en los diversos campos del
							conocimiento, engalana el afiche del 471°
							aniversario de la Universidad Nacional Mayor de San
							Marcos (UNMSM) que conmemorará el próximo 12 de
							mayo. A continuación, una breve reseña que destaca
							los aportes de un grupo de ilustres sanmarquinos.
						</p>
=======
				<div className="container mx-auto">
					<div className="mx-4 lg:mx-24">
						<div className="pt-11 lg:pt-16 flex flex-col lg:flex-row">
							<h1 className="text-amarillo mb-2 lg:mb-0 font-adelleBold font-semibold text-4xl md:text-5xl mr-16 leading-none translate-y-0 lg:-translate-y-2">
								Personajes ilustres
							</h1>
							<p className="pb-8 md:pb-16">
								La figura de hombres y mujeres que dejaron su
								legado a futuras generaciones en los diversos
								campos del conocimiento, engalana el afiche del
								471° aniversario de la Universidad Nacional
								Mayor de San Marcos (UNMSM) que conmemorará el
								próximo 12 de mayo. A continuación, una breve
								reseña que destaca los aportes de un grupo de
								ilustres sanmarquinos.
							</p>
						</div>
>>>>>>> 089208331c9ba8754be59e0ef427ffc16fc30f60
					</div>
				</div>
			</div>
			<div className="bg-gris hidden md:block">
				<div className="container mx-auto relative">
					<div className="grid grid-cols-10">
						{personajes.map((pers, index) => (
							<div
								onClick={() => {
									setPersonajeElegido(pers);
									setPersonajes(
										personajesIlustresData.map((p) => {
											if (p.id === pers.id) {
												return {
													...p,
													seleccionado: true,
												};
											}
											return p;
										})
									);
								}}
								key={pers.nombres}
								className={`${
									personajes[index].seleccionado &&
									'opacity-50'
								} relative cursor-pointer col-span-1 hover:opacity-50`}
								style={{ left: pers.desplazamiento }}>
								<Image
									alt={pers.nombres}
									src={pers.imagenMiniatura}
									width={230}
									height={260}
									layout="responsive"
									draggable={false}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
<<<<<<< HEAD
			<div className="bg-personajesIlustres bg-no-repeat bg-cover bg-azulDegradado">
				<div className="pt-9 container mx-auto flex flex-row justify-center">
					<div className="w-[29%]">
						<Image
							src={personajeElegido.imagenGrande}
							width={431}
							height={480}
							layout="responsive"
							draggable={false}
							quality={100}
							className="brightness-125"
							alt={personajeElegido.nombres}
						/>
=======
			<div className="px-4 md:px-0 pt-8 md:pt-0 bg-personajesIlustres bg-no-repeat bg-cover bg-azulDegradado">
				<div className="block md:hidden">
					<select
						className="w-full h-14 px-5 py-4 font-lato font-bold"
						defaultValue={2}
						onChange={(e) => {
							setPersonajeElegido(personajes[e.target.value]);
							console.log(e.target.value);
						}}>
						{personajes.map((pers, index) => (
							<option key={pers.nombres} value={index}>
								{pers.nombres + ' ' + pers.apellidos}
							</option>
						))}
					</select>
				</div>
				<div className="pt-9 container mx-auto flex flex-col md:flex-row justify-center">
					<div className="w-full md:w-[29%]">
						<div className="mx-auto w-1/2 md:w-full">
							<Image
								src={personajeElegido.imagenGrande}
								width={431}
								height={480}
								layout="responsive"
								draggable={false}
								quality={100}
								className="brightness-125"
							/>
						</div>
>>>>>>> 089208331c9ba8754be59e0ef427ffc16fc30f60
					</div>
					<div className="w-full md:w-[42%] ml-0 md:ml-8 text-blanco">
						<h1 className="hidden md:block pt-10 text-[1.75rem]">
							{personajeElegido.nombres}
						</h1>
						<h1 className="hidden md:block text-4xl">
							{personajeElegido.apellidos}
						</h1>
						<p className="mt-9 mb-9">
							{personajeElegido.introduccion}
							<Link href={'/' + personajeElegido.slug}>
								<a>
									<span className="text-rojoclaro font-black ml-2 cursor-pointer hover:brightness-200">
										Leer más.
									</span>
								</a>
							</Link>
						</p>
						{personajeElegido.videoSaludo !== '' && (
							<button
								onClick={() => {
									setModalData(
										`${personajeElegido.videoSaludo}`
									);
									setEstadoModal(true);
								}}
								className="flex justify-center items-center bg-rojoclaro py-2 px-3 rounded-lg mt-5">
								<Triangulo className="mr-3" /> Ver saludo
							</button>
						)}
					</div>
				</div>
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
		</>
	);
};
