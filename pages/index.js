import Head from 'next/head';
import Image from 'next/image';
import { Interactivo } from '../components/Interactivo';
import { Programa } from '../components/Programa';
import { GaleriaSaludos } from '../components/GaleriaSaludos';
import { PersonajesIlustres } from '../components/PersonajesIlustres';
import { Videos } from '../components/Videos';

export default function Home() {
	return (
		<main className="font-lato">
			<Interactivo />
			{/* <Programa />
			<GaleriaSaludos />
			<PersonajesIlustres />
			<Videos />
			<footer className="bg-rojo bg-cover bg-[url('https://biologia-unmsm.s3.us-east-2.amazonaws.com/fondo_rojo_home_4cf574a57b.png')]">
				<div className="container mx-auto py-20 px-20 ">
					<div className="text-center text-blanco mb-8">
						<p className="font-bold">Dra. Jeri Ramón Ruffner</p>
						<p>Rectora</p>
					</div>
					<div className="text-center text-blanco mb-8">
						<p className="font-bold">Dr. Carlos Cabrera Carranza</p>
						<p>Vicerrector Académico de Pregrado</p>
					</div>
					<div className="text-center text-blanco mb-8">
						<p className="font-bold">Dr. José Niño Montero</p>
						<p>Vicerrector de Investigación y Posgrado</p>
					</div>
					<div className="text-center text-blanco mb-8">
						<p className="font-bold">
							Comisión de Celebraciones Conmemorativas del 471.°
							aniversario de la Universidad Nacional Mayor de San
							Marcos
						</p>
					</div>
					<div className="text-center text-blanco mb-8">
						<p className="font-bold">Dr. Germán Small Arana</p>
						<p>Presidente</p>
					</div>
					<div className="text-center text-blanco">
						<p className="font-bold mb-2">Miembros</p>
						<ul>
							<li className="mb-2">
								Dr. José Félix Palomino Manchego
							</li>
							<li className="mb-2">
								Dr. Johannes Schmidt Urdanivia
							</li>
							<li className="mb-2">
								Dr. Edgar Froilan Damián Núñez
							</li>
							<li className="mb-2">
								Dr. Manuel León Núñez Vergara
							</li>
							<li className="mb-2">
								Representante de la Dirección General de
								Administración
							</li>
							<li className="mb-2">
								Representante de la Oficina de Secretaría
								General
							</li>
							<li className="mb-2">
								Representante de la Oficina General de Imagen
								Institucional
							</li>
						</ul>
					</div>
				</div>
			</footer> */}
		</main>
	);
}
