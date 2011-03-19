var pageInfo;

pageInfo = {
	"title": document.title,
	"url": document.URL,
	"description": window.getSelection().toString()
}

chrome.extension.sendRequest(pageInfo);