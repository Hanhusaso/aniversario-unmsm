import React, { useState } from 'react';

import DetalleDerecha from './icons/DetalleDerecha';
import MapIcon from './icons/MapIcon';

import RemembranzaButton from './buttons/RemembranzaButton';
import EnVivoButton from './buttons/EnVivoButton';
import CalendarButton from './buttons/CalendarButton';
import AgendaIcon from './icons/AgendaIcon';
import FlechaAbajo from './icons/FlechaAbajo';

export const Programa = () => {
	const [verCompleto, setVerCompleto] = useState(false);
	return (
		<>
			<div className="bg-azulOscuro">
				<div className="container mx-auto">
					<div className="flex flex-row justify-start items-center h-36">
						<p className="font-bold text-amarillo text-5xl mr-16 -translate-y-2 leading-none">
							Programa
						</p>
						<p className="text-blanco font-semibold">
							Disfruta de todas las actividades que tenemos para
							<br />
							celebrar nuestro 471.° años de fundación.
						</p>
						<DetalleDerecha />
					</div>
				</div>
			</div>

			<div id="dia1" className="bg-gris pt-12 pb-8 text-verdeClaro">
				<div className="container mx-auto bg-blanco py-8 px-20 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
					<div className="grid grid-cols-[130px_auto]">
						<h1 className="col-span-2 mb-5 font-bold text-verdeOscuro flex flex-row">
							<AgendaIcon className="mr-2" />
							Día 1 | Lunes 9 de mayo
						</h1>
						<p className="text-rojo font-semibold text-sm">
							09:00 horas
						</p>
						<div className="text-sm">
							<h1 className="font-semibold text-base text-verdeOscuro">
								Ceremonia de inauguración de las actividades por
								el 471.° aniversario de la fundación de la
								Universidad Nacional Mayor de San Marcos.
							</h1>
							<ul className="list-disc pl-5 mt-3">
								<li className="mb-3">
									Colocación de ofrenda floral al busto del
									fundador Fray Tomás de San Martín
								</li>
								<li className="mb-3">
									Semblanza a cargo del Dr. José F. Palomino
									Manchego
								</li>
								<li className="mb-3">Izamiento de banderas</li>
							</ul>
							<h1 className="font-semibold text-base text-verdeOscuro">
								Discursos:
							</h1>
							<ul className="list-disc pl-5 mt-3">
								<li className="mb-3">
									Dr. Germán Small Arana, presidente de la
									Comisión de Celebraciones Conmemorativas del
									471.° aniversario de la Universidad Nacional
									Mayor de San Marcos.
								</li>
								<li className="mb-3">
									Dra. Jeri Ramón Ruffner, rectora de la
									UNMSM.
								</li>
								<li className="mb-3">
									Desfile de delegaciones de facultades y
									dependencias sanmarquina.
								</li>
							</ul>
							<p className="text-xs flex flex-row font-semibold">
								<MapIcon className="mr-2" /> Plaza Fray Tomás de
								San Martín. Ciudad Universitaria.
							</p>
							<div className="flex flex-row justify-end">
								<RemembranzaButton />
							</div>
							<div className="h-[1px] bg-verdeClaroTransparent mt-7 blur-[2px] mb-11"></div>
						</div>
						<p className="text-rojo font-semibold text-sm">
							16:00 horas
						</p>
						<div className="text-sm">
							<ul className="list-disc pl-5">
								<li className="mb-3 font-semibold text-base text-verdeOscuro">
									Inauguración de la exposición de los
									artistas plásticos Bruno Portuguez y Del
									Sherman Meléndez sobre el Colegio Real de
									San Felipe y San Marcos.
								</li>
								<li className="mb-3 font-semibold text-base text-verdeOscuro">
									Exposición fotográfica a cargo de Mario
									Caldas y Manuel Pantigoso.
								</li>
							</ul>

							<p className="text-xs flex flex-row font-semibold">
								<MapIcon className="mr-2" /> Colegio Real de San
								Felipe y San Marcos. Jr. Andahuaylas 348,
								Cercado de Lima.
							</p>
							<div className="flex flex-row justify-end">
								<EnVivoButton />
							</div>
							<div className="h-[1px] bg-verdeClaroTransparent mt-7 blur-[2px]"></div>
						</div>
						<p className="text-rojo font-semibold text-sm mt-7">
							17:00 horas
						</p>
						<div className="text-sm">
							<h1 className="mb-3 font-semibold text-base text-verdeOscuro mt-7">
								Exposición de retratos “La Universidad como casa
								del saber: religiosos y laicos”, a cargo de
								Augusto del Valle.
							</h1>
							<p className="text-xs flex flex-row font-semibold">
								<MapIcon className="mr-2" /> Centro Cultural de
								San Marcos, Av. Nicolás de Piérola 1222.
							</p>
							<div className="flex flex-row justify-end">
								<CalendarButton />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="dia2" className="bg-gris pb-8 text-verdeClaro">
				<div className="container mx-auto bg-blanco py-8 px-20 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
					<div className="grid grid-cols-[130px_auto]">
						<h1 className="mb-4 col-span-2 font-bold text-verdeOscuro flex flex-row">
							<AgendaIcon className="mr-2" />
							Día 2 | Martes 10 de mayo
						</h1>
						<p className="col-span-2 mb-4 font-semibold">
							Conferencias magistrales
						</p>
						<p className="text-rojo font-semibold text-sm">
							16:00 horas
						</p>
						<div className="text-sm">
							<ul className="list-disc pl-5">
								<li className="mb-3 font-semibold text-base text-verdeOscuro">
									“La Universidad de Salamanca y la
									Universidad de San Marcos: vínculos
									históricos y contemporáneos”, exposición
									virtual a cargo del Dr. Ricardo Rivero
									Ortega, rector de la Universidad de
									Salamanca.
								</li>
								<li className="mb-3 font-semibold text-base text-verdeOscuro">
									“San Marcos en su historia”, a cargo del
									doctor José Ñique de la Puente.
								</li>
								<li className="mb-3 font-semibold text-base text-verdeOscuro">
									“Ideas filosóficas en la historia de San
									Marcos”, a cargo del doctor Raymundo Prado
									Redondez.
								</li>
							</ul>

							<p className="text-xs flex flex-row font-semibold">
								<MapIcon className="mr-2" /> Centro Cultural de
								San Marcos. Av. Nicolás de Piérola 1222.
							</p>
							<div className="flex flex-row justify-end">
								<CalendarButton />
							</div>
							<div className="h-[1px] bg-verdeClaroTransparent mt-7 blur-[2px]"></div>
						</div>
						<p className="text-rojo font-semibold text-sm mt-7">
							14:00 horas
						</p>
						<div className="text-sm">
							<h1 className="mb-3 font-semibold text-base text-verdeOscuro mt-7">
								Campeonato Interáreas de Fútbol 7
							</h1>
							<p className="text-xs flex flex-row font-semibold">
								<MapIcon className="mr-2" />
								Campo auxiliar del Estadio de la UNMSM, Ciudad
								Universitaria.
							</p>
							<div className="flex flex-row justify-end">
								<CalendarButton />
							</div>
						</div>
					</div>
				</div>
			</div>

			{!verCompleto && (
				<div
					className="bg-gris pb-8 text-verdeClaro flex flex-col items-center justify-center cursor-pointer"
					onClick={() => setVerCompleto(!verCompleto)}>
					<p className="text-rojo font-semibold hover:brightness-150">
						Clic aquí para conocer todas las actividades
					</p>
					<FlechaAbajo />
				</div>
			)}

			{verCompleto && (
				<>
					<div id="dia3" className="bg-gris pb-8 text-verdeClaro">
						<div className="container mx-auto bg-blanco py-8 px-20 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
							<div className="grid grid-cols-[130px_auto]">
								<h1 className="mb-4 col-span-2 font-bold text-verdeOscuro flex flex-row">
									<AgendaIcon className="mr-2" />
									Día 3 | Miércoles 11 de mayo
								</h1>
								<p className="text-rojo font-semibold text-sm">
									12:00 horas
								</p>
								<div className="text-sm">
									<h1 className="mb-3 font-semibold text-base text-verdeOscuro">
										Gran Pasacalle Sanmarquino
										Interfacultades
									</h1>

									<p className="text-xs flex flex-row font-semibold">
										<MapIcon className="mr-2" /> Inicio:
										Plaza Fray Tomás de San Martín, Ciudad
										Universitaria.
									</p>
									<div className="flex flex-row justify-end">
										<CalendarButton />
									</div>
									<div className="h-[1px] bg-verdeClaroTransparent mt-7 blur-[2px]"></div>
								</div>
								<p className="text-rojo font-semibold text-sm mt-7">
									14:00 horas
								</p>
								<div className="text-sm">
									<h1 className="mb-3 font-semibold text-base text-verdeOscuro mt-7">
										XXIV Festival de Folklore
										Interfacultades de Música y Danza.
										Promoción del talento artístico en
										diversos géneros.
									</h1>
									<p className="text-xs flex flex-row font-semibold">
										<MapIcon className="mr-2" />
										Plaza Fray Tomás de San Martín, Ciudad
										Universitaria.
									</p>
									<div className="flex flex-row justify-end">
										<CalendarButton />
									</div>
									<div className="h-[1px] bg-verdeClaroTransparent mt-7 blur-[2px]"></div>
								</div>
								<p className="text-rojo font-semibold text-sm mt-7">
									14:00 horas
								</p>
								<div className="text-sm">
									<h1 className="mb-3 font-semibold text-base text-verdeOscuro mt-7">
										Serenata por el 471.° aniversario de la
										UNMSM
									</h1>
									<p className="text-xs flex flex-row font-semibold">
										<MapIcon className="mr-2" />
										Plaza Fray Tomás de San Martín, Ciudad
										Universitaria.
									</p>
									<div className="flex flex-row justify-end">
										<CalendarButton />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="dia4" className="bg-gris pb-8 text-verdeClaro">
						<div className="container mx-auto bg-blanco py-8 px-20 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
							<div className="grid grid-cols-[130px_auto]">
								<h1 className="mb-4 col-span-2 font-bold text-verdeOscuro flex flex-row">
									<AgendaIcon className="mr-2" />
									Día 4 | Miércoles 12 de mayo
								</h1>
								<p className="text-rojo font-semibold text-sm">
									09:00 horas
								</p>
								<div className="text-sm">
									<h1 className="mb-3 font-semibold text-base text-verdeOscuro">
										Colocación de la ofrenda floral a la
										Virgen de la Antigua.
									</h1>

									<p className="text-xs flex flex-row font-semibold">
										<MapIcon className="mr-2" /> Basílica
										Catedral de Lima. Jirón Carabaya,
										Cercado de Lima.
									</p>
									<div className="flex flex-row justify-end">
										<CalendarButton />
									</div>
									<div className="h-[1px] bg-verdeClaroTransparent mt-7 blur-[2px]"></div>
								</div>
								<p className="text-rojo font-semibold text-sm mt-7">
									09:30 horas
								</p>
								<div className="text-sm">
									<h1 className="mb-3 font-semibold text-base text-verdeOscuro mt-7">
										Misa de aniversario a cargo del Prior
										Johan Leuridan Huysen en la Basílica del
										Convento de Santo Domingo.
									</h1>
									<p className="text-xs flex flex-row font-semibold">
										<MapIcon className="mr-2" />
										Convento de Santo Domingo, Cercado de
										Lima.
									</p>
									<div className="flex flex-row justify-end">
										<CalendarButton />
									</div>
									<div className="h-[1px] bg-verdeClaroTransparent mt-7 blur-[2px]"></div>
								</div>
								{/* Evento 4 */}
								<p className="text-rojo font-semibold text-sm mt-7">
									12:00 horas
								</p>
								<div className="text-sm">
									<h1 className="mb-3 font-semibold text-base text-verdeOscuro mt-7">
										Sesión Solemne por el 471.° aniversario
										de la UNMSM
									</h1>
									<p className="text-xs flex flex-row font-semibold">
										<MapIcon className="mr-2" />
										Salón General del Centro Cultural de San
										Marcos. Av. Nicolás de Piérola 1222.
									</p>
									<div className="flex flex-row justify-end">
										<CalendarButton />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="dia5" className="bg-gris pb-8 text-verdeClaro">
						<div className="container mx-auto bg-blanco py-8 px-20 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
							<div className="grid grid-cols-[130px_auto]">
								<h1 className="mb-4 col-span-2 font-bold text-verdeOscuro flex flex-row">
									<AgendaIcon className="mr-2" />
									Día 5 | Viernes 13 de mayo
								</h1>
								<p className="text-rojo font-semibold text-sm">
									09:00 horas
								</p>
								<div className="text-sm">
									<h1 className="mb-3 font-semibold text-base text-verdeOscuro">
										Final y premiación del Campeonato
										Interáreas de Fútbol 7.
									</h1>

									<p className="text-xs flex flex-row font-semibold">
										<MapIcon className="mr-2" /> Campo
										auxiliar del Estadio de la UNMSM, Ciudad
										Universitaria.
									</p>
									<div className="flex flex-row justify-end">
										<CalendarButton />
									</div>
									<div className="h-[1px] bg-verdeClaroTransparent mt-7 blur-[2px]"></div>
								</div>
								<p className="text-rojo font-semibold text-sm mt-7">
									11:00 horas
								</p>
								<div className="text-sm">
									<h1 className="mb-3 font-semibold text-base text-verdeOscuro mt-7">
										Homenaje por trayectoria académica a
										docentes cesantes de las 20 facultades
										de la UNMSM.
									</h1>
									<p className="text-xs flex flex-row font-semibold">
										<MapIcon className="mr-2" />
										Plaza Fray Tomás de San Martín, Ciudad
										Universitaria.
									</p>
									<div className="flex flex-row justify-end">
										<CalendarButton />
									</div>
									<div className="h-[1px] bg-verdeClaroTransparent mt-7 blur-[2px]"></div>
								</div>
								<p className="text-rojo font-semibold text-sm mt-7">
									19:00 horas
								</p>
								<div className="text-sm">
									<h1 className="mb-3 font-semibold text-base text-verdeOscuro mt-7">
										Noche de Gala Sanmarquina.
									</h1>
									<p className="text-xs flex flex-row font-semibold">
										<MapIcon className="mr-2" />
										Auditorio Ella Dunbar Temple, Ciudad
										Universitaria.
									</p>
									<div className="flex flex-row justify-end">
										<CalendarButton />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="dia6" className="bg-gris pb-8 text-verdeClaro">
						<div className="container mx-auto bg-blanco py-8 px-20 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
							<div className="grid grid-cols-[130px_auto]">
								<h1 className="mb-4 col-span-2 font-bold text-verdeOscuro flex flex-row">
									<AgendaIcon className="mr-2" />
									Día 6 | Miércoles 14 de mayo
								</h1>
								<p className="text-rojo font-semibold text-sm">
									09:00 horas
								</p>
								<div className="text-sm">
									<h1 className="mb-3 font-semibold text-base text-verdeOscuro">
										Acción de salud comunitaria de la UNMSM.
									</h1>
									<p className="text-xs flex flex-row font-semibold">
										<MapIcon className="mr-2" /> San Juan de
										Lurigancho
									</p>
									<div className="flex flex-row justify-end">
										<CalendarButton />
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};
