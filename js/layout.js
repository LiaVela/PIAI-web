fetch("components/header.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("header-container").innerHTML = html;
    setActiveLink(); // ← aquí
  });

fetch("components/footer.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("footer-container").innerHTML = html;
  });

function setActiveLink() {
  const links = document.querySelectorAll("#navbar a");
  const currentPage = location.pathname.split("/").pop() || "index.html";

  links.forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active");
    }
  });
}
