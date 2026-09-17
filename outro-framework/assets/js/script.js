// Seleciona elementos
var root = document.documentElement;
var btn = document.getElementById("themeToggle");

// Atualiza o ano no footer
var yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Toggle do Menu Mobile do Bulma (Navbar Burger)
document.addEventListener("DOMContentLoaded", function () {
    var navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

    navbarBurgers.forEach(function (el) {
        el.addEventListener("click", function () {
            var target = el.dataset.target;
            var $target = document.getElementById(target);

            el.classList.toggle("is-active");
            if ($target) {
                $target.classList.toggle("is-active");
            }
        });
    });
});

// Função para aplicar o tema
function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (btn) {
        if (theme === "dark") {
            btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }
}

// Verifica tema salvo
var savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme("light");
}

// Evento do botão de tema
if (btn) {
    btn.addEventListener("click", function () {
        var currentTheme = root.getAttribute("data-theme");
        if (currentTheme === "light") {
            applyTheme("dark");
        } else {
            applyTheme("light");
        }
    });
}