var keyListener;

keyListener = function(e) {
	if (e.altKey && e.keyCode === 80) { // currently alt + 'p'
		chrome.extension.sendRequest({
			"title": document.title,
			"url": document.URL,
			"description": window.getSelection().toString()
		});
	} else {
		return;
	}
}

if(window === top) {
	window.addEventListener("keyup", keyListener, false);
}