window.onload = function() {
    var count = localStorage.getItem("visitorCount");
    if (count) {
      count = parseInt(count) + 1;
    } else {
      count = 1;
    }
    localStorage.setItem("visitorCount", count);
    document.getElementById("visitorCount").textContent = count;
  };
