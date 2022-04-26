import React from 'react';

const LineIcon = ({ className }) => {
	return (
		<svg
			className={className}
			width="972"
			height="10"
			viewBox="0 0 972 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g opacity="0.25" filter="url(#filter0_f_192_964)">
				<line
					x1="4.34668"
					y1="4.64526"
					x2="967.347"
					y2="4.64518"
					stroke="#54626C"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_192_964"
					x="0.34668"
					y="0.145142"
					width="971"
					height="9.00012"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="2"
						result="effect1_foregroundBlur_192_964"
					/>
				</filter>
			</defs>
		</svg>
	);
};

export default LineIcon;
