import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AdornoDesarrolloPersonaje from '../components/icons/AdornoDesarrolloPersonaje';
import RegresarIcon from '../components/icons/RegresarIcon';
import personajesIlustresData from '../data/personajesIlustresData';

const Personaje = () => {
	const router = useRouter();
	const [personaje, setPersonaje] = useState(null);
	console.log(personaje);
	useEffect(() => {
		if (router.isReady) {
			personajesIlustresData.find((p) => {
				if (p.slug === router.query.personaje) {
					setPersonaje(p);
				}
			});
		}
	}, [router.isReady]);

	return (
		personaje && (
			<div className="bg-azulOscuro font-lato pb-48">
				<div className="container mx-auto px-20 text-blanco pt-20 relative">
					<div className="flex flex-row items-start">
						<div className="basis-1/2 pr-14">
							<div className="font-bold mb-8">
								<h1 className="text-2xl">
									{personaje.nombres}
								</h1>
								<div className="flex justify-between text-4xl items-center">
									<h1 className="mr-2">
										{personaje.apellidos}
									</h1>
									<AdornoDesarrolloPersonaje />
								</div>
							</div>
							<div
								dangerouslySetInnerHTML={{
									__html: personaje.contenido,
								}}
							/>
						</div>
						<div className="relative basis-1/2 px-14">
							<Image
								src={personaje.imgContenido}
								width={630}
								height={910}
								layout="responsive"
								draggable={false}
								priority
							/>
							<div
								className=" absolute bottom-0 inset-x-0 h-1/4"
								style={{
									background:
										'linear-gradient(180deg, rgba(25, 29, 41, 0) 0%, rgba(25, 29, 41, 0.185825) 14.54%, rgba(25, 29, 41, 0.354756) 27.76%, rgba(25, 29, 41, 0.59865) 53.54%, rgba(25, 29, 41, 0.880677) 77.99%, #191D29 100%)',
								}}></div>
							<p className="absolute bottom-5 left-20 text-xs">
								Fuente: <span>{personaje.fuenteImagen}</span>
							</p>
						</div>
					</div>
					<div className="cursor-pointer">
						<Link href="/#personajesIlustres">
							<a>
								<RegresarIcon className="absolute top-12 left-0" />
							</a>
						</Link>
					</div>
				</div>
			</div>
		)
	);
};

export default Personaje;
