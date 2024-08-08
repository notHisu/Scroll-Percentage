function calculateScrollPercentage() {
  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercentage = (scrollTop / (docHeight - winHeight)) * 100;
  return Math.round(scrollPercentage);
}

function updateScrollPercentage() {
  let scrollPercent = calculateScrollPercentage();
  //browser.runttime.sendMessage({ scrollPercent: scrollPercent });
  document.title = `${scrollPercent}% ${originalTitle}`;
}

function hasScrollbar() {
  return document.body.offsetHeight > window.innerHeight;
}

const originalTitle = document.title;

if (hasScrollbar()) {
  window.addEventListener("scroll", updateScrollPercentage);
  updateScrollPercentage();
}
