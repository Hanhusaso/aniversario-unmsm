import React from 'react';
const awsUrlVideo = 'https://afroperuanos.s3.us-east-2.amazonaws.com/videos/';

export const Videos = () => {
	return (
		<div className="mx-40">
			<h2 className="text-center text-5xl text-amarillo mb-4 font-bold">
				Videos de aniversario
			</h2>
			<ul className="flex items-center justify-center mb-4">
				<li className="cursor-pointer bg-transparent hover:bg-negro text-negro font-semibold hover:text-white py-1 px-2 mx-2 border border-negro hover:border-transparent rounded">
					Todos
				</li>
				<li className="cursor-pointer bg-transparent hover:bg-negro text-negro font-semibold hover:text-white py-1 px-2 mx-2 border border-negro hover:border-transparent rounded">
					Sedes
				</li>
				<li className="cursor-pointer bg-transparent hover:bg-negro text-negro font-semibold hover:text-white py-1 px-2 mx-2 border border-negro hover:border-transparent rounded">
					Institucionales
				</li>
				<li className="cursor-pointer bg-transparent hover:bg-negro text-negro font-semibold hover:text-white py-1 px-2 mx-2 border border-negro hover:border-transparent rounded">
					Miscelánea
				</li>
			</ul>

			<div className="grid grid-cols-3 grid-rows-4 gap-4">
				<div className="col-span-2 row-span-2">
					<img
						className="h-full object-cover"
						src={`${awsUrlVideo}Video+Martin+Alvarado-03+1.png`}
					></img>
				</div>
				<div className="col-span-1 row-span-1">
					<img
						src={`${awsUrlVideo}Video+Martin+Alvarado-03+1.png`}
					></img>
				</div>
				<div className="col-span-1 row-span-1">
					<img
						src={`${awsUrlVideo}Video+Martin+Alvarado-03+1.png`}
					></img>
				</div>
				<div className="col-span-1 row-span-1">
					<img
						src={`${awsUrlVideo}Video+Martin+Alvarado-03+1.png`}
					></img>
				</div>
				<div className="col-span-2 row-span-2">
					<img
						className="h-full object-cover"
						src={`${awsUrlVideo}Video+Martin+Alvarado-03+1.png`}
					></img>
				</div>
				<div className="col-span-1 row-span-1">
					<img
						src={`${awsUrlVideo}Video+Martin+Alvarado-03+1.png`}
					></img>
				</div>
			</div>
		</div>
	);
};
