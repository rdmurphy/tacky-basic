chrome.extension.sendRequest({
	"title": document.title,
	"url": document.URL,
	"description": window.getSelection().toString()
});