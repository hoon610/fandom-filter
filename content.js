function removeFandomResults() {
  // Get all search result containers
  const searchResults = document.querySelectorAll('#search .g');
  
  searchResults.forEach(result => {
    // Check if the result contains a fandom.com link
    if (result.innerHTML.includes('fandom.com')) {
      result.remove();
    }
  });
}

removeFandomResults();

new MutationObserver(removeFandomResults).observe(
  document.documentElement, 
  {childList: true, subtree: true}
);