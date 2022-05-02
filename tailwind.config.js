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
				rojoclaro: '#7D1D18',
				verdeOscuro: '#3A464F',
				verdeClaro: '#54626C',
				verdeClaroTransparent: 'rgba(84, 98, 108, 0.2)',
				grisOscuroTitulos: '#3A464F',
				azulDegradado: '#242A3B',
			},
			backgroundImage: {
				personajesIlustres:
					'url("https://posgrado-unmsm.s3.sa-east-1.amazonaws.com/textura_Final_145d1cfe31.png")',
				programaHeader:
					'url("https://posgrado-unmsm.s3.sa-east-1.amazonaws.com/muro_unmsm_76b9ba3b5f.png")',
			},
			fontFamily: {
				lato: 'Lato',
				adelleBold: 'Adelle-bold',
				adelleExtraBold: 'Adelle-ExtraBold',
				adelleSemiBold: 'Adelle-SemiBold',
				adelleHeavy: 'Adelle-Heavy',
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
	plugins: [require('@tailwindcss/line-clamp')],
};
