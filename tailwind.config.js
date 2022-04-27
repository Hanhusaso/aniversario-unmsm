module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				lato: '"Lato",sans-serif',
				adelleBold: 'Adelle-bold',
				adelleExtraBold: 'Adelle-ExtraBold',
				adelleSemiBold: 'Adelle-SemiBold',
				adelleHeavy: 'Adelle-Heavy',
			},
		},
		colors: {
			azulOscuro: '#191D29',
			blanco: '#FFFFFF',
			amarillo: '#E4BE0F',
			gris: '#EFF3F6',
			rojo: '#591614',
			verdeOscuro: '#3A464F',
			verdeClaro: '#54626C',
			verdeClaroTransparent: 'rgba(84, 98, 108, 0.2)',
			grisOscuroTitulos: '#3A464F',
		},
	},
	plugins: [],
};
