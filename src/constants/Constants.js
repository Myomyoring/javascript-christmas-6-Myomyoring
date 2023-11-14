export const MESSAGE = {
	welcome: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
	visitDate: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
	orderMenu: '주문하실 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
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
export const BADGE = {};
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
