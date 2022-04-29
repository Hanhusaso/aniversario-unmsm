import React from 'react';
import RemembranzaIcon from '../icons/RemembranzaIcon';

const RemembranzaButton = () => {
	return (
		<button className="mt-4 text-sm text-rojo shadow-[0px_4px_4px_rgba(0,0,0,0.04)] hover:shadow-xl px-4 py-2 rounded-lg font-semibold flex items-center hover:bg-rojo hover:text-blanco hover:fill-blanco fill-rojo">
			<RemembranzaIcon className="mr-1 " />
			Ver remembranza
		</button>
	);
};

export default RemembranzaButton;
