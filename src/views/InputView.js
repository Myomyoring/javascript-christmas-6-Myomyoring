import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/Constants.js';

const InputView = {
	async readDate() {
		return Number(await Console.readLineAsync(MESSAGE.visitDate));
	},
};

export default InputView;
