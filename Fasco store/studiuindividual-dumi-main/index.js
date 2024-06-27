let container = document.getElementsByClassName('sec2-container')[0]
let blocuri = [
    {
        imagine: 'imagini/Pagina1/s2-img1.png',
        nume: 'Shiny Dress',
        pret: 100
    },
    {
        imagine: 'imagini/Pagina1/s2-img2.png',
        nume: 'Long Dress',
        pret: 100
    },
    {
        imagine: 'imagini/Pagina1/s2-img3.png',
        nume: 'Full Sweater',
        pret: 96
    },
    {
        imagine: 'imagini/Pagina1/s2-img4.png',
        nume: 'White Dress',
        pret: 99
    },
    {
        imagine: 'imagini/Pagina1/s2-img5.png',
        nume: 'Colorful Dress',
        pret: 112
    },
    {
        imagine: 'imagini/Pagina1/s2-img6.png',
        nume: 'White Shirt',
        pret: 82
    },
]

for (let i = 0; i < blocuri.length; i++) {
    let bloc = document.createElement('a')
    bloc.href = ''
    bloc.className = 'sec2-bloc'
    bloc.innerHTML = `
        <div class="image">
          <img src="${blocuri[i].imagine}" alt="" />
        </div>
        <div class="text">
          <div class="bloc-heading">
            <h3>${blocuri[i].nume}</h3>
            <div>
              <i class="bx bxs-star" style="color: yellow"></i>
              <i class="bx bxs-star" style="color: yellow"></i>
              <i class="bx bxs-star" style="color: yellow"></i>
              <i class="bx bxs-star" style="color: yellow"></i>
              <i class="bx bxs-star" style="color: yellow"></i>
            </div>
          </div>
          <div class="price-stock">
            <p>$${blocuri[i].pret}</p>
            <span>Almost Sold Out</span>
          </div>
          <button>Adauga in cos</button>
        </div>
    `
    bloc.querySelector('button').addEventListener('click', (event) => {
      event.preventDefault()
      localStorage.setItem(i, JSON.stringify(blocuri[i]))
    })
    container.appendChild(bloc)
}