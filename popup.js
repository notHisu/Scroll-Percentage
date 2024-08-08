browser.runtime.onMessage.addListener((message) => {
  if (message.scrollPercent !== undefined) {
    document.getElementById(
      "percentage"
    ).textContent = `${message.scrollPercent}%`;
  }
});
