const saludos = [
	{
		id: 1,
		nombre: 'Mario Urbina Schmitt',
		biodata: 'Paleontólogo e investigador del Museo de Historia Natural',
		cita: 'San Marcos es una de las instituciones más prestigiosas que tenemos para la ciencia en el Perú',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/mario_urbina_schmitt_unmsm_aniversario_545db1bc82.png?updated_at=2022-04-28T22:35:44.074Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Mario+Urbina+Schmitt.mp4',
	},
	{
		id: 2,
		nombre: 'Ing. Omar del Carpio',
		biodata: 'Director Ejecutuivo de la Red IDI',
		cita: 'La UNMSM es una institución líder en investigación, desarrollo e innovación',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/omar_del_carpio_unmsm_aniversario_3216fbe425.png?updated_at=2022-04-28T22:35:45.172Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Ing.+Omar+Del+Carpio+Rodr%C3%ADguez+-+Director+Ejecutivo+de+la+Red+Idi.mp4',
	},
	{
		id: 3,
		nombre: 'Historiador Hugo La Rosa Cordero',
		biodata: 'Coordinador Archivo y Planoteca de Prolima',
		cita: 'San Marcos mantiene una continuidad histórica que no se detiene ni con pandemias, ni con crisis política, ni crisis económicas',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/hugo_la_rosa_unmsm_aniversario_08363eb43b.png?updated_at=2022-04-28T22:35:43.945Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Historiador+Hugo+La+Rosa+Cordero+-+Egresado+EP+Historia+-+Facultad+de+Ciencias+Sociales.mp4',
	},
	{
		id: 4,
		nombre: 'Dr. Federico Kauffman Doig',
		biodata: 'Doctor en Arqueología e Historia',
		cita: 'Fue San Marcos que me formó, de esto hace más de 70 años y en la que tuve compañeros como Pablo Macera y Carlos Araníbar',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/federico_kauffman_unmsm_aniversario_82dc17b61b.png?updated_at=2022-04-28T22:35:43.859Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Federico+Kauffman+Doig+-+Doctor+en+Arqueolog%C3%ADa+e+Historia.mp4',
	},
	{
		id: 5,
		nombre: 'Dr. Benjamin Marticorena Castillo',
		biodata: 'Presidente del Concytec',
		cita: 'Evocar a San Marcos es indagar los hechos históricos más memorable y de mayor significado, y los perfiles culturales de nuestra diversidad humana que solo pueden conocerse con el rigor metódico de las ciencias y la sensibilidad de las artes',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/benjamin_marticorena_unmsm_aniversario_383c15e1d8.png?updated_at=2022-04-28T22:35:43.751Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Benjam%C3%ADn+Marticorena+Castillo.mp4',
	},
	{
		id: 6,
		nombre: 'Dr. Augusto Cáceres Viñas',
		biodata:
			'Alcalde de San Isidro - Egresado de la Facultad de Medicina San Fernando',
		cita: 'La universidad más importante de América es San Marcos, 471 años camino a los 500 años nos debe de hacer más grande, más fuertes, más unidos',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/augusto_caceres_unmsm_aniversario_a8d5a97024.png?updated_at=2022-04-28T22:35:44.055Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Augusto+C%C3%A1ceres+Vi%C3%B1as.mp4',
	},
	{
		id: 7,
		nombre: 'Dr. Armando Yarlequé Chocas',
		biodata:
			'Jefe del laboratorio de Biología Molecular y del Serpentario "Oswaldo Meneses"',
		cita: 'Recuerdo cuando estaba en Pakistán o Singapur me decían: ‘¿dónde queda Perú?’. Bueno, les explicaba dónde queda Perú, pero cuando les decía: ‘San Marcos’ ya identificaban rápidamente',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/armando_yarleque_unmsm_aniversario_d569189117.png?updated_at=2022-04-28T22:35:45.269Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Armando+Yarlequ%C3%A9+Chocas+-+Jefe+del+Laboratorio+de+Biolog%C3%ADa+Molecular+y+del+Serpentario.mp4',
	},
	{
		id: 8,
		nombre: 'Carlos Aparicio Saldaña',
		biodata: 'DT de vóley en el Club Alianza Lima',
		cita: 'Un fuerte abrazo a todos los sanmarquinos de hoy, ayer y de siempre; siempre vamos a estar orgullosos de pertenecer a esta Universidad. ¡Felicitaciones!',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/carlos_aparicio_unmsm_aniversario_bb1ad7a890.png?updated_at=2022-04-28T22:35:44.043Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Carlos+Aparicio+Salda%C3%B1a+-+DT+de+v%C3%B3ley+en+el+Club+Alianza+Lima.mp4',
	},
	{
		id: 9,
		nombre: 'Dr. Miguel Pinto Salinas',
		biodata:
			'Estudiante de maestría en la Universidad de Harvard. Egresado de la Facultad de Medicina',
		cita: 'La responsabilidad de ser sanmarquino va mucho más allá de estudiar y trabajar en la Universidad, esta amalgama de todas las sangres se debe a la capacidad y competitividad de sus integrantes, aptos para conseguir los logros que el país exige,  formando líderes con responsabilidad social',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/miguel_pinto_unmsm_aniversario_e476bdd78a.png?updated_at=2022-05-03T16:55:07.262Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Miguel+Pinto+Salinas.mp4',
	},
	{
		id: 10,
		nombre: 'Rodolfo Salas Gismondi',
		biodata:
			'Fundador - Encargado del Departamento de de Paleontología de Vertebrados del Museo de Historia Natural',
		cita: '“Este es un muy afectuoso saludo para la Universidad Nacional Mayor de San Marcos por sus 471 años de existencia que han marcado y seguirán marcando la historia del país',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/rodolfo_salas_unmsm_aniversario_c286fb3bcb.png?updated_at=2022-05-03T16:55:08.423Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Rodolfo+Salas+Gismondi.mp4',
	},
	{
		id: 11,
		nombre: 'Dra. Eliana Icochea D’Arrigo',
		biodata:
			'Jefa del Laboratorio de Patología Aviar de la Facultad de Medicina Veterinaria',
		cita: 'No solamente me siento orgullosa de pertenecer a mi Alma Máter, sino que le estoy infinitamente agradecida porque aquí me formé como médico veterinario y aquí realicé mis estudios de posgrado',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/eliana_icochea_unmsm_aniversario_9c0dc94773.png?updated_at=2022-05-03T16:55:04.196Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Carlos+Aparicio+Salda%C3%B1a+-+DT+de+v%C3%B3ley+en+el+Club+Alianza+Lima.mp4',
	},
	{
		id: 12,
		nombre: 'Dra. Mónica Solórzano Gonzáles',
		biodata: 'Directora de la EP de Conservación y Restauración FLCH',
		cita: 'Quiero saludar a toda la comunidad sanmarquina por este 471.° Aniversario, un cálido saludo, fraterno, cordial a toda nuestra comunidad',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/monica_solorzano_unmsm_aniversario_983c977b5c.png?updated_at=2022-05-03T16:55:08.313Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dra.+Eliana+Icochea+D_Arrigo.mp4',
	},
	{
		id: 13,
		nombre: 'Dra. Ruth Shady Solis',
		biodata:
			'Jefa de la Zona Arqueológica Caral. Catedrática Postgrado Fac. Ciencias Sociales',
		cita: 'Como sanmarquina he cumplido 53 años de trabajo dentro de la Universidad, y me siento muy contenta de que podamos presentar para el Perú y el mundo los resultados de la investigación que hemos venido realizando en equipo',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/ruth_shady_unmsm_aniversario_76c0734d5b.png?updated_at=2022-05-03T16:55:08.526Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dra.+Ruth+Shady+Solis.mp4',
	},
	{
		id: 14,
		nombre: 'Carlos Aparicio Vedia',
		biodata: 'Embajador del Estado Plurinacional de Bolivia en el Perú',
		cita: 'Esta Universidad, sin duda, es la más importante, más antigua y más prestigiosa de toda la latitud; por tanto, mis felicitaciones a nombre del Estado Plurinacional de Bolivia',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/carlos_aparicio_vedia_unmsm_aniversario_ff5b8c1cb1.png?updated_at=2022-05-03T16:55:03.555Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Carlos+Aparicio+Vedia.mp4',
	},
	{
		id: 15,
		nombre: 'Alejandro Alvargonzález San Martín',
		biodata: 'Embajador de España en el Perú',
		cita: 'Permítanme que comparta con ustedes esa alegría y ese pequeño orgullo de que sea España quien ha participado en la fundación de una Institución tan noble, tan insigne y que tanto ha producido para el Perú',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/alejandro_alvargonzalez_unmsm_aniversario_4f734db78c.png?updated_at=2022-05-03T16:55:08.503Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Alejandro+Alvargonz%C3%A1lez+San+Mart%C3%ADn.mp4',
	},
	{
		id: 16,
		nombre: 'Dra. Fabiola Vergara Rodríguez',
		biodata:
			'Directora de la Biblioteca Nacional del Perú. Egresada  de la EP Bibliotec',
		cita: '“Auguro que San Marcos seguirá siendo un gran referente para la promoción de la investigación y la calidad académica para el desarrollo de nuestro país',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/fabiola_vergara_rodriguez_unmsm_aniversario_e7774e3931.png?updated_at=2022-05-03T16:55:04.134Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dra.+Fabiola+Vergara+Rodr%C3%ADguez.mp4',
	},
	{
		id: 17,
		nombre: 'Gladys Gonzalez García de Naeckel',
		biodata:
			'Presidenta del Comité Patriótico Bicentenario de la Independencia del Perú - USA',
		cita: 'Convencida de que no podemos querer lo que no conocemos es importante mencionar que: apenas fue declarada la Guerra del Pacífico (1879-1884), los sanmarquinos no dudaron en expresar enérgicamente su rechazo ante esta amenaza contra nuestra patria convocando a la sociedad y juventud universitaria, quienes presurosos acudieron para formar parte de los defensores del país. Ojalá estos gestos heroicos fueran ejemplos permanentes para nuestros futuros líderes',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/gladys_gonzalez_garcia_unmsm_aniversario_80b8a71a2f.png?updated_at=2022-05-03T16:55:04.150Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Gladys+Gonzalez+Garc%C3%ADa+De+Naeckel.m4v',
	},
	{
		id: 18,
		nombre: 'Hernán Saavedra Vargas',
		biodata:
			'Presidente de la Asociación Nacional de Entrenadores de Fútbol del Perú. Egresado EP Educación Física.',
		cita: 'Me siento muy honrado ser un exalumno de esta prestigiosa Universidad',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/hernan_saavedra_unmsm_aniversario_11a1bec56f.png?updated_at=2022-05-03T16:55:05.187Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Hern%C3%A1n+Saavedra+Vargas.mp4',
	},
	{
		id: 19,
		nombre: 'Dr. Jesús Martinez Laya',
		biodata:
			'Historiador. Egresado EP Historia de la Facultad de Ciencias Sociales',
		cita: 'Esperamos que el esfuerzo y el desarrollo de la Universidad siga adelante; pues San Marcos, como ayer, continúa siendo un referente importante no solo para la historia del país, sino también para todo el mundo',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/jesus_martinez_laya_unmsm_aniversario_02158dad7c.png?updated_at=2022-05-03T16:55:05.907Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Jes%C3%BAs+Martinez+Laya.mp4',
	},
	{
		id: 20,
		nombre: 'José Angulo Tisoc MVZ. Mg',
		biodata:
			'Estación IVITA Marangani de la Facultad de Medicina Veterinaria.',
		cita: 'La Estación IVITA Marangani, ubicada en el departamento de Cusco, perteneciente a la Facultad de Medicina Veterinaria de la UNMSM, saluda a su Casa de Estudios por sus 471.° Aniversario',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/jose_angulo_tisoc_mvz_unmsm_aniversario_161d595cea.png?updated_at=2022-05-03T16:55:06.289Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Jos%C3%A9+Angulo+Tisoc+MVZ.+Mg.mp4',
	},
	{
		id: 21,
		nombre: 'José María “Chema” Salcedo',
		biodata: 'Periodista, escritor y actor español nacionalizado peruano',
		cita: 'Pensar en el Perú es pensar en San Marcos. Nadie podrá escribir la historia del Perú si al mismo tiempo no escribe la historia de San Marcos, por eso, para todos, hayamos o no sido sanmarquinos es motivo de júbilo saludar a esta gran Universidad, a su Rectora y toda su comunidad',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/jose_maria_chema_salcedo_unmsm_aniversario_85086d19c4.png?updated_at=2022-05-03T16:55:06.262Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Jos%C3%A9+Mar%C3%ADa+%E2%80%9CChema%E2%80%9D+Salcedo.mp4',
	},
	{
		id: 22,
		nombre: 'Katherine Berrocal',
		biodata:
			'Vicepresidenta y Fundadora de la Asociación Peruana de Estudiantes de Educación Física',
		cita: 'Estudiar en San Marcos, la Decana de América, me enseñó que puedo lograr todos mis sueños sin ningún límite; además, me siento orgullosa de pertenecer a la primera y mejor universidad del país',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/katherine_berrocal_unmsm_aniversario_c7a9579eee.png?updated_at=2022-05-03T16:55:06.385Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/+Katherine+Berrocal.mp4',
	},
	{
		id: 23,
		nombre: 'Gonzalo Hermosa González',
		biodata: 'Guitarrista de los Kjarkas',
		cita: 'Queremos decir que Los Kjarkas les mandamos la felicitación en sus 471 años de vida, realmente los admiramos y admiramos esta Universidad',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/thumbnail_gonzalo_hermosa_gonzalez_unmsm_aniversario_14e27de4c5.png?updated_at=2022-05-03T16:55:04.295Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Gonzalo+Hermosa+Gonz%C3%A1lez.mp4',
	},
	{
		id: 24,
		nombre: 'Los Kjarkas',
		biodata: 'Grupo musical boliviano',
		cita: 'Muchas felicidades en sus 471 años a la universidad de San Marcos',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/loskjarkas_unmsm_aniversario_8308b2c100.png?updated_at=2022-05-03T16:55:06.358Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/+%E2%80%9CLos+Kjarkas%E2%80%9D.mp4',
	},
	{
		id: 25,
		nombre: 'Dr. Marco Martos Carrera',
		biodata:
			'Presidente de la Academia Peruana de la Lengua. Sanmarquino ilustre',
		cita: 'Resulta importante señalar que la fundación de esta Institución significó también lo que en esa época [El Virreinato] se llamaba ‘Una defensa a los naturales’, y corresponde a la Universidad iniciar los estudios de gramática de las lenguas que existían en América, principalmente el quechua, el aimara y el mochica; nada de esto hubiera ocurrido si la Universidad no se hubiera fundado en ese momento',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/marco_martos_carrera_unmsm_aniversario_61ce27d3e6.png?updated_at=2022-05-03T16:55:06.768Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Marco+Martos+Carrera.mp4',
	},
	{
		id: 26,
		nombre: 'Dr. Pieter Van Dalen Luna',
		biodata:
			'Director General de Investigación y Estudios sobre Turismo y Artesanía de MINCETUR',
		cita: 'Ser sanmarquino es un orgullo, es un amor que tenemos todos los que hemos pasado por esta Casa de Estudios y, que nos hace ver pues a través del tiempo histórico la gran importancia que ha tenido nuestra Universidad para la sociedad; no solamente peruana, sino latinoamericana y mundial',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/dr_pieter_van_dalen_luna_unmsm_aniversario_70bd16d169.png?updated_at=2022-05-03T16:55:04.119Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/+Dr.+Pieter+Van+Dalen+Luna.mp4',
	},
	{
		id: 27,
		nombre: 'Arqueol. Henry Tantalean - Arqueol. Carito Tavera',
		biodata:
			'Equipo del Programa Arqueológico Valle de Chicama- EP Arqueología de la Facultad de Ciencias Sociales',
		cita: 'Desde el sitio arqueológico ‘Quebrada del Oso’, en la provincia de Ascope, La Libertad, del programa Arqueológico Chicama les deseamos un feliz 471.° Aniversario a la UNMSM',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/arqueol_henry_tantalean_unmsm_aniversario_8642e1ecbc.png?updated_at=2022-05-03T16:55:08.612Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Arqueol.+Henry+Tantalean+-+Arqueol.+Carito+Tavera.mp4',
	},
	{
		id: 28,
		nombre: 'Yuri Cavero Palomino',
		biodata:
			'Docente de la EP. Conservación y Restauración - FLCH. Docente de la EP Arqueología - Fac. Ciencias Sociales',
		cita: '“Y qué mejor manera de celebrar este Aniversario volviendo a la normalidad con los cursos-talleres; ya pasada la pandemia, vamos a reencontrarnos los sanmarquinos y poder ejercer nuestra función académica y de formación profesional en las aulas universitarias”',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/yuri_cavero_palomino_unmsm_aniversario_51430e7933.png?updated_at=2022-05-09T21:07:02.514Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Yuri+Cavero+Palomino.mp4',
	},
	{
		id: 29,
		nombre: 'Raul Franco Ochoa',
		biodata: 'Escultor de la Estatua de Fray Tomás de San Martín',
		cita: '“Deseo que la Universidad siga siendo esa luz que ilumina la educación en el Perú”',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/raul_franco_ochoa_unmsm_aniversario_562a4cc4db.png?updated_at=2022-05-09T21:17:50.812Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Raul+Franco+Ochoa.mp4',
	},
	{
		id: 30,
		nombre: 'Sr. Hanuk Chung',
		biodata:
			'Ministro Consejero de la Embajada de la República Corea en el Perú',
		cita: 'Para mí, es la vez primera en visitar la Universidad, pero estando en otros países latinoamericanos he oído muchas veces de la reputación de la Universidad que representa el Perú',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/hanuk_chung_unmsm_aniversario_8c9963e132.png?updated_at=2022-05-10T04:38:03.193Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/+Sr.+Hanuk+Chung.mp4',
	},
	{
		id: 31,
		nombre: 'Dr. Hugo Oscar Juri',
		biodata: 'Rector de la Universidad Nacional de Córdoba - Argentina',
		cita: 'Es un placer participar, aunque sea de manera virtual, de esta ceremonia que por primera vez en la historia, de esta la más antigua de la Universidades de América tiene una Rectora mujer; lo cual es un orgullo para todos nosotros, los latinoamericanos',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/hugo_oscar_juri_unmsm_aniversario_4084aa2cea.png?updated_at=2022-05-10T04:38:03.225Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Hugo+Oscar+Juri.mp4',
	},
	{
		id: 32,
		nombre: 'Dra. Lida Asencios Trujillo',
		biodata: 'Rectora de la UNE',
		cita: 'Hago extensivo este cálido saludo a lo docentes sanmarquinos, estudiantes, egresados y personal administrativo, deseándoles el mejor de los éxitos para que continúen con la noble misión de formar profesionales líderes de excelencia académica con sentido humanístico, equidad, igualdad y responsabilidad social',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/lida_asencios_trujillo_unmsm_aniversario_a40609ae1d.png?updated_at=2022-05-10T04:38:04.627Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dra.+Lida+Asencios+Trujillo.mp4',
	},
	{
		id: 33,
		nombre: 'Tuna Universidad Nacional Mayor de San Marcos',
		biodata: 'Los representantes más engreídos de la UNMSM',
		cita: 'La Tuna universitaria de San Marcos y la Tuna de Medicina Veterinaria queremos mandar saludos en este día a las autoridades y a todos y a cada uno de los estudiantes de San Marcos, en este nuestro aniversario, por los 471 años de nuestra amada Universidad',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/tuna_universidad_nacional_san_marcos_unmsm_aniversario_347d3e24f4.png?updated_at=2022-05-10T04:38:06.028Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/_Tuna+Universidad+Nacional+Mayor+de+San+Marcos.mp4',
	},
	{
		id: 34,
		nombre: 'Dra. Antonia Castro Rodriguez',
		biodata:
			'Jefa de la Oficina Central de Calidad Académica y Acreditación - OCCAA',
		cita: 'Desde la oficina de Calidad, les podemos dar el mensaje de seguir construyendo, de seguir trabajando por una Universidad de calidad',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/antonia_castro_rodriguez_unmsm_aniversario_2bd4064256.png?updated_at=2022-05-10T04:38:02.886Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/+Dra.+Antonia+Castro+Rodr%C3%ADguez.mp4',
	},
	{
		id: 35,
		nombre: 'Roberto Sánchez Palomino',
		biodata: 'Ministro de Comercio Exterior y Turismo del Perú',
		cita: 'Es realmente un Aniversario emblemático, pero también muy desafiante para que San Marcos siga siendo ese baluarte del humanismo, de ciencia y propositivo sobre todo para los grandes problemas del país',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/roberto_sanchez_palomino_unmsm_aniversario_ab4d5ed145.png?updated_at=2022-05-10T04:38:05.039Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/+Roberto+S%C3%A1nchez+Palomino.mp4',
	},
	{
		id: 36,
		nombre: 'Dr. Carlos Aquino Rodríguez',
		biodata:
			'Director del Centro de Estudios Asiáticos - CEAS UNMSM. Especialista en economía asiática',
		cita: 'A través del Centro de Estudios Asiáticos estamos poniendo nuestro granito de arena para que San Marcos sea, cada vez, una mejor Universidad',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/carlos_aquino_rodriguez_unmsm_aniversario_4b5f76b3e0.png?updated_at=2022-05-10T04:38:03.073Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/+Dr.+Carlos+Aquino+Rodr%C3%ADguez.mp4',
	},
	{
		id: 37,
		nombre: 'Dra. América Odar Rosario',
		biodata: 'Rectora de la Universidad Nacional del Santa - UNS',
		cita: 'San Marcos es un emblema en el Perú, que es reconocida no solo en el Perú, sino fuera de él; y es un referente para todas las universidades por la calidad que ofrece',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/america_odar_rosario_unmsm_aniversario_a0de71c42c.png?updated_at=2022-05-10T04:38:02.779Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dra.+Am%C3%A9rica+Odar+Rosario.mp4',
	},
	{
		id: 38,
		nombre: 'Tuna femenina de la Universidad Nacional de San Marcos',
		biodata: 'Primera Tuna Femenina del Perú',
		cita: 'Nos sentimos orgullosas de representar a una Institución que, a través de la historia, continúa firme en su compromiso con la educación, la ciencia, la cultura y el arte',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/tuna_femenina_unmsm_aniversario_93450553dd.png?updated_at=2022-05-10T04:38:05.747Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Tuna+Femenina+de+la+Universidad+Nacional+de+San+Marcos.mp4',
	},
	{
		id: 39,
		nombre: 'Dr. Pablo Gustavo Sandoval López',
		biodata: 'Director General de BIblioteca y Publicaciones UNMSM',
		cita: 'Desde su fundación hasta el presente, a través de estos siglos, ha desarrollado e implementado una serie de formación académica a grandes intelectuales y científicos que han aportado al desarrollo nacional',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/pablo_gustavo_sandoval_unmsm_aniversario_9b6a4ceb2e.png?updated_at=2022-05-10T04:38:04.954Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Pablo+Gustavo+Sandoval+L%C3%B3pez.mp4',
	},
	{
		id: 40,
		nombre: 'Dr. Mario Vargas Llosa',
		biodata: 'Premio Nobel de Literatura 2010. Doctor Honoris Causa UNMSM',
		cita: 'No me arrepiento nunca, ni me arrepentiré de haber elegido San Marcos como mi Alma Máter. Eran los años de Odría, cuando yo ingresé a San Marcos, y probablemente la Universidad era uno de los focos mayores de resistencia a la dictadura que padecíamos los peruanos(…)',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/mario_vargas_llosa_unmsm_aniversario_197e8cdb54.png?updated_at=2022-05-10T04:38:04.802Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Mario+Vargas+Llosa.mp4',
	},
	{
		id: 41,
		nombre: 'Dr. José Niño Montero',
		biodata: 'Vicerrector de Investigación y Posgrado',
		cita: 'Este Aniversario nos encuentra trabajando intensamente por lograr la presencialidad en nuestra Universidad(...) y venimos implementando diferentes tareas desde el Vicerrectorado de Investigación. ¡Todos juntos somos San Marcos!, los de ayer, los de hoy y los de siempre.',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/jose_nino_montero_unmsm_aniversario_367e038e58.png?updated_at=2022-05-10T04:38:04.414Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Jos%C3%A9+Ni%C3%B1o+Montero.mp4',
	},
	{
		id: 42,
		nombre: 'Dra. Jeri Ramón Ruffner',
		biodata: 'Rectora de la Universidad Nacional Mayor de San Marcos',
		cita: 'San Marcos empezó delineando la política de desarrollo del país; delineando incluso la parte social, la parte cultural, la parte de la salud y la parte de la educación. Si San Marcos hizo parte de la historia, hoy nosotros también debemos decir que tenemos que seguir en esa línea en un desarrollo sostenible de la educación para hoy y para mañana, pensando en los jóvenes del futuro',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/jeri_ramon_ruffner_unmsm_aniversario_ba540fbd6a.png?updated_at=2022-05-13T18:02:40.428Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dra.+Jeri+Ram%C3%B3n+Ruffner.mp4',
	},
];

export default saludos;
