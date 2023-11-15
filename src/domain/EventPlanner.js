import { EVENT } from '../constants/Constants.js';
import Validation from '../validation/Validation.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Menu from './Menu.js';
import MenuCalculation from './MenuCalculation.js';

class EventPlanner {
	#date;
	constructor() {
		this.#date = 0;
	}
	async getDate() {
		const date = Number(await InputView.readDate());
		Validation.visitDate(date);
		this.#date = date;
	}
	async orderMenu() {
		const userOrder = await InputView.readMenu();
		const menuization = new Menu(userOrder);
		const { orderMenuInfo, orderSheet } = menuization.getOrderInfo();
		return { orderMenuInfo, orderSheet };
	}
	async eventPlanner() {
		OutputView.printWelcome();
		await this.getDate();
		const { orderMenuInfo, orderSheet } = await this.orderMenu();
		const calculation = new MenuCalculation(this.#date, orderMenuInfo, orderSheet);
		OutputView.printPreview(date);
	}
}

export default EventPlanner;
