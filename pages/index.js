import Head from 'next/head';
import Image from 'next/image';
import { Interactivo } from '../components/Interactivo';
import { Programa } from '../components/Programa';
import { GaleriaSaludos } from '../components/GaleriaSaludos';
import { PersonajesIlustres } from '../components/PersonajesIlustres';
import { Videos } from '../components/videosAniversario/Videos';

export default function Home() {
	return (
		<>
			<main className="font-lato">
				<Interactivo />
				<Programa />
				<GaleriaSaludos />
				<PersonajesIlustres />
				<Videos />
				<footer></footer>
			</main>
		</>
	);
}
