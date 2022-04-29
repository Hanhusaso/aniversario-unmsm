import React from 'react';
import { useSwiper } from 'swiper/react';
import FlechaIzquierda from '../icons/FlechaIzquierda';

const SwiperButtonPrev = ({ setCount, max }) => {
	const swiper = useSwiper();
	return (
		<button
			onClick={() => {
				setCount((c) => {
					if (c === 0) {
						return max;
					}
					return c - 1;
				});
				swiper.slidePrev();
			}}
			className="flex justify-center items-center shadow-[0px_1px_4px_rgba(0,0,0,0.25)] rounded-lg absolute top-1/2 -translate-y-1/2 left-0 z-10 hover:bg-gris bg-blanco h-9 w-9">
			<FlechaIzquierda />
		</button>
	);
};

export default SwiperButtonPrev;
