let verMais = document.querySelector('#ver-mais');

verMais.addEventListener('click', function() {
    let habilidades = document.querySelector('.habilidades')
    habilidades.classList.toggle('active');

    if(habilidades.classList.contains('active')) {
        return verMais.textContent = 'Ver menos';
    }

    verMais.textContent = 'Ver mais';
});