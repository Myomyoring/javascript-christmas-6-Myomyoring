import { MENU } from '../constants/Constants.js';
import Validation from '../validation/Validation.js';

class Menu {
	#userOrderSheet;

	constructor(userOrder) {
		this.#userOrderSheet = [];
		this.#menuization(userOrder);
	}
	#menuization(userOrder) {
		const orderHistory = userOrder.split(',');
		const menuNames = this.#separate(orderHistory);
		const orderMenuInfo = this.#validate(menuNames);
	}
	#separate(orderHistory) {
		let totalMenuCount = 0;
		orderHistory.forEach((orderMenu) => {
			const menu = orderMenu.split('-');
			const menuName = menu[0];
			const count = Number(menu[1]);
			Validation.menuCount(count);
			totalMenuCount += count;
			this.#orderSheet(menuName, count);
		});
		Validation.menuCount(totalMenuCount);
		return this.#userOrderSheet.map((menu) => menu.menuName);
	}
	#validate(menuNames) {
		Validation.menuDuplicate(menuNames);
		const menuList = [];
		menuNames.forEach((userMenu) => {
			Validation.menuExist(userMenu);
			menuList.push(MENU.find((menu) => menu.name === userMenu));
		});
		Validation.menuOnlyBeverage(menuList);
		return menuList;
	}
	#orderSheet(menuName, count) {
		let sheet = {};
		sheet['menuName'] = menuName;
		sheet['menuCount'] = count;
		this.#userOrderSheet.push(sheet);
	}
	#calculator() {}
}

export default Menu;
