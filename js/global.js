document.addEventListener("DOMContentLoaded", () => {
    // Header
    fetch("/components/header.html")
        .then(response => {
            if (!response.ok) throw new Error("No se encontró el header");
            return response.text();
        })
        .then(html => {
            document.getElementById("header-container").innerHTML = html;
            setActiveLink();
            initMobileMenu();
        })
        .catch(error => console.error('Error cargando header:', error));

    // Footer
    fetch("/components/footer.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("footer-container").innerHTML = html;
        });

    window.addEventListener('scroll', revealElements);
});

// --- FUNCIONES AUXILIARES ---

function setActiveLink() {
    const links = document.querySelectorAll("#navbar a");
    const currentUrl = window.location.href;

    links.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add("active");
        }
    });
}

function initMobileMenu() {
    const bar = document.getElementById("bar");
    const close = document.getElementById("close");
    const nav = document.getElementById("navbar");

    if (bar && nav) {
        bar.addEventListener("click", () => {
            nav.classList.add("active");
        });
    }

    if (close && nav) {
        close.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    }
}

window.addEventListener('scroll', revealElements);
function revealElements() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
revealElements();