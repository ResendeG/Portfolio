const verMaisSobreMim = document.querySelector('#verMais-sobreMim');

verMaisSobreMim.addEventListener('click', function() {
    let sobreMim = document.querySelector('.sobre-mim')
    sobreMim.classList.toggle('active');

    if(sobreMim.classList.contains('active')) {
        return verMaisSobreMim.textContent = 'Ver menos';
    }

    verMaisSobreMim.textContent = 'Ver mais';
});