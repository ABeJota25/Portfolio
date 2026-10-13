const BACK_TO_TOP = document.createElement('button')

//Configuración del botón de vuelta al inicio de la web

BACK_TO_TOP.id = 'backToTop'
BACK_TO_TOP.title = 'Volver al inicio de la web'
BACK_TO_TOP.innerHTML = '<i class="ri-arrow-up-line"></i>'

//Adición del elemento al body

document.body.appendChild(BACK_TO_TOP)

//Mostrar el elemento según el scroll del usuario

window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
        BACK_TO_TOP.classList.add('mostrar')
    } else {
        BACK_TO_TOP.classList.remove('mostrar')
    }
})

// Volver al inicio de la web si se pulsa el botón

BACK_TO_TOP.addEventListener('click', () => {
    window.scrollTo({top: 0})
})