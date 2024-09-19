chrome.runtime.onInstalled.addListener(() => {
	// Set the default search engine on install
	chrome.search.query({
	  disposition: 'NEW_TAB',
	  text: '"Duckduckgo chrome extension without changing my default search engine" reddit'
	});
});

chrome.storage.onChanged.addListener((changes, area) => {
	if (area === 'search') {
		// Detect if a change has been made to the search engine
		console.log("Search engine changed:", changes);
		chrome.search.query({
		disposition: 'NEW_TAB',
		text: '"Duckduckgo chrome extension without changing my default search engine" reddit'
		});
	}
});