import Head from 'next/head';
import Image from 'next/image';
import { Interactivo } from '../components/Interactivo';
import { Programa } from '../components/Programa';
import { GaleriaSaludos } from '../components/GaleriaSaludos';
import { PersonajesIlustres } from '../components/PersonajesIlustres';
import { Videos } from '../components/Videos';
import FooterAniversario from '../components/FooterAniversario';

export default function Home() {
	return (
		<main className="font-lato bg-azulOscuro">
			<Interactivo />
			<Programa />
			<GaleriaSaludos />
			<PersonajesIlustres />
			<Videos />
			<FooterAniversario />
		</main>
	);
}
