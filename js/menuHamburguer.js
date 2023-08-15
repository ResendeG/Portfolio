const icon = document.querySelector('.menu-hamburguer');
const iconFechar = document.querySelector('.menu-fechar');
const menu = document.querySelector('.nav-hamburguer');

icon.addEventListener('click', function () {
    menu.style.display = 'block';
    icon.style.display = 'none';
    iconFechar.style.display = 'block';
});

iconFechar.addEventListener('click', function () {
    menu.style.display = 'none';
    icon.style.display = 'block';
    iconFechar.style.display = 'none';
});

function ocultarIcon() {
    if (window.innerWidth < 1100) {
        icon.style.display = 'block';
        iconFechar.style.display = 'none';
    } else {
        icon.style.display = 'none';
        iconFechar.style.display = 'none';
        menu.style.display = 'none';
    }
}

document.addEventListener('click', function (event) {
    const target = event.target;

    if (!menu.contains(target) && target !== icon && target !== iconFechar) {
        menu.style.display = 'none';
        ocultarIcon();
    }
});

window.addEventListener('resize', ocultarIcon);

ocultarIcon();