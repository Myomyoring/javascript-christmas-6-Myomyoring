import EventPlanner from './domain/EventPlanner.js';

class App {
	async run() {
		try {
			const planner = new EventPlanner();
			await planner.eventPlanner();
		} catch (error) {
			throw error;
		}
	}
}

export default App;
