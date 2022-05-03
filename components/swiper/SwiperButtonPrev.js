import React, { useState } from 'react';
import { useSwiper } from 'swiper/react';
import FlechaIzquierda from '../icons/FlechaIzquierda';

const SwiperButtonPrev = ({ setCount, max }) => {
	const [isDisabled, setIsDisabled] = useState(false);
	const swiper = useSwiper();
	return (
		<button
			onClick={() => {
				swiper.slidePrev();
				setIsDisabled(true);
				setCount((c) => {
					if (c === 0) {
						return max;
					}
					return c - 1;
				});
				setTimeout(() => {
					setIsDisabled(false);
				}, 500);
			}}
			disabled={isDisabled}
			className="flex justify-center items-center shadow-[0px_1px_4px_rgba(0,0,0,0.25)] rounded-lg absolute top-1/2 -translate-y-1/2 left-4 md:left-0 z-10 hover:bg-gris bg-blanco h-9 w-9">
			<FlechaIzquierda />
		</button>
	);
};

export default SwiperButtonPrev;
