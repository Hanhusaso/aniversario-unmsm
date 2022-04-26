import React from 'react';
import CalendarioIcon from './icons/CalendarioIcon';
import DetalleDerecha from './icons/DetalleDerecha';
import LineIcon from './icons/LineIcon';
import MapIcon from './icons/MapIcon';
import RemembranzaIcon from './icons/RemembranzaIcon';

export const Programa = () => {
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
			<div className="bg-gris pt-12 pb-12 text-verdeClaro">
				<div className="container mx-auto bg-blanco py-8 px-20 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
					<div className="grid grid-cols-[130px_auto]">
						{/* Primer evento */}
						<h1 className="col-span-2 mb-5 font-semibold text-verdeOscuro flex flex-row">
							<CalendarioIcon className="mr-2" />
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
							<ul className="list-disc list-inside mt-3">
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
							<ul className="list-disc list-inside mt-3">
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
								<button className="text-xs text-rojo shadow-md px-4 py-1 rounded-lg font-semibold flex items-center">
									<RemembranzaIcon className="mr-1" />
									Ver remembranza
								</button>
							</div>
							<div className="h-[1px] bg-verdeClaroTransparent mt-7 blur-[2px] mb-11"></div>
						</div>
						{/* Primer evento */}
						<h1 className="col-span-2 mb-5 font-semibold text-verdeOscuro flex flex-row">
							<CalendarioIcon className="mr-2" />
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
							<ul className="list-disc list-inside mt-3">
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
							<ul className="list-disc list-inside mt-3">
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
								<button className="text-xs text-rojo shadow-md px-4 py-1 rounded-lg font-semibold flex items-center">
									<RemembranzaIcon className="mr-1" />
									Ver remembranza
								</button>
							</div>
							<div className="h-[1px] bg-verdeClaroTransparent mt-7 blur-[2px]"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
