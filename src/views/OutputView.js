import { Console } from '@woowacourse/mission-utils';
import { ASCII_TEXT, MESSAGE, PRINT_MENU_TITLE } from '../constants/Constants.js';

const OutputView = {
	printNewLine() {
		Console.print('');
	},
	printWelcome() {
		Console.print(ASCII_TEXT.welcome);
		Console.print(MESSAGE.welcome);
	},
	printPreview(date) {
		Console.print(MESSAGE.preview(date));
	},
	printMenu(orderSheet) {
		this.printNewLine();
		Console.print(PRINT_MENU_TITLE.orderMenu);
		orderSheet.forEach((menu) => Console.print(MESSAGE.printMenu(menu)));
	},
	printPreviewDiscount(calculation) {
		this.printTotalOrderPrice(calculation.getTotalOrderPrice());
		this.printGiftApply(calculation.getGiftApply());
		this.printDiscountList(calculation.getDiscountList());
	},
	printTotalOrderPrice(totalOrderPrice) {
		this.printNewLine();
		Console.print(PRINT_MENU_TITLE.totalOrderPrice);
		Console.print(MESSAGE.printPrice(totalOrderPrice));
	},
	printGiftApply(giftApply) {
		this.printNewLine();
		Console.print(PRINT_MENU_TITLE.gift);
		Console.print(giftApply ? MESSAGE.printGift(EVENT.giftName) : MESSAGE.printNoting);
	},
	printDiscountList(discountList) {
		this.printNewLine();
		Console.print(PRINT_MENU_TITLE.discountList);
		discountList.length === 0 && Console.print(MESSAGE.printNoting);
		discountList.forEach((item) => {
			item.discount !== 0 && Console.print(MESSAGE.printDiscount(item));
		});
	},
};

export default OutputView;
