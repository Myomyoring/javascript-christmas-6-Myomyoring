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
	#eachSeparate(orderMenu) {
		const menu = orderMenu.split('-');
		const menuName = menu[0];
		const count = Number(menu[1]);
		if (!Validation.menuCount(count)) {
			throw new Error();
		}
		return { menuName, count };
	}
	#separate(orderHistory) {
		let totalMenuCount = 0;
		orderHistory.forEach((orderMenu) => {
			const { menuName, count } = this.#eachSeparate(orderMenu);
			totalMenuCount += count;
			this.#orderSheet(menuName, count);
		});
		if (!Validation.menuCount(totalMenuCount)) {
			throw new Error();
		}
		return this.#userOrderSheet.map((menu) => menu.menuName);
	}
	#eachValidate(userMenu) {
		if (!Validation.menuExist(userMenu)) {
			throw new Error();
		}
	}
	#validate(menuNames) {
		if (!Validation.menuDuplicate(menuNames)) {
			throw new Error();
		}
		menuNames.forEach((userMenu) => {
			this.#eachValidate(userMenu);
			this.#orderMenuInfo.push(MENU.find((menu) => menu.name === userMenu));
		});
		if (!Validation.menuOnlyBeverage(this.#orderMenuInfo)) {
			throw new Error();
		}
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
