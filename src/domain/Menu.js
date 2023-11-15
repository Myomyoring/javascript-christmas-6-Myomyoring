import { MENU } from '../constants/Constants.js';
import Validation from '../validation/Validation.js';

class Menu {
	#userOrderSheet;
	#orderMenuInfo;

	constructor(userOrder) {
		this.#userOrderSheet = [];
		this.#orderMenuInfo = [];
		this.#menuization(userOrder);
	}
	#menuization(userOrder) {
		const orderHistory = userOrder.split(',');
		const menuNames = this.#separate(orderHistory);
		this.#validate(menuNames);
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
		menuNames.forEach((userMenu) => {
			Validation.menuExist(userMenu);
			this.#orderMenuInfo.push(MENU.find((menu) => menu.name === userMenu));
		});
		Validation.menuOnlyBeverage(this.#orderMenuInfo);
	}
	#orderSheet(menuName, count) {
		let order = {};
		order['menuName'] = menuName;
		order['menuCount'] = count;
		this.#userOrderSheet.push(order);
	}
	getOrderInfo() {
		return { orderMenuInfo: this.#orderMenuInfo, orderSheet: this.#userOrderSheet };
	}
}

export default Menu;
