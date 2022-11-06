(function () {
  var prevScroll;

  window.addEventListener("scroll", function () {
    if (typeof prevScroll === 'undefined') {
      prevScroll = window.scrollY;
    }
    
    var topBar = document.getElementById("top-bar");
    topBar.classList.toggle("sticky", window.scrollY > 25)
    
    // Hide away the top bar after some scrolling and shows it again when scroll up starts.
    if (window.scrollY < 700 || prevScroll >= window.scrollY) {
      document.getElementById("top-bar").style.top = "0";
    } else {
      document.getElementById("top-bar").style.top = "-21vh";
    }
    prevScroll = window.scrollY;
  })
})();