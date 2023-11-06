export function sendActionMsg (
	action: string,
	data?: unknown,
) {
	// console.log('[ACTION]', action, data);
	return chrome.runtime.sendMessage({action, data});
}
