const saludos = [
	{
		id: 1,
		nombre: 'Dra. Jeri Ramón Ruffner',
		biodata: 'Rectora de la Universidad Nacional Mayor de San Marcos',
		cita: 'San Marcos empezó delineando la política de desarrollo del país; delineando incluso la parte social, la parte cultural, la parte de la salud y la parte de la educación. Si San Marcos hizo parte de la historia, hoy nosotros también debemos decir que tenemos que seguir en esa línea en un desarrollo sostenible de la educación para hoy y para mañana, pensando en los jóvenes del futuro',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/jeri_ramon_ruffner_unmsm_aniversario_ba540fbd6a.png?updated_at=2022-05-13T18:02:40.428Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dra.+Jeri+Ram%C3%B3n+Ruffner.mp4',
	},
	{
		id: 2,
		nombre: 'Dra. Ruth Shady Solis',
		biodata:
			'Jefa de la Zona Arqueológica Caral. Catedrática Postgrado Fac. Ciencias Sociales',
		cita: 'Como sanmarquina he cumplido 53 años de trabajo dentro de la Universidad, y me siento muy contenta de que podamos presentar para el Perú y el mundo los resultados de la investigación que hemos venido realizando en equipo',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/ruth_shady_unmsm_aniversario_76c0734d5b.png?updated_at=2022-05-03T16:55:08.526Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dra.+Ruth+Shady+Solis.mp4',
	},
	{
		id: 3,
		nombre: 'Dr. Hugo Oscar Juri',
		biodata: 'Rector de la Universidad Nacional de Córdoba - Argentina',
		cita: 'Es un placer participar, aunque sea de manera virtual, de esta ceremonia que por primera vez en la historia, de esta la más antigua de la Universidades de América tiene una Rectora mujer; lo cual es un orgullo para todos nosotros, los latinoamericanos',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/hugo_oscar_juri_unmsm_aniversario_4084aa2cea.png?updated_at=2022-05-10T04:38:03.225Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Hugo+Oscar+Juri.mp4',
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
		nombre: 'Historiador Hugo La Rosa Cordero',
		biodata: 'Coordinador Archivo y Planoteca de Prolima',
		cita: 'San Marcos mantiene una continuidad histórica que no se detiene ni con pandemias, ni con crisis política, ni crisis económicas',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/hugo_la_rosa_unmsm_aniversario_08363eb43b.png?updated_at=2022-04-28T22:35:43.945Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Historiador+Hugo+La+Rosa+Cordero+-+Egresado+EP+Historia+-+Facultad+de+Ciencias+Sociales.mp4',
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
		nombre: 'Ing. Omar del Carpio',
		biodata: 'Director Ejecutuivo de la Red IDI',
		cita: 'La UNMSM es una institución líder en investigación, desarrollo e innovación',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/omar_del_carpio_unmsm_aniversario_3216fbe425.png?updated_at=2022-04-28T22:35:45.172Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Ing.+Omar+Del+Carpio+Rodr%C3%ADguez+-+Director+Ejecutivo+de+la+Red+Idi.mp4',
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
		nombre: 'Mario Urbina Schmitt',
		biodata: 'Paleontólogo e investigador del Museo de Historia Natural',
		cita: 'San Marcos es una de las instituciones más prestigiosas que tenemos para la ciencia en el Perú',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/mario_urbina_schmitt_unmsm_aniversario_545db1bc82.png?updated_at=2022-04-28T22:35:44.074Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Mario+Urbina+Schmitt.mp4',
	},
	{
		id: 41,
		nombre: 'Dr. Antonio Jeri Chávez',
		biodata:
			'Rector de la Universidad Nacional San Cristóbal de Huamanga - UNSCH',
		cita: 'Hacemos votos para que continúen impartiendo educación superior, manteniendo su tradición, prestigio, calidad y selectividad. ¡Feliz Aniversario!',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/antonio_jeri_chavez_unmsm_aniversario_383bc37228.png?updated_at=2022-05-10T04:38:02.956Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/+Dr.+Antonio+Jer%C3%AD+Ch%C3%A1vez.mp4',
	},
	{
		id: 42,
		nombre: 'Dr. Ricardo Rivero Ortega',
		biodata: 'Rector de la Universidad de Salamanca - España',
		cita: 'La Universidad de Salamanca se siente hermanada con el Claustro Sanmarquino, y desea siglos de futuro para la mejor Universidad del Perú y a todas las hermanas del sistema universitario peruano. ¡Enhorabuena!',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/ricardo_rivero_ortega_unmsm_aniversario_61884411bf.png?updated_at=2022-05-10T04:38:04.655Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Ricardo+Rivero+Ortega.mp4',
	},
	{
		id: 43,
		nombre: 'Dr. Jorge Leonardo Jave Nakayo',
		biodata: 'Director Ejecutivo Centro Preuniversitario - UNMSM',
		cita: 'Institución que formó en sus aulas a ilustres peruanos, grandes académicos y pensadores que fueron protagonistas de nuestra historia.',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/jorge_leonardo_unmsm_aniversario_unmsm_aniversario_561f47b683.png?updated_at=2022-05-16T15:06:51.370Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Jorge+Leonardo+Jave+Nakayo.mp4',
	},
	{
		id: 44,
		nombre: 'Dr. Victor Suárez Moreno',
		biodata: 'Jefe del Instituto Nacional de Salud - MINSA',
		cita: 'Queremos agradecer y saludar por el trabajo colaborativo que venimos desarrollando, desde hace muchos años, con la Universidad; ejemplo de ello, es el Centro de Investigación de Enfermedades Tropicales, del INS que se encuentra en Iquitos.',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/victor_suarez_unmsm_aniversario_3966d4c173.png?updated_at=2022-05-16T15:06:51.284Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Victor+Su%C3%A1rez+Moreno.mp4',
	},
	{
		id: 45,
		nombre: 'Lic. Félix Alberto Paz Quiroz',
		biodata: 'Director de Andina y El Peruano',
		cita: 'Hoy se conmemora, una vez más, el día de nuestra fundación; la fundación de nuestra Alma Mater; la fundación de la Universidad que ha marcado la historia de nuestro país.',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/felix_alberto_paz_quiroz_unmsm_aniversario_f8035e5d87.png?updated_at=2022-05-16T15:06:51.085Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Lic.+F%C3%A9lix+Alberto+Paz+Quiroz.mp4',
	},
	{
		id: 46,
		nombre: 'Dr. Américo Mendoza Mori',
		biodata:
			'Catedrático de la Universidad de Harvard. Egresado de la EP de Literatura - FLCH',
		cita: 'Que también sea una época para reconocer todo el legado que se sigue construyendo desde el pasado hasta este momento por sus egresados y su impacto en nuestra sociedad.',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/americo_mendoza_mori_unmsm_aniversario_c9b17d214e.png?updated_at=2022-05-16T15:06:46.991Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Am%C3%A9rico+Mendoza+Mori.mp4',
	},
	{
		id: 47,
		nombre: 'Ytalo Ramiro Sánchez Simeón',
		biodata:
			'Gerente general de AppStorm Group SAC. Egresado de la Facultad de Ingeniería de Sistemas e Informática',
		cita: 'Quiero desearle un feliz Aniversario a mi Universidad; a la Universidad Nacional Mayor de San Marcos. Un saludo para todas las personas, estudiantes y administrativos.',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/ytalo_ramiro_sanchez_simeon_unmsm_aniversario_e2861b8643.png?updated_at=2022-05-16T15:06:47.536Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Ytalo+Ramiro+S%C3%A1nchez+Sime%C3%B3n.mp4',
	},
	{
		id: 48,
		nombre: 'Dr. Sergio Milton Padilla Cortez, PhD',
		biodata:
			'Rector de la Universidad Mayor, real y Pontificia de San Francisco Xavier de Chuquisaca',
		cita: 'Quiero mandar un mensaje de ciencia y academia, de investigación y desarrollo para la Universidad Nacional San Marcos de Lima; 471 años de vida reflejan todo un caminar.',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/sergio_milton_padilla_cortez_unmsm_aniversario_b833bd4a13.png?updated_at=2022-05-16T15:06:47.508Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Sergio+Milton+Padilla+Cortez%2C+PhD.mp4',
	},
	{
		id: 49,
		nombre: 'Dr. Alberto Edgardo Barbieri',
		biodata: 'Rector de la Universidad de Buenos Aires - UBA',
		cita: 'Un saludo a toda la comunidad de nuestra hermana Universidad Nacional Mayor de San Marcos en este su 471.° Aniversario, de la Decana de las Universidades de nuestro Continente; en especial saludar a toda su comunidad universitaria y a su Rectora, la doctora Jeri Ramón Ruffner, de parte de toda la comunidad de la UBA.',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/alberto_edgardo_barbieri_unmsm_aniversario_980f29735a.png?updated_at=2022-05-16T15:06:47.489Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Alberto+Edgardo+Barbieri.mp4',
	},
	{
		id: 50,
		nombre: 'Dr. Rodrigo Arim',
		biodata: 'Rector de la Universidad de la República',
		cita: 'Desde Uruguay, con mucho cariño, saludamos a la UNMSM en este aniversario con el convencimiento que estaremos atravesando en los próximos años canales de encuentro, de acuerdo y de políticas para defender la universidad latinoamericana como trampolín y soporte de nuestras democracias',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/rodrigo_arim_unmsm_aniversario_d537d68c67.png?updated_at=2022-05-16T15:06:47.196Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Rodrigo+Arim.mp4',
	},
	{
		id: 51,
		nombre: 'Dr. Eleazar Crucinta Ugarte',
		biodata:
			'Rector de la Universidad Nacional San Antonio Abad del Cusco - UNSAAC',
		cita: 'San Marcos es la universidad de todas las sangres, confluyen allí los pensamientos, los quehaceres y las grandes vicisitudes de nuestra patria. San Marcos representa la sangre peruana.',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/eleazar_crucinta_ugarte_unmsm_aniversario_de3aa2844b.png?updated_at=2022-05-16T15:06:47.596Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Eleazar+Crucinta+Ugarte.mp4',
	},
	{
		id: 52,
		nombre: 'Dr. Edgardo Félix Palomino Torres',
		biodata: 'Rector de la Universidad Nacional de Huancavelica',
		cita: 'Hago extensivo el saludo fraterno a los docentes, trabajadores administrativos, estudiantes y egresados, deseándoles que continúen trabajando por la calidad académica y el desarrollo de la investigación que son los pilares fundamentales que nos permiten formar profesionales competitivos que trabajan por el desarrollo del país.',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/edgardo_felix_palomino_torres_unmsm_aniversario_5d08a52d7f.png?updated_at=2022-05-16T15:06:48.642Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Edgardo+F%C3%A9lix+Palomino+Torres.mp4',
	},
	{
		id: 53,
		nombre: 'Mg. Marco Antonio Gamero',
		biodata: 'Director del Hospital Dos de Mayo',
		cita: 'Los lazos de la Universidad Nacional Mayor de San Marcos y el Hospital Dos de Mayo han sido y, espero sigan siendo, históricos; como por ejemplo recordando a Daniel Alcides Carrión y Guillermo Castañeda Espinoza. ¡Feliz Aniversario, San Marcos!',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/marco_antonio_gamero_unmsm_aniversario_c775d409fb.png?updated_at=2022-05-16T15:06:48.859Z',
		video: '',
	},
	{
		id: 54,
		nombre: 'Dr. Enrique Luis Graue Wiechers',
		biodata: 'Rector de la Universidad Nacional Autónoma de México',
		cita: 'Saludo también, con mucho gusto, a toda la comunidad académica y universitaria, y los felicito por el enorme compromiso que tienen con la educación superior que, como todos sabemos, es una herramienta esencial para la movilidad y el bienestar de nuestras naciones.',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/enrique_luis_graue_wiechers_unmsm_aniversario_3e61e05130.png?updated_at=2022-05-16T15:06:49.353Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Enrique+Luis+Graue+Wiechers.mp4',
	},
	{
		id: 55,
		nombre: 'Dra. Pilar Aranda Ramírez',
		biodata: 'Rectora de la Universidad de Granada - España',
		cita: 'Compartir esos valores de lo que representaba la fortaleza, lo que representaba la verdad, lo que representaba la ciencia con la Universidad de San Marcos para nosotros constituye un inmenso orgullo. Son muchos los años los que ya venimos teniendo una colaboración estrecha que estamos incrementando hacia una cooperación mayor.',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/pilar_aranda_ramirez_unmsm_aniversario_950c23307f.png?updated_at=2022-05-16T15:06:49.496Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dra.+Pilar+Aranda+Ram%C3%ADrez.mp4',
	},
	{
		id: 56,
		nombre: 'Marcos Gasco Arrobas',
		biodata: 'Presidente de AMPE',
		cita: 'Para los peruanos, desde hace muchas generaciones, uno de los mayores orgullos que tenemos es nuestra Universidad Decana de América; la primera de América, la Universidad San Marcos.',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/marcos_gasco_arrobas_unmsm_aniversario_ca3fe7e9a8.png?updated_at=2022-05-16T15:06:49.521Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Marcos+Gasco+Arrobas.mp4',
	},
	{
		id: 57,
		nombre: 'Aníbal Torres',
		biodata: 'Presidente del Consejo de Ministros',
		cita: 'Se trata, sin duda, de un año de vida institucional dedicada al ejercicio de la democracia, la gobernabilidad y la búsqueda incansable del bien común; con una presencia activa en la sociedad, formulando ideas y formulando propuestas en beneficio del todo país, sobre todo de quienes más necesita.',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/anibal_torres_unmsm_aniversario_64f5f367d0.png?updated_at=2022-05-16T15:06:49.498Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/An%C3%ADbal+Torres.mp4',
	},
	{
		id: 58,
		nombre: 'Dra. Cristina Asunción Alzamora Rivero',
		biodata: 'Rectora de la Universidad Nacional Federico Villarreal',
		cita: 'El legado que dejaron sus ilustres egresados en las diferentes áreas del conocimiento, así como en la vida política de la nación, son el faro que alumbra las nuevas generaciones, quienes se vienen formando con el mismo ahínco y tesón de los grandes hombres que consolidaron con sus ideas el fortalecimiento de nuestra Independencia.',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/cristina_asuncion_alzamora_rivero_unmsm_aniversario_3b8925c396.png?updated_at=2022-05-16T15:06:50.151Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dra.+Cristina+Asunci%C3%B3n+Alzamora+Rivero.mp4',
	},
	{
		id: 59,
		nombre: 'Dra. Arcelia Rojas Salazar',
		biodata: 'Rectora de la Universidad Nacional del Callao',
		cita: '“En mi condición de Rectora de la Universidad Nacional del Callao reafirmo nuestro compromiso de seguir esforzándonos por la mejora de la calidad continúa en el ámbito académico de investigación y nuestra visión universitaria con responsabilidad social.',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/arcelia_rojas_salazar_unmsm_aniversario_689423e319.png?updated_at=2022-05-16T15:06:50.476Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dra.+Arcelia+Olga+Rojas+Salazar.mp4',
	},
	{
		id: 60,
		nombre: 'Dr. Javier Franco Gonzáles',
		biodata:
			'Decano de la Facultad de Ingeniería Mecánica - Universidad Nacional de Ingeniería',
		cita: 'Les deseamos muchos éxitos en estos 417.° Aniversario, yo creo, que de la mano de la Dra. Jeri Ramón Ruffner, primera rectora de San Marcos, la Decana de América, seguirá para adelante.',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/javier_franco_gonzales_unmsm_aniversario_02bb65a591.png?updated_at=2022-05-16T15:06:51.344Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Javier+Franco+Gonz%C3%A1les.mp4',
	},
	{
		id: 61,
		nombre: 'Dr. Olger Ramos Coaguira',
		biodata: 'Director de la Estación Ivita - FMV UNMSM',
		cita: 'A nombre de todo el personal docente y trabajadores de la Estación queremos expresar un afectuoso saludo a todo personal docente y trabajadores de la Universidad por el aniversario de nuestra Alma Máter.',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/dr_olger_ramos_coaguira_unmsm_aniversario_a29a21e5b1.png?updated_at=2022-05-19T17:30:39.754Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Olger+Ramos+Coaguila.mp4',
	},
	{
		id: 62,
		nombre: 'Dr. Mario Vargas Llosa',
		biodata: 'Premio Nobel de Literatura 2010. Doctor Honoris Causa UNMSM',
		cita: 'No me arrepiento nunca, ni me arrepentiré de haber elegido San Marcos como mi Alma Máter. Eran los años de Odría, cuando yo ingresé a San Marcos, y probablemente la Universidad era uno de los focos mayores de resistencia a la dictadura que padecíamos los peruanos(…)',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/mario_vargas_llosa_unmsm_aniversario_197e8cdb54.png?updated_at=2022-05-10T04:38:04.802Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Mario+Vargas+Llosa.mp4',
	},

	{
		id: 63,
		nombre: 'Dr. José Niño Montero',
		biodata: 'Vicerrector de Investigación y Posgrado',
		cita: 'Este Aniversario nos encuentra trabajando intensamente por lograr la presencialidad en nuestra Universidad(...) y venimos implementando diferentes tareas desde el Vicerrectorado de Investigación. ¡Todos juntos somos San Marcos!, los de ayer, los de hoy y los de siempre.',
		img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/jose_nino_montero_unmsm_aniversario_367e038e58.png?updated_at=2022-05-10T04:38:04.414Z',
		video: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/videos/Dr.+Jos%C3%A9+Ni%C3%B1o+Montero.mp4',
	},
];

export default saludos;
