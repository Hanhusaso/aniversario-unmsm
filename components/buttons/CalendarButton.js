import React from 'react';
import CalendarioIcon from '../icons/CalendarioIcon';

const CalendarButton = () => {
	return (
		<button
			className="mt-2 text-xs text-rojo shadow-md px-4 py-2 rounded-lg font-semibold flex items-center"
			onClick={() => {
				window.open(
					'https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=Mjhmczk3dHVzaGM2ZzF1YjFlYjZqNmM5ODQgY18zZnMyMDJ0ZDMzM3E4ODUxNnBlNzM3N2lqa0Bn&amp;tmsrc=c_3fs202td333q88516pe7377ijk%40group.calendar.google.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_es.gif',
					'_blank'
				);
			}}>
			<CalendarioIcon className="mr-1 fill-rojo" />
			Agendar a Google Calendar
		</button>
	);
};

export default CalendarButton;
