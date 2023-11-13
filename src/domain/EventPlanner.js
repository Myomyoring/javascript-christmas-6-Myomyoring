import { validation } from '../validation/Validation.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class EventPlanner {
	async getDate() {
		const date = await InputView.readDate();
		validation.visitDate(date);
		return date;
	}
	async eventPlanner() {
		OutputView.printWelcome();
		const date = await this.getDate();
	}
}

export default EventPlanner;
