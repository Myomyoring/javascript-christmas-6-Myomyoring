class Utils {
	static getDayOfWeek(date) {
		const dayOfWeek = new Date(date).getDay();
		return dayOfWeek;
	}
	static priceFormat(price) {
		return price.toLocaleString();
	}
}

export default Utils;
