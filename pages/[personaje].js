import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AdornoDesarrolloPersonaje from '../components/icons/AdornoDesarrolloPersonaje';
import FlechaIzquierda from '../components/icons/FlechaIzquierda';
import RegresarIcon from '../components/icons/RegresarIcon';

const Personaje = () => {
	return (
		<div className="bg-azulOscuro font-lato pb-48">
			<div className="container mx-auto px-20 text-blanco pt-20 relative">
				<div className="flex flex-row items-start">
					<div className="basis-1/2 pr-14">
						<div className="font-bold mb-8">
							<h1 className="text-2xl">Mario</h1>
							<div className="flex justify-between text-4xl items-center">
								<h1 className="mr-2">Vargas Llosa</h1>
								<AdornoDesarrolloPersonaje />
							</div>
						</div>
						<div>
							<p className="mb-3">
								El Premio Nobel de Literatura, nacido en
								Arequipa, el 28 de marzo de 1936, es considerado
								uno de los m&aacute;s importantes novelistas y
								ensayistas contempor&aacute;neos, cuya obra ha
								recibido numerosos reconocimientos en el mundo,
								entre ellos el Premio Cervantes, el
								Pr&iacute;ncipe de Asturias de las Letras, el
								R&oacute;mulo Gallegos, entre otros;
								adem&aacute;s de que varias de sus creaciones
								han sido adaptadas al cine y a la
								televisi&oacute;n.&nbsp;
							</p>
							<p className="mb-3">
								Tras escribir las novelas &ldquo;La ciudad y los
								perros&rdquo;, &ldquo;La casa verde&rdquo; y
								&ldquo;Conversaci&oacute;n en La
								Catedral&rdquo;, ambientadas en el Per&uacute;,
								MVLL ha incursionado, tambi&eacute;n, en los
								g&eacute;neros literarios de ensayo,
								art&iacute;culo y el teatro. Es autor de
								&ldquo;La guerra del fin del mundo&rdquo;,
								&ldquo;La fiesta del Chivo&rdquo; y &ldquo;El
								sue&ntilde;o del celta&rdquo;.&nbsp;
							</p>
							<p className="mb-3">
								Ha sido candidato a la presidencia del
								Per&uacute; en las elecciones de 1990 por la
								coalici&oacute;n pol&iacute;tica de
								centroderecha Frente Democr&aacute;tico;
								nombrado en Espa&ntilde;a -en donde reside-
								primer marqu&eacute;s por el rey Juan Carlos I
								de Espa&ntilde;a. El a&ntilde;o pasado fue
								elegido miembro de la Academia Francesa para
								ocupar el asiento n&uacute;mero 18 de esa
								instituci&oacute;n, convirti&eacute;ndolo en el
								primer miembro que no ha escrito obras en lengua
								francesa.
							</p>
							<p className="mb-3">
								En la UNMSM estudi&oacute; Derecho y Literatura
								y particip&oacute; en la pol&iacute;tica
								universitaria formando parte de la
								oposici&oacute;n al gobierno de Odr&iacute;a. En
								esa &eacute;poca trabaj&oacute; como asistente
								del historiador sanmarquino Ra&uacute;l Porras
								Barrenechea. En Espa&ntilde;a, obtuvo doctorado
								en Filosof&iacute;a y Letras por la Universidad
								Complutense de Madrid con la calificaci&oacute;n
								de sobresaliente cum laude por su tesis
								&ldquo;Garc&iacute;a M&aacute;rquez: lengua y
								estructura de su obra narrativa&rdquo;.
							</p>
						</div>
					</div>
					<div className="relative basis-1/2 px-14">
						<Image
							src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/mario_vargas_llosa_personaje_desarrollo_1779afab19.png?updated_at=2022-04-29T19:11:01.158Z"
							width={630}
							height={910}
							layout="responsive"
							draggable={false}
						/>
						<div
							className=" absolute bottom-0 inset-x-0 h-1/4"
							style={{
								background:
									'linear-gradient(180deg, rgba(25, 29, 41, 0) 0%, rgba(25, 29, 41, 0.185825) 14.54%, rgba(25, 29, 41, 0.354756) 27.76%, rgba(25, 29, 41, 0.59865) 53.54%, rgba(25, 29, 41, 0.880677) 77.99%, #191D29 100%)',
							}}></div>
					</div>
				</div>
				<div className="cursor-pointer">
					<Link href="/">
						<a>
							<RegresarIcon className="absolute top-12 left-0" />
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Personaje;
