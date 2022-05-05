import Head from 'next/head';
import { Interactivo } from '../components/Interactivo';
import { Programa } from '../components/Programa';
import { GaleriaSaludos } from '../components/GaleriaSaludos';
import { PersonajesIlustres } from '../components/PersonajesIlustres';
import { Videos } from '../components/Videos';
import FooterAniversario from '../components/FooterAniversario';

export default function Home() {
	return (
		<>
			<Head>
				<title>471.°-UNMSM</title>
				<link
					rel="icon"
					href="https://biologia.unmsm.edu.pe/assets/img/favicon/logo.ico"
				/>
			</Head>
			<main className="font-lato bg-azulOscuro">
				<Interactivo />
				<Programa />
				<GaleriaSaludos />
				<PersonajesIlustres />
				<Videos />
				<FooterAniversario />
			</main>
		</>
	);
}
