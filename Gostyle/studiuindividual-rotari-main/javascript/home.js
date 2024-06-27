let container = document.getElementsByClassName('products')[0]
let products = [
    {
        image: '../images/1.jpg',
        sex: 'Women',
        title: 'LEATHER SLINGBACK SHOES',
        price: 100
    },
    {
        image: '../images/2.jpg',
        sex: 'Women',
        title: 'BLACK SHINY BLAZER DRESS',
        price: 50
    },
    {
        image: '../images/3.jpg',
        sex: 'Women',
        title: 'STUDDED SLINGBACK HEELS',
        price: 80
    },
    {
        image: '../images/4.jpg',
        sex: 'Men',
        title: 'SOLID QUARTER-ZIP SWEATSHIRT',
        price: 120
    },
    {
        image: '../images/5.jpg',
        sex: 'Men',
        title: 'POLAR FLEECE ZIP HOODIE',
        price: 69
    },
    {
        image: '../images/6.webp',
        sex: 'Men',
        title: 'Nike Utility Speed Backpack',
        price: 89
    },
    {
        image: '../images/7.webp',
        sex: 'Women',
        title: 'Nike Indy',
        price: 22
    },
    {
        image: '../images/8.webp',
        sex: 'Women',
        title: 'Nike Air Max 90',
        price: 110
    },
    {
        image: '../images/9.webp',
        sex: 'Men',
        title: 'Nike Blazer Mid \'77 Vintage',
        price: 105
    },
    {
        image: '../images/10.webp',
        sex: 'Men',
        title: 'Nike Sportswear Tech Fleece',
        price: 100
    },
    {
        image: '../images/5.jpg',
        sex: 'Men',
        title: 'POLAR FLEECE ZIP HOODIE',
        price: 69
    },
    {
        image: '../images/10.webp',
        sex: 'Men',
        title: 'Nike Sportswear Tech Fleece',
        price: 100
    },
]

for (let i = 0; i < products.length; i++) {
    let prd = document.createElement('div')
    prd.className = 'card'
    prd.innerHTML = `
        <div class="img">
            <img src="${products[i].image}" alt="" />
        </div>
        <div class="desc">${products[i].sex}</div>
        <div class="title">${products[i].title}</div>
        <div class="box">
            <div class="price">$${products[i].price}</div>
            <button class="btn">Buy Now</button>
        </div>
    `
    prd.querySelector('.box .btn').addEventListener('click', () => {
        localStorage.setItem(i, JSON.stringify(products[i]))
    })
    container.appendChild(prd)
}