window.addEventListener("scroll", function () {
  var topBar = document.getElementById("top-bar");
  topBar.classList.toggle("sticky", window.scrollY > 25)
  // Hide away the top bar after some scrolling and shows it again when scroll up starts.
  if (window.scrollY > 800) {
    document.getElementById("top-bar").style.top = "-21vh";
  } else {
    document.getElementById("top-bar").style.top = "0";
  }
})
