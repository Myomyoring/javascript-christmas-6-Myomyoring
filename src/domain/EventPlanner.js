import Validation from '../validation/Validation.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Menu from './Menu.js';

class EventPlanner {
	async getDate() {
		const date = await InputView.readDate();
		Validation.visitDate(date);
		return date;
	}
	async order() {
		const userOrder = await InputView.readMenu();
		const menuization = new Menu(userOrder);
	}
	async eventPlanner() {
		OutputView.printWelcome();
		const date = await this.getDate();
		const orderMenu = await this.order();
	}
}

export default EventPlanner;
