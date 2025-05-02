function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  }
  
  function showMessage() {
    document.getElementById("message").innerText = "Thanks for clicking!";
  }

  document.querySelector("button").addEventListener("click", function () {
    this.innerText = "Thanks!";
  });