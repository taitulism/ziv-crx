import {MY_ACTION} from '../actions';

chrome.runtime.onMessage.addListener((msg, sender) => {
	const tab = sender.tab!;
	const tabId = tab.id!;
	const tabIndex = tab.index;
	const {action, data} = msg;

	switch (action) {
	case MY_ACTION:
		// doSomething();
		break;
	default:
		break;
	}

	return true;
});
