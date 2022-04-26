import React from 'react';
import CalendarioIcon from '../icons/CalendarioIcon';

const CalendarButton = ({ link }) => {
	return (
		<button
			className="mt-2 text-xs text-rojo shadow-md px-4 py-2 rounded-lg font-semibold flex items-center"
			onClick={() => {
				window.open(`${link}`, '_blank');
			}}>
			<CalendarioIcon className="mr-1 fill-rojo" />
			Agendar a Google Calendar
		</button>
	);
};

export default CalendarButton;
