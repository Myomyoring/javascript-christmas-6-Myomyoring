import { Console } from '@woowacourse/mission-utils';
import { ERROR, MENU } from '../constants/Constants.js';

class Validation {
	static visitDate(date) {
		const outOfRange = date < 1 || date > 31;
		const empty = date.length === 0;
		const notNumber = Number.isNaN(date);
		if (outOfRange || empty || notNumber) {
			Console.print(ERROR.visitDate);
			throw new Error();
		}
	}
	static menuCount(count) {
		if (count < 1 || !count || Number.isNaN(count)) {
			Console.print(ERROR.menu);
			return false;
		}
		if (count > 20) {
			Console.print(ERROR.countOver);
			return false;
		}
		return true;
	}
	static menuDuplicate(menuList) {
		const duplicate = new Set(menuList).size !== menuList.length;
		if (duplicate) {
			Console.print(ERROR.menu);
			return false;
		}
		return true;
	}
	static menuExist(userMenu) {
		const exist = MENU.some((menu) => menu.name === userMenu);
		if (!exist) {
			Console.print(ERROR.menu);
			return false;
		}
		return true;
	}
	static menuOnlyBeverage(menuList) {
		const onlyBeverage = menuList.every((menu) => menu.category === 'beverage');
		if (onlyBeverage) {
			Console.print(ERROR.onlyBeverage);
			return false;
		}
		return true;
	}
}

export default Validation;
