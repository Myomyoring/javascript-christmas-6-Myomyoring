import Utils from '../utils/Utils.js';

export const MESSAGE = {
	welcome: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
	visitDate: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
	orderMenu: '주문하실 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
	printNoting: '없음',
	preview: (date) => `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
	printMenu: (menu) => `${menu.menuName} ${menu.menuCount}개`,
	printPrice: (price) => `${Utils.priceFormat(price)}원`,
};
export const ERROR = {
	visitDate: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
	menu: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
	countOver: '[ERROR] 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다.',
	onlyBeverage: '[ERROR] 음료만 주문 시, 주문할 수 없습니다.',
};
export const MENU = [
	{ name: '양송이수프', category: 'appetizer', price: 6000 },
	{ name: '타파스', category: 'appetizer', price: 5500 },
	{ name: '시저샐러드', category: 'appetizer', price: 8000 },
	{ name: '티본스테이크', category: 'main', price: 55000 },
	{ name: '바비큐립', category: 'main', price: 54000 },
	{ name: '해산물파스타', category: 'main', price: 35000 },
	{ name: '초코케이크', category: 'dessert', price: 15000 },
	{ name: '아이스크림', category: 'dessert', price: 5000 },
	{ name: '제로콜라', category: 'beverage', price: 3000 },
	{ name: '레드와인', category: 'beverage', price: 60000 },
	{ name: '샴페인', category: 'beverage', price: 25000 },
];
export const EVENT = {
	rangePrice: 10000,
	eventDate: (date) => `2023-12-${date}`,
	weekend: [5, 6],
	specialDay: [0, 25],
	ddayMin: 1,
	ddayMax: 25,
	ddayDefaultDiscount: 1000,
	weekDefaultDiscount: 2023,
	specialDiscount: 1000,
	rangeGift: 120000,
	giftName: '샴페인',
};
export const DISCOUNT_NAME = {
	dday: '크리스마스 디데이 할인',
	weekday: '평일 할인',
	weekend: '주말 할인',
	special: '특별 할인',
	gift: '증정 이벤트',
};
export const PRINT_MENU_TITLE = {
	orderMenu: '<주문 메뉴>',
	totalOrderPrice: '<할인 전 총주문 금액>',
	gift: '<증정 메뉴>',
	discountList: '<혜택 내역>',
	totalDiscountPrice: '<총혜택 금액>',
	discountApplyPrice: '<할인 후 예상 결제 금액>',
	badge: '<12월 이벤트 배지>',
};
export const BADGE = {
	5000: '별',
	10000: '트리',
	20000: '산타',
};
export const ASCII_TEXT = {
	welcome:
		`                      ___                                           \n` +
		`                     /\\_ \\                                          \n` +
		` __  __  __     __   \\//\\ \\      ___     ___     ___ ___       __   \n` +
		'/\\ \\/\\ \\/\\ \\  /' +
		`'` +
		'__`' +
		`\\   \\ \\ \\    /'___\\  / __` +
		'`\\ /' +
		`' __` +
		'` __`\\' +
		`   /'__` +
		'`\\\n' +
		`\\ \\ \\_/ \\_/ \\/\\  __/    \\_\\ \\_ /\\ \\__/ /\\ \\L\\ \\/\\ \\/\\ \\/\\ \\ /\\  __/ \n` +
		` \\ \\___x___/'\\ \\____\\   /\\____\\\\ \\____\\\\ \\____/\\ \\_\\ \\_\\ \\_\\\\ \\____\\\n` +
		`  \\/__//__/   \\/____/   \\/____/ \\/____/ \\/___/  \\/_/\\/_/\\/_/ \\/____/\n`,
};
