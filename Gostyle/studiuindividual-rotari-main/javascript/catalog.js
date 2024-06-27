let container = document.getElementsByClassName('products')[0]
let products = [
    {
        image: '../images/6.webp',
        title: 'Nike Utility Speed Backpack',
        size: '28',
        price: 89
    },
    {
        image: '../images/10.webp',
        title: 'Nike Sportswear Tech Fleece',
        size: 'M',
        price: 100
    },
    {
        image: '../images/9.webp',
        title: 'Nike Blazer Mid \'77 Vintage',
        size: '42',
        price: 105
    },
    {
        image: '../images/4.jpg',
        title: 'SOLID QUARTER-ZIP SWEATSHIRT',
        size: 'M',
        price: 120
    },
    {
        image: '../images/5.jpg',
        title: 'POLAR FLEECE ZIP HOODIE',
        size: 'M',
        price: 69
    },
    {
        image: '../images/6.webp',
        title: 'Nike Utility Speed Backpack',
        size: '28',
        price: 89
    },
    {
        image: '../images/10.webp',
        title: 'Nike Sportswear Tech Fleece',
        size: 'M',
        price: 100
    },
    {
        image: '../images/9.webp',
        title: 'Nike Blazer Mid \'77 Vintage',
        size: '42',
        price: 105
    },
    {
        image: '../images/4.jpg',
        title: 'SOLID QUARTER-ZIP SWEATSHIRT',
        size: 'M',
        price: 120
    },
    {
        image: '../images/5.jpg',
        title: 'POLAR FLEECE ZIP HOODIE',
        size: 'M',
        price: 69
    },
    {
        image: '../images/6.webp',
        title: 'Nike Utility Speed Backpack',
        size: '28',
        price: 89
    },
    {
        image: '../images/10.webp',
        title: 'Nike Sportswear Tech Fleece',
        size: 'M',
        price: 100
    },
    {
        image: '../images/9.webp',
        title: 'Nike Blazer Mid \'77 Vintage',
        size: '42',
        price: 105
    },
    {
        image: '../images/4.jpg',
        title: 'SOLID QUARTER-ZIP SWEATSHIRT',
        size: 'M',
        price: 120
    },
    {
        image: '../images/5.jpg',
        title: 'POLAR FLEECE ZIP HOODIE',
        size: 'M',
        price: 69
    },
    {
        image: '../images/9.webp',
        title: 'Nike Blazer Mid \'77 Vintage',
        size: '42',
        price: 105
    }
]

for (let i = 0; i < products.length; i++) {
    let prd = document.createElement('div')
    prd.className = 'card'
    prd.innerHTML = `
        <div>
            <img src="${products[i].image}" alt="" />
        </div>
        <div class="box">
            <div class="title">${products[i].title}</div>
            <div class="size">${products[i].size}</div>
        </div>
        <button class="price">${products[i].price}$</button>
    `
    prd.querySelector('.price').addEventListener('click', () => {
        localStorage.setItem(12 + i, JSON.stringify(products[i]))
    })
    container.appendChild(prd)
}