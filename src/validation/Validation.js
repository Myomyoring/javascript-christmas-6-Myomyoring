import { ERROR, MENU } from '../constants/Constants.js';

class Validation {
	static visitDate(date) {
		const outOfRange = date < 1 || date > 31;
		const empty = date.length === 0;
		const notNumber = Number.isNaN(date);
		if (outOfRange || empty || notNumber) {
			throw new Error(ERROR.visitDate);
		}
	}
	static menuCount(count) {
		if (count < 1 || !count || Number.isNaN(count)) {
			throw new Error(ERROR.menu);
		}
		if (count > 20) {
			throw new Error(ERROR.countOver);
		}
	}
	static menuDuplicate(menuList) {
		const duplicate = new Set(menuList).size !== menuList.length;
		if (duplicate) {
			throw new Error(ERROR.menu);
		}
	}
	static menuExist(userMenu) {
		const exist = MENU.some((menu) => menu.name === userMenu);
		if (!exist) {
			throw new Error(ERROR.menu);
		}
	}
	static menuOnlyBeverage(menuList) {
		const onlyBeverage = menuList.every((menu) => menu.category === 'beverage');
		if (onlyBeverage) {
			throw new Error(ERROR.onlyBeverage);
		}
	}
}

export default Validation;
