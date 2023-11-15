import { DISCOUNT_NAME, EVENT, MENU } from '../constants/Constants.js';
import Utils from '../utils/Utils.js';

class MenuCalculation {
	#date;
	#orderSheet;
	#orderMenuInfo;
	#totalOrderPrice;
	#discountList;
	#giftApply;

	constructor(date, orderMenuInfo, orderSheet) {
		this.#date = date;
		this.#orderSheet = orderSheet;
		this.#orderMenuInfo = orderMenuInfo;
		this.#totalOrderPrice = 0;
		this.#discountList = [];
		this.#giftApply = false;
		this.#calculator();
	}
	#calculator() {
		this.#totalPrice();
		const eventApply = this.#eventCondition();
		if (eventApply) {
			this.#discount();
		}
		if (this.#totalOrderPrice >= EVENT.rangeGift) {
			this.#specialGift();
		}
	}
	#addDiscountItem(type, discount) {
		let item = {};
		item['type'] = type;
		item['discount'] = discount;
		this.#discountList.push(item);
	}
	#totalPrice() {
		const totalPrice = this.#orderSheet.reduce((totalPrice, menu) => {
			const menuInfo = this.#orderMenuInfo.find((info) => menu.menuName === info.name);
			return totalPrice + (menuInfo ? menu.menuCount * menuInfo.price : 0);
		}, 0);
		this.#totalOrderPrice = totalPrice;
	}
	#eventCondition() {
		return this.#totalOrderPrice >= EVENT.rangePrice;
	}
	#discount() {
		const dayOfWeek = Utils.getDayOfWeek(EVENT.eventDate(this.#date));
		this.#ddayDiscount();
		this.#weekDiscount(dayOfWeek);
		this.#specialDiscount(dayOfWeek);
	}
	#ddayDiscount() {
		const range = this.#date >= EVENT.ddayMin && this.#date <= EVENT.ddayMax;
		this.#addDiscountItem(DISCOUNT_NAME.dday, range ? EVENT.ddayDefaultDiscount + 100 * (this.#date - 1) : 0);
	}
	#weekDiscount(dayOfWeek) {
		const weekend = EVENT.weekend.includes(dayOfWeek);
		const discount = this.#orderSheet.reduce((totalDiscount, menu) => {
			const menuInfo = this.#orderMenuInfo.find((info) => menu.menuName === info.name);
			const match = menuInfo.category === (weekend ? 'main' : 'dessert');
			return totalDiscount + (match ? menu.menuCount * EVENT.weekDefaultDiscount : 0);
		}, 0);
		this.#addDiscountItem(weekend ? DISCOUNT_NAME.weekend : DISCOUNT.weekday, discount);
	}
	#specialDiscount(dayOfWeek) {
		const range = EVENT.specialDay.includes(dayOfWeek) || EVENT.specialDay.includes(this.#date);
		if (range) {
			this.#addDiscountItem(DISCOUNT_NAME.special, EVENT.specialDiscount);
		}
	}
	#specialGift() {
		const gift = MENU.find((menu) => menu.name === EVENT.giftName);
		this.#addDiscountItem(DISCOUNT_NAME.gift, gift.price);
		this.#giftApply = true;
	}
	getTotalOrderPrice() {
		return this.#totalOrderPrice;
	}
	getDiscountList() {
		return this.#discountList;
	}
	getGiftApply() {
		return this.#giftApply;
	}
}

export default MenuCalculation;
