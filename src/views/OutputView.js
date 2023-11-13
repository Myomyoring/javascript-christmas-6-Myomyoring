import { Console } from '@woowacourse/mission-utils';
import { ASCII_TEXT, MESSAGE } from '../constants/Constants.js';

const OutputView = {
	printWelcome() {
		Console.print(ASCII_TEXT.welcome);
		Console.print(MESSAGE.welcome);
	},
	printMenu() {
		Console.print('<주문 메뉴>');
	},
};

export default OutputView;
