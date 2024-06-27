let products = {
    0: {
        image: '../images/index/gamepad.png',
        name: 'havit hv-g92 gamepad',
        rating: 4.7,
        cartBtn: null,
        price: {
            initial: 160,
            reduction: 15,
            final: 0
        },
        stock: '(88)'
    },
    1: {
        image: '../images/index/keyboard.png',
        name: 'ak-900 wired keyboard',
        rating: 3.5,
        cartBtn: null,
        price: {
            initial: 1160,
            reduction: 20,
            final: 0
        },
        stock: '(75)'
    },
    2: {
        image: '../images/index/monitor.png',
        name: 'ips lcd gaming monitor',
        rating: 5,
        cartBtn: null,
        price: {
            initial: 400,
            reduction: 0,
            final: 0
        },
        stock: '(99)'
    },
    3: {
        image: '../images/index/chair.png',
        name: 's-series comfort chair',
        rating: 4.5,
        cartBtn: null,
        price: {
            initial: 600,
            reduction: 23,
            final: 0
        },
        stock: '(92)'
    },
    4: {
        image: '../images/index/bear.png',
        name: 'Breed Dry Dog Food',
        rating: 3,
        cartBtn: null,
        price: {
            initial: 100,
            reduction: 0,
            final: 0
        },
        stock: '(88)'
    },
    5: {
        image: '../images/index/camera.png',
        name: 'CANON EOS DSLR Camera',
        rating: 4,
        cartBtn: null,
        price: {
            initial: 360,
            reduction: 5,
            final: 0
        },
        stock: '(95)'
    },
    6: {
        image: '../images/index/laptop.png',
        name: 'ASUS FHD Gaming Laptop',
        rating: 4.9,
        cartBtn: null,
        price: {
            initial: 700,
            reduction: 0,
            final: 0
        },
        stock: '(325)'
    },
    7: {
        image: '../images/index/curology.png',
        name: 'Curology Product Set',
        rating: 4.3,
        cartBtn: null,
        price: {
            initial: 500,
            reduction: 35,
            final: 0
        },
        stock: '(145)'
    },
    8: {
        image: '../images/index/electro-car.png',
        name: 'Kids Electric Car',
        rating: 4.83,
        cartBtn: null,
        price: {
            initial: 960,
            reduction: 0,
            final: 0
        },
        stock: '(65)'
    },
    9: {
        image: '../images/index/soccers.png',
        name: 'Jr. Zoom Soccer Cleats',
        rating: 5,
        cartBtn: null,
        price: {
            initial: 1160,
            reduction: 15,
            final: 0
        },
        stock: '(35)'
    },
    10: {
        image: '../images/index/gamepad2.png',
        name: 'GP11 Shooter USB Gamepad',
        rating: 4.5,
        cartBtn: null,
        price: {
            initial: 660,
            reduction: 15,
            final: 0
        },
        stock: '(55)'
    },
    11: {
        image: '../images/index/jacket.png',
        name: 'Quilted Satin Jacket',
        rating: 4.13,
        cartBtn: null,
        price: {
            initial: 860,
            reduction: 11,
            final: 0
        },
        stock: '(55)'
    }
}
for (let i in products) {
    products[i].price.final = products[i].price.reduction > 0 ?
        products[i].price.initial - products[i].price.initial * products[i].price.reduction / 100 : products[i].price.initial
}


function addFullStars(iterLength, parentNode) {
    for (let i = 0; i < iterLength; i++) {
        let star = document.createElement('i')
        star.classList.add('bx', 'bxs-star')
        star.style.color = 'orange'
        parentNode.appendChild(star)
    }
}

function addNullStars(iterLength, parentNode) {
    for (let i = 0; i < iterLength; i++) {
        let star = document.createElement('i')
        star.classList.add('bx', 'bx-star')
        star.style.color = 'orange'
        parentNode.appendChild(star)
    }
}

function addHalfStar(parentNode) {
    let halfStar = document.createElement('i')
    halfStar.classList.add('bx', 'bxs-star-half')
    halfStar.style.color = 'orange'
    parentNode.appendChild(halfStar)
}

function calcRating(parentNode, rating) {
    let container = document.createElement('div')
    container.classList.add('rating')
    if (rating < 1) {
        if (rating >= 0.5) {
            addHalfStar(container)
            addNullStars(4, container)
        } else {
            addNullStars(5, container)
        }
    } else if (rating >= 1 && rating < 2) {
        addFullStars(1, container)
        if (rating >= 1.5) {
            addHalfStar(container)
            addNullStars(3, container)
        } else {
            addNullStars(4, container)
        }
    } else if (rating >= 2 && rating < 3) {
        addFullStars(2, container)
        if (rating >= 2.5) {
            addHalfStar(container)
            addNullStars(2, container)
        } else {
            addNullStars(3, container)
        }
    } else if (rating >= 3 && rating < 4) {
        addFullStars(3, container)
        if (rating >= 3.5) {
            addHalfStar(container)
            addNullStars(1, container)
        } else {
            addNullStars(2, container)
        }
    } else if (rating >= 4 && rating < 5) {
        addFullStars(4, container)
        if (rating >= 4.5) {
            addHalfStar(container)
        } else {
            addNullStars(1, container)
        }
    } else
        addFullStars(5, container)
    parentNode.appendChild(container)
}

let parentContainer = document.body.querySelector('.container .sec4')

let defaultContainer = document.getElementById('block-container')
for (let i in products) {
    addProduct(i, products[i], defaultContainer)
}

let toArray = Object.values(products)

let priceAscContainer = document.createElement('div')
priceAscContainer.id = 'block-container'
let sortedPriceAsc = [...toArray].sort((a, b) => a.price.final - b.price.final)
let productsSortedPriceAsc = {
    ...sortedPriceAsc
}
for (let i in productsSortedPriceAsc) {
    addProduct(i, productsSortedPriceAsc[i], priceAscContainer)
}
parentContainer.appendChild(priceAscContainer)


let priceDescContainer = document.createElement('div')
priceDescContainer.id = 'block-container'
let sortedPriceDesc = [...toArray].sort((a, b) => b.price.final - a.price.final)
let productsSortedPriceDesc = {
    ...sortedPriceDesc
}
for (let i in productsSortedPriceDesc) {
    addProduct(i, productsSortedPriceDesc[i], priceDescContainer)
}
parentContainer.appendChild(priceDescContainer)


let ratingAscContainer = document.createElement('div')
ratingAscContainer.id = 'block-container'
let sortedRatingAsc = [...toArray].sort((a, b) => a.rating - b.rating)
let productsSortedRatingAsc = {
    ...sortedRatingAsc
}
for (let i in productsSortedRatingAsc) {
    addProduct(i, productsSortedRatingAsc[i], ratingAscContainer)
}
parentContainer.appendChild(ratingAscContainer)


let ratingDescContainer = document.createElement('div')
ratingDescContainer.id = 'block-container'
let sortedRatingDesc = [...toArray].sort((a, b) => b.rating - a.rating)
let productsSortedRatingDesc = {
    ...sortedRatingDesc
}
for (let i in productsSortedRatingDesc) {
    addProduct(i, productsSortedRatingDesc[i], ratingDescContainer)
}
parentContainer.appendChild(ratingDescContainer)


function addProduct(i, prd, container) {
    let product = document.createElement('a')
    product.href = ''
    product.classList.add('product-container')
    product.innerHTML = `
    <div class="block-image">
        <img src="${prd.image}">
        <button type="button" class="add-to-cart">Add To Cart</button>
    </div>
    <div class="description">
        <h4>${prd.name}</h4>
        <div class="price-container">
            <span class="price">$${prd.price.initial}</span>
            <span class="final-price">$${prd.price.final}</span>
        </div>
        <div class="rating-stock-container">
            <div class="stars"></div>
            <p class="stock">${prd.stock}</p>
        </div>
    </div>
    `

    if (prd.price.reduction > 0) {
        product.querySelector('.description  .price-container .price').classList.add('initial-price')
    } else {
        product.querySelector('.description .price-container .final-price').classList.add('final-price-none')
    }
    calcRating(product.querySelector('.description .rating-stock-container .stars'), prd.rating)
    product.querySelector('.block-image .add-to-cart').addEventListener('click', (event) => {
        event.preventDefault();
        localStorage.setItem(`${i}`, JSON.stringify(prd))
    })
    container.appendChild(product)
}

priceAscContainer.style.display = 'none'
priceDescContainer.style.display = 'none'
ratingAscContainer.style.display = 'none'
ratingDescContainer.style.display = 'none'
let filters = document.getElementById('filters')
filters.addEventListener('change', () => {
    switch (filters.options[filters.selectedIndex].text) {
        case "Default":
            defaultContainer.style.display = 'flex'
            priceAscContainer.style.display = 'none'
            priceDescContainer.style.display = 'none'
            ratingAscContainer.style.display = 'none'
            ratingDescContainer.style.display = 'none'
            break

        case "Price Ascending": {
        }
            defaultContainer.style.display = 'none'
            priceAscContainer.style.display = 'flex'
            priceDescContainer.style.display = 'none'
            ratingAscContainer.style.display = 'none'
            ratingDescContainer.style.display = 'none'
            break

        case "Price Descending":
            defaultContainer.style.display = 'none'
            priceAscContainer.style.display = 'none'
            priceDescContainer.style.display = 'flex'
            ratingAscContainer.style.display = 'none'
            ratingDescContainer.style.display = 'none'
            break

        case "Rating Ascending":
            defaultContainer.style.display = 'none'
            priceAscContainer.style.display = 'none'
            priceDescContainer.style.display = 'none'
            ratingAscContainer.style.display = 'flex'
            ratingDescContainer.style.display = 'none'
            break

        case "Rating Descending":
            defaultContainer.style.display = 'none'
            priceAscContainer.style.display = 'none'
            priceDescContainer.style.display = 'none'
            ratingAscContainer.style.display = 'none'
            ratingDescContainer.style.display = 'flex'
            break
    }
})