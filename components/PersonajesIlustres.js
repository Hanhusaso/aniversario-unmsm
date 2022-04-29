import React, { useState } from 'react';
import Image from 'next/image';
import Triangulo from './icons/Triangulo';
import personajesIlustresData from '../data/personajesIlustresData';

export const PersonajesIlustres = () => {
	const [personajeElegido, setPersonajeElegido] = useState(
		personajesIlustresData[2]
	);
	const [personajes, setPersonajes] = useState(
		personajesIlustresData.map((p) => {
			if (p.id === 2) {
				return {
					...p,
					seleccionado: true,
				};
			}
			return p;
		})
	);
	return (
		<>
			<div className="bg-gris">
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
					</div>
				</div>
			</div>
			<div className="bg-gris">
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
								} relative cursor-pointer col-span-1 hover:opacity-50 ${
									pers.desplazamiento
								}`}>
								<Image
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
			<div className="bg-personajesIlustres bg-no-repeat bg-cover bg-azulDegradado">
				<div className="pt-9 container mx-auto flex flex-row justify-center">
					<div className="w-[29%]">
						<Image
							src={personajeElegido.imagenGrande}
							width={230}
							height={260}
							layout="responsive"
							draggable={false}
							quality={100}
							className="brightness-125"
						/>
					</div>
					<div className="w-[42%] ml-8 text-blanco">
						<h1 className="pt-10 text-[1.75rem]">
							{personajeElegido.nombres}
						</h1>
						<h1 className="text-4xl">
							{personajeElegido.apellidos}
						</h1>
						<p className="mt-9">
							{personajeElegido.introduccion}
							<span className="text-rojoclaro font-black ml-2 cursor-pointer">
								Leer más.
							</span>
						</p>
						<button className="flex justify-center items-center bg-rojoclaro py-2 px-3 rounded-lg mt-5">
							<Triangulo className="mr-3" /> Ver saludo
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
