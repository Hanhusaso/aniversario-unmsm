import React from 'react';

const FlechaAbajo = ({ animate, rojo }) => {
	return (
		<svg
			className={`mt-2 ${animate ? 'animate-bounce' : ''}`}
			width="20"
			height="21"
			viewBox="0 0 20 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M3 7.50708L10 13.5071L17 7.50707"
				stroke={`${rojo ? '#591614' : '#191D29'}`}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default FlechaAbajo;
