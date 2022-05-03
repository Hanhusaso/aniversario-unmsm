import { PersonajesProvider } from '../contexts/personajeContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<PersonajesProvider>
			<Component {...pageProps} />
		</PersonajesProvider>
	);
}

export default MyApp;
