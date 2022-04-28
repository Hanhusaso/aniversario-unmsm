import React from 'react';

const HorarioPrograma = ({ children, className }) => {
	return (
		<p className={`text-rojo font-medium text-sm ${className}`}>
			{children}
		</p>
	);
};

export default HorarioPrograma;
