import React, { useState } from 'react';

import { OptionVideo } from './OptionVideo';
import { Todos } from './Todos';
import { Sedes } from './Sedes';
import { Institucionales } from './Institucionales';
import { Miscelanea } from './Miscelanea';

export const Videos = () => {
	const types = ['Todos', 'Sedes', 'Institucionales', 'Miscelánea'];
	const [active, setActive] = useState(types[0]);

	const listaVideos = (nombre) => {
		switch (nombre) {
			case 'Todos':
				return <Todos />;
			case 'Sedes':
				return <Sedes />;
			case 'Institucionales':
				return <Institucionales />;
			case 'Miscelánea':
				return <Miscelanea />;
			default:
				return <Todos />;
		}
	};

	return (
		<div className="container mx-auto py-20 px-20">
			<h2 className="text-center text-5xl text-amarillo mb-4 font-bold">
				Videos de aniversario
			</h2>
			<ul className="flex items-center justify-center mb-4">
				{types.map((type) => (
					<OptionVideo
						key={type}
						active={active === type}
						nombre={type}
						setActive={setActive}
					/>
				))}
			</ul>

			{listaVideos(active)}
		</div>
	);
};
