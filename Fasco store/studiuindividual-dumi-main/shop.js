let container = document.getElementsByClassName('bloc-container')[0]
let blocuri = [
    {
        imagine: 'imagini/Pagina2/s1-img1.png',
        nume: 'Rounded Red Hat',
        pret: 8
    },
    {
        imagine: 'imagini/Pagina2/s1-img2.png',
        nume: 'Linen-blend Shirt',
        pret: 17
    },
    {
        imagine: 'imagini/Pagina2/s1-img3.png',
        nume: 'Long-sleeve Coat',
        pret: 106
    },
    {
        imagine: 'imagini/Pagina2/s1-img4.png',
        nume: 'Boxy Denim Hat',
        pret: 25
    },
    {
        imagine: 'imagini/Pagina2/s1-img5.png',
        nume: 'Linen Plain Top',
        pret: 25
    },
    {
        imagine: 'imagini/Pagina2/s1-img6.png',
        nume: 'Oversized T-shirt',
        pret: 11
    },
    {
        imagine: 'imagini/Pagina2/s1-img7.png',
        nume: 'Polarised Sunglasses',
        pret: 18
    },
    {
        imagine: 'imagini/Pagina2/s1-img8.png',
        nume: 'Rockstar Jacket',
        pret: 22
    },
]

for (let i = 0; i < blocuri.length; i++) {
    let bloc = document.createElement('a')
    bloc.href = ''
    bloc.className = 'bloc'
    bloc.innerHTML = `
        <div class="imagine">
            <img src="${blocuri[i].imagine}" alt="" />
        </div>
        <div class="text">
            <h3 class="nume">${blocuri[i].nume}</h3>
            <p class="pret">$${blocuri[i].pret.toFixed(2)}</p>
        </div>
        <button>Adauga in cos</button>
    `

    bloc.querySelector('button').addEventListener('click', (event) => {
        event.preventDefault()
        localStorage.setItem(6 + i, JSON.stringify(blocuri[i]))
    })
    container.appendChild(bloc)
}