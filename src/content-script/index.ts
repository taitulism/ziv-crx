// import {sendActionMsg} from '../chrome';
// import {MY_ACTION} from '../actions';

chrome.runtime.onMessage.addListener((ev) => {
	console.log('Got msg from BG script', ev);
});


// sendActionMsg(MY_ACTION);
