import React from 'react';
import Image from 'next/image';
import Triangulo from './icons/Triangulo';

export const PersonajesIlustres = () => {
	return (
		<>
			<div className="bg-gris">
				<div className="container mx-auto px-24">
					<div className="pt-16 flex items-start">
						<h1 className="text-amarillo font-adelleBold font-semibold text-5xl mr-16 leading-none -translate-y-2">
							Personajes ilustres
						</h1>
						<p className="pb-16">
							La figura de hombres y mujeres que dejaron su legado
							a futuras generaciones en los diversos campos del
							conocimiento, engalana el afiche del 471°
							aniversario de la Universidad Nacional Mayor de San
							Marcos (UNMSM) que conmemorará el próximo 12 de
							mayo. A continuación, una breve reseña que destaca
							los aportes de un grupo de ilustres sanmarquinos.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-gris">
				<div className="container mx-auto relative">
					<div className="grid grid-cols-10 translate-x-[5.625rem]">
						<div className="cursor-pointer col-span-1">
							<Image
								src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/daniel_acides_31631bc9fb.png"
								width={230}
								height={260}
								layout="responsive"
								draggable={false}
							/>
						</div>
						<div className="cursor-pointer col-span-1 -translate-x-3">
							<Image
								src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rosa_alarco_597e1f76f3.png"
								width={230}
								height={260}
								layout="responsive"
								draggable={false}
							/>
						</div>
						<div className="cursor-pointer col-span-1 -translate-x-6 opacity-30">
							<Image
								src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/mario_vargas_llosa_ed9cc25bee.png"
								width={230}
								height={260}
								layout="responsive"
								draggable={false}
								className="hue-rotate-15"
							/>
						</div>
						<div className="cursor-pointer col-span-1 -translate-x-10">
							<Image
								src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/ella_dumbar_temple_2778de2b90.png"
								width={230}
								height={260}
								layout="responsive"
								draggable={false}
							/>
						</div>
						<div className="cursor-pointer col-span-1 -translate-x-14">
							<Image
								src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/jorge_basadre_f00300b016.png"
								width={230}
								height={260}
								layout="responsive"
								draggable={false}
							/>
						</div>
						<div className="cursor-pointer col-span-1 -translate-x-16">
							<Image
								src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/maria_luisa_aguilar_491cc20598.png"
								width={230}
								height={260}
								layout="responsive"
								draggable={false}
							/>
						</div>
						<div className="cursor-pointer col-span-1 -translate-x-20">
							<Image
								src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/ruth_shady_30bccf9fbd.png"
								width={230}
								height={260}
								layout="responsive"
								draggable={false}
							/>
						</div>

						<div className="cursor-pointer col-span-1 -translate-x-24">
							<Image
								src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/raul_porras_ea2afebab3.png"
								width={230}
								height={260}
								layout="responsive"
								draggable={false}
							/>
						</div>

						<div className="cursor-pointer col-span-1 -translate-x-32">
							<Image
								src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/julio_c_tello_64ea477221.png"
								width={230}
								height={260}
								layout="responsive"
								draggable={false}
							/>
						</div>
						<div className="cursor-pointer col-span-1 -translate-x-44">
							<Image
								src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/santiago_antunez_mayolo_57b772598a.png"
								width={230}
								height={260}
								layout="responsive"
								draggable={false}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-personajesIlustres bg-no-repeat bg-cover bg-azulDegradado">
				<div className="pt-9 container mx-auto flex flex-row justify-center">
					<div className="w-[29%]">
						<Image
							src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/mario_vargas_llosa_ed9cc25bee.png"
							width={230}
							height={260}
							layout="responsive"
							draggable={false}
						/>
					</div>
					<div className="w-[42%] ml-8 text-blanco">
						<h1 className="pt-10 text-[1.75rem]">Mario</h1>
						<h1 className="text-4xl">Vargas Llosa</h1>
						<p className="mt-9">
							El Premio Nobel de Literatura, nacido en Arequipa,
							el 28 de marzo de 1936, es considerado uno de los
							más importantes novelistas y ensayistas
							contemporáneos, cuya obra ha recibido numerosos
							reconocimientos en el mundo, entre ellos el Premio
							Cervantes, el Príncipe de Asturias de las Letras, el
							Rómulo Gallegos, entre otros; además de que varias
							de sus creaciones han sido adaptadas al cine y a la
							televisión.
							<span className="text-rojoclaro font-black ml-2 cursor-pointer">
								Leer más.
							</span>
						</p>
						<button className="flex justify-center items-center bg-rojoclaro py-2 px-3 rounded-lg mt-5">
							<Triangulo className="mr-3" /> Ver saludo
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
