import { Console } from '@woowacourse/mission-utils';
import { ASCII_TEXT, MESSAGE, PRINT_MENU_TITLE } from '../constants/Constants.js';

const OutputView = {
	printNewLine() {
		Console.print('');
	},
	printWelcome() {
		Console.print(ASCII_TEXT.welcome);
		Console.print(MESSAGE.welcome);
		this.printNewLine();
	},
	printPreview(date) {
		Console.print(MESSAGE.preview(date));
		this.printNewLine();
	},
	printMenu() {
		this.printNewLine();
		Console.print(PRINT_MENU_TITLE.orderMenu);
	},
};

export default OutputView;
