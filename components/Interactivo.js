import React from 'react';

export const Interactivo = () => {
	return (
		<>
			<section className="interactivo relative bg-rojo bg-[url('/img/fondo/fondo-rojo-home.png')] bg-[length:100%]">
				<div className="">
					{/* <div className=""> */}
					<div className="info-page absolute top-14 left-1/2 -translate-x-1/2 text-center text-blanco">
						<img
							src="/img/logo-unmsm-landing-aniversario.png"
							alt=""
						/>
						<p>
							<span>471.°</span>
							<br />
							<span>Aniversario</span>
						</p>
						<p>¡San Marcos es el Perú!</p>
						<p>12 de mayo</p>
						<p>1551-2022</p>
					</div>
					<div className="relative">
						<div className="-z-10 h-[10vh]"></div>
						<div className="absolute bottom-[18vmax] w-full">
							<div className="cont-inicio mx-auto">
								<div className="flex pt-10 px-10">
									{/* <div className="flex pt-32 px-[5vw]"> */}
									<div className="flex flex-row mr-[2vmax]">
										<div className="box-personaje">
											<div className="relative bottom-[25.5vmax] left-[2.8vmax]">
												<div className="contain-personaje per-1">
													<img
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/daniel_acides_31631bc9fb.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div className="box-personaje">
											<div className="relative bottom-[19vmax] left-[4vmax]">
												<div className="contain-personaje per-2">
													<img
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/rosa_alarco_597e1f76f3.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div className="box-personaje">
											<div className="relative bottom-[7.5vmax] left-[2vmax]">
												<div className="contain-personaje per-3">
													<img
														src="/img/personajes/jorge-basadre-largo.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div className="box-personaje">
											<div className="relative bottom-[3.6vmax] left-[1vmax]">
												<div className="contain-personaje per-4">
													<img
														src="/img/personajes/ella-dunbar-largo.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div className="box-personaje">
											<div className="relative right-[1vmax]">
												<div className="contain-personaje per-5">
													<img
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/mario_vargas_llosa_ed9cc25bee.png"
														alt=""
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="flex flex-row-reverse ml-[2vmax]">
										<div className="box-personaje">
											<div className="relative bottom-[25.5vmax] right-[3.8vmax]">
												<div className="contain-personaje per-10">
													<img
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/santiago_antunez_mayolo_57b772598a.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div className="box-personaje">
											<div className="relative bottom-[20vmax] right-[4vmax]">
												<div className="contain-personaje per-9">
													<img
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/julio_c_tello_64ea477221.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div className="box-personaje">
											<div className="relative bottom-[13.5vmax] right-[4vmax]">
												<div className="contain-personaje per-8">
													<img
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/maria_luisa_aguilar_491cc20598.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div className="box-personaje">
											<div className="relative bottom-[6vmax] right-[3.5vmax]">
												<div className="contain-personaje per-7">
													<img
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/raul_porras_ea2afebab3.png"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div className="box-personaje">
											<div className="relative -bottom-[.2vmax] right-[1.5vmax]">
												<div className="contain-personaje per-6">
													<img
														src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/ruth_shady_30bccf9fbd.png"
														alt=""
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<img
							className="w-[59vw] left-0 edificio-1 z-[1]"
							src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/edificio1_sanfernando_a49c78893c.png"
							alt=""
						/>
						<img
							className="w-[54.8vw] right-0 edificio-2 absolute bottom-0"
							src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/edificio2_3a71837138.png"
							alt=""
						/>
					</div>

					<div></div>
				</div>
			</section>
		</>
	);
};
