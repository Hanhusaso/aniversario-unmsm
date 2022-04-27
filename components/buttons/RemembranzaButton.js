import React from 'react';
import RemembranzaIcon from '../icons/RemembranzaIcon';

const RemembranzaButton = () => {
	return (
		<button className="mt-2 text-xs text-rojo shadow-md px-4 py-2 rounded-lg font-semibold flex items-center">
			<RemembranzaIcon className="mr-1" />
			Ver remembranza
		</button>
	);
};

export default RemembranzaButton;
