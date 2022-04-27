import React from 'react';
import EnVivoIcon from '../icons/EnVivoIcon';

const EnVivoButton = () => {
	return (
		<button className="mt-2 text-xs text-rojo shadow-md px-4 py-2 rounded-lg font-semibold flex items-center">
			<EnVivoIcon className="mr-1" />
			Unirme al evento en vivo
		</button>
	);
};

export default EnVivoButton;
