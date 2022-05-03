import React, { createContext, useState } from 'react';
import personajesIlustresData from '../data/personajesIlustresData';

const PersonajesContext = createContext();

const PersonajesProvider = ({ children }) => {
	const [personajesIlustresRef, setPersonajesIlustresRef] = useState(null);

	const scrollPersonajes = () => {
		personajesIlustresRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

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
	const [personajeElegido, setPersonajeElegido] = useState(
		personajesIlustresData[2]
	);

	const data = {
		personajes,
		personajeElegido,
		scrollPersonajes,
		setPersonajes,
		setPersonajeElegido,
		setPersonajesIlustresRef,
	};

	return (
		<PersonajesContext.Provider value={data}>
			{children}
		</PersonajesContext.Provider>
	);
};

export { PersonajesProvider };

export default PersonajesContext;
