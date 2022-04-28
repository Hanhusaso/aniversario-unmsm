module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				azulOscuro: '#191D29',
				blanco: '#FFFFFF',
				amarillo: '#E4BE0F',
				gris: '#EFF3F6',
				rojo: '#591614',
				verdeOscuro: '#3A464F',
				verdeClaro: '#54626C',
				verdeClaroTransparent: 'rgba(84, 98, 108, 0.2)',
			},
			animation: {
				fadeIn: 'fadeIn',
				fadeOut: 'fadeOut',
				scaleIn: 'scaleIn',
				scaleOut: 'scaleOut',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				fadeOut: {
					'0%': { opacity: 1 },
					'100%': { opacity: 0 },
				},
				scaleIn: {
					'0%': { transform: 'scale(0)' },
					'100%': { transform: 'scale(1)' },
				},
				scaleOut: {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(0)' },
				},
			},
		},
	},
	plugins: [],
};
