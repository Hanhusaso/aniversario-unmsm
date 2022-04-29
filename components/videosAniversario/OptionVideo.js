import React from 'react';

export const OptionVideo = ({ active, nombre, setActive }) => {
	return (
		<>
			{active ? (
				<li
					onClick={() => {
						setActive(nombre);
					}}
					className="cursor-pointer bg-azulOscuro text-white font-semibold  py-1 px-2 mx-2  hover:border-transparent rounded"
				>
					{nombre}
				</li>
			) : (
				<li
					onClick={() => {
						setActive(nombre);
					}}
					className="cursor-pointer bg-transparent hover:bg-azulOscuro hover:text-white text-azulOscuro font-semibold  py-1 px-2 mx-2 border border-azulOscuro hover:border-transparent rounded"
				>
					{nombre}
				</li>
			)}
		</>
	);
};
