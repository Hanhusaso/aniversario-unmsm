import React from 'react';
import { useSwiper } from 'swiper/react';
import FlechaDerecha from '../icons/FlechaDerecha';

const SwiperButtonNext = ({ setCount, max }) => {
	const swiper = useSwiper();
	return (
		<button
			onClick={() => {
				setCount((c) => {
					if (c === max) {
						return 0;
					}
					return c + 1;
				});
				swiper.slideNext();
			}}
			className="flex justify-center items-center shadow-[0px_1px_4px_rgba(0,0,0,0.25)] rounded-lg absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-blanco hover:bg-gris h-9 w-9">
			<FlechaDerecha />
		</button>
	);
};

export default SwiperButtonNext;