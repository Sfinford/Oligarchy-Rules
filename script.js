// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTop").style.opacity = "1";
  } else {
    document.getElementById("backToTop").style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  const scrollToTop = window.setInterval(function () {
    const pos = window.pageYOffset;
    if (pos > 0) {
      window.scrollTo(0, pos * 0.9); // how far to scroll on each step
    } else {
      window.clearInterval(scrollToTop);
    }
  }, 16); // how often to scroll (in milliseconds)
}
