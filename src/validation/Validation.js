import { ERROR } from '../constants/Constants.js';

export const validation = {
	visitDate(date) {
		const outOfRange = date < 1 || date > 31;
		const empty = date.length === 0;
		const notNumber = Number.isNaN(date);
		if (outOfRange || empty || notNumber) {
			throw new Error(ERROR.visitDate);
		}
	},
};
