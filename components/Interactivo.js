import React, { useContext } from 'react';
import PersonajesContext from '../contexts/personajeContext';
import Image from 'next/image';
import personajesIlustresData from '../data/personajesIlustresData';

import LineaDivision from './LineaDivision';

export const Interactivo = () => {
	const { scrollPersonajes, personajes, setPersonajes, setPersonajeElegido } =
		useContext(PersonajesContext);

	return (
		<>
			<section className="interactivo relative bg-azulOscuro sm:bg-rojo bg-[url('https://biologia-unmsm.s3.us-east-2.amazonaws.com/fondo_rojo_home_4cf574a57b.png')] bg-[length:100%]">
				<div className="">
					{/* <div className=""> */}
					<div className="z-10 info-page absolute top-12 left-1/2 -translate-x-1/2 text-center text-blanco font-adelleSemiBold">
						<Image
							alt="logo"
							src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/logo_unmsm_landing_aniversario_b3ce276cc7.png"
							width={263}
							height={72}
							draggable={false}
							className="mb-4"
						/>

						<p className="bg-clip-text numero-brillo h-20 font-adelleHeavy font-semibold text-[78px] leading-tight text-transparent">
							471.°
						</p>
						<p className="font-adelleBold text-2xl mb-5">
							Aniversario
						</p>

						<p className="italic text-xl mb-4">
							¡San Marcos es el Perú!
						</p>
						<p className="text-lg">12 de mayo</p>
						<p className="text-lg">1551-2022</p>
					</div>
					<div className="hidden sm:block relative ">
						<div className="-z-10 h-[12vh]"></div>
						<div className="absolute bottom-0 w-full h-2 bg-azulOscuro"></div>
						<div className="absolute bottom-[17vmax] w-full">
							{/* <div className="cont-inicio mx-auto"> */}
							<div className="">
								<div className="flex pt-10 px-10">
									{/* <div className="flex pt-32 px-[5vw]"> */}
									<div className="flex flex-row mr-[2vmax]">
										<div
											onClick={() => {
												setPersonajeElegido(
													personajes[0]
												);
												setPersonajes(
													personajesIlustresData.map(
														(p) => {
															if (
																p.id ===
																personajes[0].id
															) {
																return {
																	...p,
																	seleccionado: true,
																};
															}
															return p;
														}
													)
												);
												scrollPersonajes();
											}}
											className="box-personaje test1 hover:brightness-125">
											<div className="relative bottom-[25.5vmax] left-[2.8vmax]">
												<div className="contain-personaje per-1">
													<Image
														alt="Daniel Alcides Carrión"
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/daniel_acides_31631bc9fb.png"
														width={230}
														height={260}
														draggable={false}
													/>
												</div>
											</div>
										</div>
										<div
											onClick={() => {
												setPersonajeElegido(
													personajes[1]
												);
												setPersonajes(
													personajesIlustresData.map(
														(p) => {
															if (
																p.id ===
																personajes[1].id
															) {
																return {
																	...p,
																	seleccionado: true,
																};
															}
															return p;
														}
													)
												);
												scrollPersonajes();
											}}
											className="box-personaje hover:brightness-125">
											<div className="relative bottom-[19vmax] left-[4vmax]">
												<div className="contain-personaje per-2">
													<Image
														alt="Rosa Alarco"
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rosa_alarco_597e1f76f3.png"
														width={230}
														height={260}
														draggable={false}
													/>
													{/* <img
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rosa_alarco_597e1f76f3.png"
														alt=""
													/> */}
												</div>
											</div>
										</div>
										<div
											onClick={() => {
												setPersonajeElegido(
													personajes[4]
												);
												setPersonajes(
													personajesIlustresData.map(
														(p) => {
															if (
																p.id ===
																personajes[4].id
															) {
																return {
																	...p,
																	seleccionado: true,
																};
															}
															return p;
														}
													)
												);
												scrollPersonajes();
											}}
											className="box-personaje hover:brightness-125">
											<div className="relative bottom-[7.5vmax] left-[2vmax]">
												<div className="contain-personaje per-3">
													<Image
														alt="Jorge Basadre"
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/jorge_basadre_largo_b180404627.png"
														width={230}
														height={388}
														draggable={false}
													/>
													{/* <img
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/jorge_basadre_largo_b180404627.png"
														alt=""
													/> */}
												</div>
											</div>
										</div>
										<div
											onClick={() => {
												setPersonajeElegido(
													personajes[3]
												);
												setPersonajes(
													personajesIlustresData.map(
														(p) => {
															if (
																p.id ===
																personajes[3].id
															) {
																return {
																	...p,
																	seleccionado: true,
																};
															}
															return p;
														}
													)
												);
												scrollPersonajes();
											}}
											className="box-personaje hover:brightness-125">
											<div className="relative bottom-[3.6vmax] left-[1vmax]">
												<div className="contain-personaje per-4">
													<Image
														alt="Ella Dunbar"
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/ella_dunbar_largo_860c346416.png"
														width={230}
														height={276}
														draggable={false}
													/>
													{/* <img
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/ella_dunbar_largo_860c346416.png"
														alt=""
													/> */}
												</div>
											</div>
										</div>
										<div
											onClick={() => {
												setPersonajeElegido(
													personajes[2]
												);
												setPersonajes(
													personajesIlustresData.map(
														(p) => {
															if (
																p.id ===
																personajes[2].id
															) {
																return {
																	...p,
																	seleccionado: true,
																};
															}
															return p;
														}
													)
												);
												scrollPersonajes();
											}}
											className="box-personaje hover:brightness-125">
											<div className="relative right-[1vmax]">
												<div className="contain-personaje per-5">
													<Image
														alt="Mario Vargas LLosa"
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/mario_vargas_llosa_ed9cc25bee.png"
														width={230}
														height={260}
														draggable={false}
													/>
													{/* <img
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/mario_vargas_llosa_ed9cc25bee.png"
														alt=""
													/> */}
												</div>
											</div>
										</div>
									</div>
									<div className="flex flex-row-reverse ml-[2vmax]">
										<div
											onClick={() => {
												setPersonajeElegido(
													personajes[9]
												);
												setPersonajes(
													personajesIlustresData.map(
														(p) => {
															if (
																p.id ===
																personajes[9].id
															) {
																return {
																	...p,
																	seleccionado: true,
																};
															}
															return p;
														}
													)
												);
												scrollPersonajes();
											}}
											className="box-personaje hover:brightness-125">
											<div className="relative bottom-[25.5vmax] right-[3.8vmax]">
												<div className="contain-personaje per-10">
													<Image
														alt="Santiago Antunez de Mayolo"
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/santiago_antunez_mayolo_57b772598a.png"
														width={230}
														height={260}
														draggable={false}
													/>
													{/* <img
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/santiago_antunez_mayolo_57b772598a.png"
														alt=""
													/> */}
												</div>
											</div>
										</div>
										<div
											onClick={() => {
												setPersonajeElegido(
													personajes[8]
												);
												setPersonajes(
													personajesIlustresData.map(
														(p) => {
															if (
																p.id ===
																personajes[8].id
															) {
																return {
																	...p,
																	seleccionado: true,
																};
															}
															return p;
														}
													)
												);
												scrollPersonajes();
											}}
											className="box-personaje hover:brightness-125">
											<div className="relative bottom-[20vmax] right-[4vmax]">
												<div className="contain-personaje per-9">
													<Image
														alt="Julio C. Tello"
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/julio_c_tello_64ea477221.png"
														width={230}
														height={260}
														draggable={false}
													/>
													{/* <img
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/julio_c_tello_64ea477221.png"
														alt=""
													/> */}
												</div>
											</div>
										</div>
										<div
											onClick={() => {
												setPersonajeElegido(
													personajes[5]
												);
												setPersonajes(
													personajesIlustresData.map(
														(p) => {
															if (
																p.id ===
																personajes[5].id
															) {
																return {
																	...p,
																	seleccionado: true,
																};
															}
															return p;
														}
													)
												);
												scrollPersonajes();
											}}
											className="box-personaje hover:brightness-125">
											<div className="relative bottom-[13.5vmax] right-[4vmax]">
												<div className="contain-personaje per-8">
													<Image
														alt="Maria Luisa Aguilar"
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/maria_luisa_aguilar_491cc20598.png"
														width={230}
														height={260}
														draggable={false}
													/>
													{/* <img
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/maria_luisa_aguilar_491cc20598.png"
														alt=""
													/> */}
												</div>
											</div>
										</div>
										<div
											onClick={() => {
												setPersonajeElegido(
													personajes[7]
												);
												setPersonajes(
													personajesIlustresData.map(
														(p) => {
															if (
																p.id ===
																personajes[7].id
															) {
																return {
																	...p,
																	seleccionado: true,
																};
															}
															return p;
														}
													)
												);
												scrollPersonajes();
											}}
											className="box-personaje hover:brightness-125">
											<div className="relative bottom-[6vmax] right-[3.5vmax]">
												<div className="contain-personaje per-7">
													<Image
														alt="Raúl Porras"
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/raul_porras_ea2afebab3.png"
														width={230}
														height={260}
														draggable={false}
													/>
													{/* <img
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/raul_porras_ea2afebab3.png"
														alt=""
													/> */}
												</div>
											</div>
										</div>
										<div
											onClick={() => {
												setPersonajeElegido(
													personajes[6]
												);
												setPersonajes(
													personajesIlustresData.map(
														(p) => {
															if (
																p.id ===
																personajes[6].id
															) {
																return {
																	...p,
																	seleccionado: true,
																};
															}
															return p;
														}
													)
												);
												scrollPersonajes();
											}}
											className="box-personaje hover:brightness-125">
											<div className="relative -bottom-[.2vmax] right-[1.5vmax]">
												<div className="contain-personaje per-6">
													<Image
														alt="Ruth Shady"
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/ruth_shady_30bccf9fbd.png"
														width={230}
														height={260}
														draggable={false}
													/>
													{/* <img
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/ruth_shady_30bccf9fbd.png"
														alt=""
													/> */}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<img
							className="w-[59vw] left-0 edificio-1 z-[1]"
							src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/edificio1_sanfernando_a49c78893c.png"
							alt=""
						/>
						<img
							className="w-[54.8vw] right-0 edificio-2 absolute bottom-0"
							src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/edificio2_3a71837138.png"
							alt=""
						/>
						<div className="sticky bottom-0">
							<div className="absolute bottom-0 bg-azulOscuro w-full h-10">
								<div className="px-10 h-full flex flex-row items-center justify-around text-xs font-lato">
									<div className="nombre-personaje test1">
										Daniel Alcides Carrión
									</div>
									<div className="nombre-personaje">
										Rosa Alarco
									</div>
									<div className="nombre-personaje">
										Jorge Basadre
									</div>
									<div className="nombre-personaje">
										Ella Dunbar Temple
									</div>
									<div className="nombre-personaje">
										Mario Vargas Llosa
									</div>
									<div className="nombre-personaje">
										Ruth Shady
									</div>
									<div className="nombre-personaje">
										Raúl Porras Barrenechea
									</div>
									<div className="nombre-personaje">
										María Luisa Aguilar
									</div>
									<div className="nombre-personaje">
										Julio C. Tello
									</div>
									<div className="nombre-personaje">
										Santiago Antúnez de Mayolo
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="sm:hidden">
						<div className="w-full">
							<Image
								alt="portada"
								width={360}
								height={604}
								src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/landing_aniversario_responsive_b101db2280.png"
								layout="responsive"
								quality={100}
							/>
						</div>
						<div className="bg-azulOscuro text-blanco text-[0.5rem] py-3 px-4">
							<p>
								De izquierda a derecha: Daniel Alcides Carrión,
								Rosa Alarco, Jorge Basadre, Ella Dunbar Temple,
								Mario Vargas Llosa , Ruth Shady, Raúl Porras
								Barrenechea, María Luisa Aguilar, Julio C. Tello
								y Santiago A. de Mayolo
							</p>
							<LineaDivision mt={5} mb={5} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
