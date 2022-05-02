import React, { useState } from 'react';

import DetalleDerecha from './icons/DetalleDerecha';
import MapIcon from './icons/MapIcon';

import RemembranzaButton from './buttons/RemembranzaButton';
import EnVivoButton from './buttons/EnVivoButton';
import CalendarButton from './buttons/CalendarButton';
import AgendaIcon from './icons/AgendaIcon';
import FlechaAbajo from './icons/FlechaAbajo';
import LineaDivision from './LineaDivision';
import HorarioPrograma from './HorarioPrograma';

export const Programa = () => {
	const [verCompleto, setVerCompleto] = useState(false);
	return (
		<>
			<div className="bg-azulOscuro">
				<div className="container mx-auto">
					<div className="flex flex-row justify-start items-center h-36">
						<p className="font-adelleBold font-semibold text-amarillo text-5xl mr-16 -translate-y-1">
							Programa
						</p>
						<p className="text-blanco font-semibold text-xl">
							Disfruta de todas las actividades que tenemos para
							<br />
							celebrar nuestro 471.° años de fundación.
						</p>
						<DetalleDerecha />
					</div>
				</div>
			</div>

			<div className="bg-gris">
				<div className="container mx-auto">
					<div
						id="dia1"
						className="bg-gris pt-12 pb-8 text-verdeClaro"
					>
						<div className="mx-5 md:mx-0 bg-blanco py-8 px-6 md:px-20 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
							<div className="grid grid-cols-[130px_auto]">
								<h1 className="col-span-2 mb-6 flex items-center flex-row text-grisOscuroTitulos font-bold text-xl">
									<AgendaIcon className="mr-2" />
									Día 1 | Lunes 9 de mayo
								</h1>
								<HorarioPrograma className="col-span-2 md:col-span-1">
									09:00 horas
								</HorarioPrograma>
								<div className="col-span-2 md:col-span-1 text-sm">
									<h1 className="font-semibold text-base text-verdeOscuro">
										Ceremonia de inauguración de las
										actividades por el 471.° aniversario de
										la fundación de la Universidad Nacional
										Mayor de San Marcos.
									</h1>
									<ul className="list-disc pl-4 mt-3 font-adelleSemiBold text-base">
										<li className="mb-3">
											Colocación de ofrenda floral al
											busto del fundador Fray Tomás de San
											Martín
										</li>
										<li className="mb-3">
											Semblanza a cargo del Dr. José F.
											Palomino Manchego
										</li>
										<li className="mb-3">
											Izamiento de banderas
										</li>
									</ul>
									<h1 className="font-semibold text-base text-verdeOscuro">
										Discursos:
									</h1>
									<ul className="list-disc pl-4 mt-3 font-adelleSemiBold text-base">
										<li className="mb-3">
											Dr. Germán Small Arana, presidente
											de la Comisión de Celebraciones
											Conmemorativas del 471.° aniversario
											de la Universidad Nacional Mayor de
											San Marcos.
										</li>
										<li className="mb-3">
											Dra. Jeri Ramón Ruffner, rectora de
											la UNMSM.
										</li>
										<li className="mb-3">
											Desfile de delegaciones de
											facultades y dependencias
											sanmarquina.
										</li>
									</ul>
									<p className="text-xs flex flex-row font-semibold">
										<MapIcon className="mr-2" /> Plaza Fray
										Tomás de San Martín. Ciudad
										Universitaria.
									</p>
									<div className="flex flex-row justify-start">
										<RemembranzaButton />
									</div>
									<LineaDivision />
								</div>
								<HorarioPrograma className="col-span-2 md:col-span-1">
									16:00 horas
								</HorarioPrograma>
								<div className="col-span-2 md:col-span-1 text-sm">
									<ul className="list-disc pl-4">
										<li className="mb-3 font-semibold text-base text-grisOscuroTitulos">
											Inauguración de la exposición de los
											artistas plásticos Bruno Portuguez y
											Del Sherman Meléndez sobre el
											Colegio Real de San Felipe y San
											Marcos.
										</li>
										<li className="mb-3 font-semibold text-base text-verdeOscuro">
											Exposición fotográfica a cargo de
											Mario Caldas y Manuel Pantigoso.
										</li>
									</ul>
									<p className="text-xs flex flex-row font-semibold">
										<MapIcon className="mr-2" /> Colegio
										Real de San Felipe y San Marcos. Jr.
										Andahuaylas 348, Cercado de Lima.
									</p>
									<div className="flex flex-row justify-start ">
										<EnVivoButton />
									</div>
									<LineaDivision />
								</div>
								<HorarioPrograma className="col-span-2 md:col-span-1">
									17:00 horas
								</HorarioPrograma>
								<div className="col-span-2 md:col-span-1 text-sm">
									<h1 className="mb-3 font-semibold text-base text-verdeOscuro">
										Exposición de retratos “La Universidad
										como casa del saber: religiosos y
										laicos”, a cargo de Augusto del Valle.
									</h1>
									<p className="text-xs flex flex-row font-semibold">
										<MapIcon className="mr-2" /> Centro
										Cultural de San Marcos, Av. Nicolás de
										Piérola 1222.
									</p>
									<div className="flex flex-row justify-start ">
										<CalendarButton />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div id="dia2" className="bg-gris pb-8 text-verdeClaro">
						<div className="mx-5 md:mx-0 bg-blanco py-8 px-6 md:px-20 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
							<div className="grid grid-cols-[130px_auto]">
								<h1 className="col-span-2 mb-6 flex items-center flex-row text-grisOscuroTitulos font-bold text-xl">
									<AgendaIcon className="mr-2" />
									Día 2 | Martes 10 de mayo
								</h1>
								<p className="col-span-2 mb-4 font-semibold">
									Conferencias magistrales
								</p>
								<HorarioPrograma className="col-span-2 md:col-span-1">
									16:00 horas
								</HorarioPrograma>
								<div className="col-span-2 md:col-span-1 text-sm">
									<ul className="list-disc pl-4">
										<li className="mb-3 font-semibold text-base text-verdeOscuro">
											“La Universidad de Salamanca y la
											Universidad de San Marcos: vínculos
											históricos y contemporáneos”,
											exposición virtual a cargo del Dr.
											Ricardo Rivero Ortega, rector de la
											Universidad de Salamanca.
										</li>
										<li className="mb-3 font-semibold text-base text-verdeOscuro">
											“San Marcos en su historia”, a cargo
											del doctor José Ñique de la Puente.
										</li>
										<li className="mb-3 font-semibold text-base text-verdeOscuro">
											“Ideas filosóficas en la historia de
											San Marcos”, a cargo del doctor
											Raymundo Prado Redondez.
										</li>
									</ul>

									<p className="text-xs flex flex-row font-semibold">
										<MapIcon className="mr-2" /> Centro
										Cultural de San Marcos. Av. Nicolás de
										Piérola 1222.
									</p>
									<div className="flex flex-row justify-start ">
										<CalendarButton />
									</div>
									<LineaDivision />
								</div>
								<HorarioPrograma className="col-span-2 md:col-span-1">
									14:00 horas
								</HorarioPrograma>
								<div className="col-span-2 md:col-span-1 text-sm">
									<h1 className="mb-3 font-semibold text-base text-verdeOscuro">
										Campeonato Interáreas de Fútbol 7
									</h1>
									<p className="text-xs flex flex-row font-semibold">
										<MapIcon className="mr-2" />
										Campo auxiliar del Estadio de la UNMSM,
										Ciudad Universitaria.
									</p>
									<div className="flex flex-row justify-start ">
										<CalendarButton />
									</div>
								</div>
							</div>
						</div>
					</div>

					{!verCompleto && (
						<div
							className="bg-gris pb-8 text-verdeClaro flex flex-col items-center justify-center cursor-pointer"
							onClick={() => setVerCompleto(!verCompleto)}
						>
							<p className="text-rojo font-semibold hover:brightness-150">
								Clic aquí para conocer todas las actividades
							</p>
							<FlechaAbajo />
						</div>
					)}

					{verCompleto && (
						<>
							<div
								id="dia3"
								className="bg-gris pb-8 text-verdeClaro"
							>
								<div className="mx-5 md:mx-0 bg-blanco py-8 px-6 md:px-20 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
									<div className="grid grid-cols-[130px_auto]">
										<h1 className="col-span-2 mb-6 flex items-center flex-row text-grisOscuroTitulos font-bold text-xl">
											<AgendaIcon className="mr-2" />
											Día 3 | Miércoles 11 de mayo
										</h1>
										<HorarioPrograma className="col-span-2 md:col-span-1">
											12:00 horas
										</HorarioPrograma>
										<div className="col-span-2 md:col-span-1 text-sm">
											<h1 className="mb-3 font-semibold text-base text-verdeOscuro">
												Gran Pasacalle Sanmarquino
												Interfacultades
											</h1>

											<p className="text-xs flex flex-row font-semibold">
												<MapIcon className="mr-2" />{' '}
												Inicio: Plaza Fray Tomás de San
												Martín, Ciudad Universitaria.
											</p>
											<div className="flex flex-row justify-start ">
												<CalendarButton />
											</div>
											<LineaDivision />
										</div>
										<HorarioPrograma className="col-span-2 md:col-span-1">
											14:00 horas
										</HorarioPrograma>
										<div className="col-span-2 md:col-span-1 text-sm">
											<h1 className="mb-3 font-semibold text-base text-verdeOscuro ">
												XXIV Festival de Folklore
												Interfacultades de Música y
												Danza. Promoción del talento
												artístico en diversos géneros.
											</h1>
											<p className="text-xs flex flex-row font-semibold">
												<MapIcon className="mr-2" />
												Plaza Fray Tomás de San Martín,
												Ciudad Universitaria.
											</p>
											<div className="flex flex-row justify-start ">
												<CalendarButton />
											</div>
											<LineaDivision />
										</div>
										<HorarioPrograma className="col-span-2 md:col-span-1">
											14:00 horas
										</HorarioPrograma>
										<div className="col-span-2 md:col-span-1 text-sm">
											<h1 className="mb-3 font-semibold text-base text-verdeOscuro ">
												Serenata por el 471.°
												aniversario de la UNMSM
											</h1>
											<p className="text-xs flex flex-row font-semibold">
												<MapIcon className="mr-2" />
												Plaza Fray Tomás de San Martín,
												Ciudad Universitaria.
											</p>
											<div className="flex flex-row justify-start ">
												<CalendarButton />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								id="dia4"
								className="bg-gris pb-8 text-verdeClaro"
							>
								<div className="mx-5 md:mx-0 bg-blanco py-8 px-6 md:px-20 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
									<div className="grid grid-cols-[130px_auto]">
										<h1 className="col-span-2 mb-6 flex items-center flex-row text-grisOscuroTitulos font-bold text-xl">
											<AgendaIcon className="mr-2" />
											Día 4 | Miércoles 12 de mayo
										</h1>
										<HorarioPrograma className="col-span-2 md:col-span-1">
											09:00 horas
										</HorarioPrograma>
										<div className="col-span-2 md:col-span-1 text-sm">
											<h1 className="mb-3 font-semibold text-base text-verdeOscuro">
												Colocación de la ofrenda floral
												a la Virgen de la Antigua.
											</h1>

											<p className="text-xs flex flex-row font-semibold">
												<MapIcon className="mr-2" />{' '}
												Basílica Catedral de Lima. Jirón
												Carabaya, Cercado de Lima.
											</p>
											<div className="flex flex-row justify-start ">
												<CalendarButton />
											</div>
											<LineaDivision />
										</div>
										<HorarioPrograma className="col-span-2 md:col-span-1">
											09:30 horas
										</HorarioPrograma>
										<div className="col-span-2 md:col-span-1 text-sm">
											<h1 className="mb-3 font-semibold text-base text-verdeOscuro ">
												Misa de aniversario a cargo del
												Prior Johan Leuridan Huysen en
												la Basílica del Convento de
												Santo Domingo.
											</h1>
											<p className="text-xs flex flex-row font-semibold">
												<MapIcon className="mr-2" />
												Convento de Santo Domingo,
												Cercado de Lima.
											</p>
											<div className="flex flex-row justify-start ">
												<CalendarButton />
											</div>
											<LineaDivision />
										</div>
										{/* Evento 4 */}
										<HorarioPrograma className="col-span-2 md:col-span-1">
											12:00 horas
										</HorarioPrograma>
										<div className="col-span-2 md:col-span-1 text-sm">
											<h1 className="mb-3 font-semibold text-base text-verdeOscuro ">
												Sesión Solemne por el 471.°
												aniversario de la UNMSM
											</h1>
											<p className="text-xs flex flex-row font-semibold">
												<MapIcon className="mr-2" />
												Salón General del Centro
												Cultural de San Marcos. Av.
												Nicolás de Piérola 1222.
											</p>
											<div className="flex flex-row justify-start ">
												<CalendarButton />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								id="dia5"
								className="bg-gris pb-8 text-verdeClaro"
							>
								<div className="mx-5 md:mx-0 bg-blanco py-8 px-6 md:px-20 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
									<div className="grid grid-cols-[130px_auto]">
										<h1 className="col-span-2 mb-6 flex items-center flex-row text-grisOscuroTitulos font-bold text-xl">
											<AgendaIcon className="mr-2" />
											Día 5 | Viernes 13 de mayo
										</h1>
										<HorarioPrograma className="col-span-2 md:col-span-1">
											09:00 horas
										</HorarioPrograma>
										<div className="col-span-2 md:col-span-1 text-sm">
											<h1 className="mb-3 font-semibold text-base text-verdeOscuro">
												Final y premiación del
												Campeonato Interáreas de Fútbol
												7.
											</h1>

											<p className="text-xs flex flex-row font-semibold">
												<MapIcon className="mr-2" />{' '}
												Campo auxiliar del Estadio de la
												UNMSM, Ciudad Universitaria.
											</p>
											<div className="flex flex-row justify-start ">
												<CalendarButton />
											</div>
											<LineaDivision />
										</div>
										<HorarioPrograma className="col-span-2 md:col-span-1">
											11:00 horas
										</HorarioPrograma>
										<div className="col-span-2 md:col-span-1 text-sm">
											<h1 className="mb-3 font-semibold text-base text-verdeOscuro ">
												Homenaje por trayectoria
												académica a docentes cesantes de
												las 20 facultades de la UNMSM.
											</h1>
											<p className="text-xs flex flex-row font-semibold">
												<MapIcon className="mr-2" />
												Plaza Fray Tomás de San Martín,
												Ciudad Universitaria.
											</p>
											<div className="flex flex-row justify-start ">
												<CalendarButton />
											</div>
											<LineaDivision />
										</div>
										<HorarioPrograma className="col-span-2 md:col-span-1">
											19:00 horas
										</HorarioPrograma>
										<div className="col-span-2 md:col-span-1 text-sm">
											<h1 className="mb-3 font-semibold text-base text-verdeOscuro ">
												Noche de Gala Sanmarquina.
											</h1>
											<p className="text-xs flex flex-row font-semibold">
												<MapIcon className="mr-2" />
												Auditorio Ella Dunbar Temple,
												Ciudad Universitaria.
											</p>
											<div className="flex flex-row justify-start ">
												<CalendarButton />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								id="dia6"
								className="bg-gris pb-8 text-verdeClaro"
							>
								<div className="mx-5 md:mx-0 bg-blanco py-8 px-6 md:px-20 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
									<div className="grid grid-cols-[130px_auto]">
										<h1 className="col-span-2 mb-6 flex items-center flex-row text-grisOscuroTitulos font-bold text-xl">
											<AgendaIcon className="mr-2" />
											Día 6 | Miércoles 14 de mayo
										</h1>
										<HorarioPrograma className="col-span-2 md:col-span-1">
											09:00 horas
										</HorarioPrograma>
										<div className="col-span-2 md:col-span-1 text-sm">
											<h1 className="mb-3 font-semibold text-base text-verdeOscuro">
												Acción de salud comunitaria de
												la UNMSM.
											</h1>
											<p className="text-xs flex flex-row font-semibold">
												<MapIcon className="mr-2" /> San
												Juan de Lurigancho
											</p>
											<div className="flex flex-row justify-start ">
												<CalendarButton />
											</div>
										</div>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};
