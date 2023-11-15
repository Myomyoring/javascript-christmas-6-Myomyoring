import { Console } from '@woowacourse/mission-utils';
import { ASCII_TEXT, BADGE, EVENT, MESSAGE, PRINT_MENU_TITLE } from '../constants/Constants.js';

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
		this.printTotalDiscountPrice(calculation.getTotalDiscountPrice());
		this.printDiscountApplyPrice(calculation.getDiscountApplyPrice());
		this.printBadge(calculation.getTotalDiscountPrice());
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
	printTotalDiscountPrice(totalDiscountPrice) {
		this.printNewLine();
		Console.print(PRINT_MENU_TITLE.totalDiscountPrice);
		Console.print(MESSAGE.printTotalDiscount(totalDiscountPrice));
	},
	printDiscountApplyPrice(discountApplyPrice) {
		this.printNewLine();
		Console.print(PRINT_MENU_TITLE.discountApplyPrice);
		Console.print(MESSAGE.printPrice(discountApplyPrice));
	},
	printBadge(totalDiscountPrice) {
		this.printNewLine();
		const badgeRange = Object.keys(BADGE);
		const maxRange = Math.max(...badgeRange.filter((range) => range < totalDiscountPrice));
		Console.print(PRINT_MENU_TITLE.badge);
		Console.print(BADGE[maxRange] ?? MESSAGE.printNoting);
	},
};

export default OutputView;
