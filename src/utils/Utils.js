class Utils {
	static getDayOfWeek(date) {
		const dayOfWeek = new Date(date).getDay();
		return dayOfWeek;
	}
}

export default Utils;
