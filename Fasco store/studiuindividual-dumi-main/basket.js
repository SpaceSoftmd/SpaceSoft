let cos = document.getElementsByClassName('cos')[0]
let total = 0

const actualizareBon = () => {
    document.getElementsByClassName('bonTotal')[0].innerHTML = `$${total}`
}

const actualizareInfo = (bloc, cantitate, sumaBloc) => {
    bloc.querySelector('.cantitate').innerHTML = cantitate
    bloc.querySelector('.suma-bloc').innerHTML = `$${sumaBloc}`
}

const esteNumar = (x) => !isNaN(x)

for (let cheie in localStorage) {
    if (esteNumar(cheie)) {
        let obiect = JSON.parse(localStorage.getItem(cheie))
        let sumaBloc = obiect.pret
        let cantitate = 1

        total += obiect.pret

        let bloc = document.createElement('div')
        bloc.className = 'bloc'
        bloc.innerHTML = `
            <img src="${obiect.imagine}">
            <div class="item">
                <h3>${obiect.nume}</h3>
                <button class="sterge">Sterge</button>
            </div>
            <h3>$${obiect.pret}</h3>
            <div class="butoane">
                <button class="scade">-</button>
                <h3 class="cantitate">1</h3>
                <button class="adauga">+</button>
            </div>
            <h3 class="suma-bloc">$${sumaBloc}</h3>
        `

        bloc.querySelector('.scade').addEventListener('click', () => {
            if (cantitate > 1) {
                cantitate--
                sumaBloc -= obiect.pret
                total -= obiect.pret

                actualizareInfo(bloc, cantitate, sumaBloc)
                actualizareBon()
            }
        })
        bloc.querySelector('.adauga').addEventListener('click', () => {
            cantitate++
            sumaBloc += obiect.pret
            total += obiect.pret

            actualizareInfo(bloc, cantitate, sumaBloc)
            actualizareBon()
        })
        bloc.querySelector('.item .sterge').addEventListener('click', () => {
            localStorage.removeItem(cheie)
            location.reload()
        })
        cos.appendChild(bloc)
    }
}

document.getElementsByClassName('exec-comanda')[0].addEventListener('click', () => {
    localStorage.clear()
    location.reload()
})
actualizareBon()