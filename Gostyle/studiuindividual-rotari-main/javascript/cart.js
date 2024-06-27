let cartContainer = document.getElementsByClassName('cart-container')[0]

let subtotal = 0
let delivery = 30
let total = 30

const totalPlus = (prdPrice) => {
    subtotal += prdPrice
    total = delivery + subtotal
}

const totalMinus = (prdPrice) => {
    subtotal -= prdPrice
    total = delivery + subtotal
}

const calcCheckOut = () => {
    document.getElementById('subtotal').innerHTML = `$ ${subtotal}`
    document.getElementById('tax').innerHTML = `$${delivery}`
    document.getElementById('total').innerHTML = `$${total}`
}

const reloadInfo = (prd, count, prdSum) => {
    prd.querySelector('.count').innerHTML = count
    prd.querySelector('.prd-sum').innerHTML = `$ ${prdSum}`
}

for (let key in localStorage) {
    if(!isNaN(key)) {
        let prdObject = JSON.parse(localStorage.getItem(key))
        let prdSum = prdObject.price
        let count = 1
        totalPlus(prdObject.price)

        let prd = document.createElement('div')
        prd.className = 'prd-cart'
        prd.innerHTML = `
            <img src="${prdObject.image}">
            <h3>${prdObject.title}</h3>
            <h3>$ ${prdObject.price}</h3>
            <div class="count-btns">
                <button class="minus">-</button>
                <h3 class="count">${count}</h3>
                <button class="plus">+</button>
            </div>
            <h3 class="prd-sum">$ ${prdSum}</h3>
            <button class="delete">Delete</button>
        `
        prd.querySelector('.count-btns .minus').addEventListener('click', () => {
            if(count > 1) {
                count--
                prdSum -= prdObject.price

                totalPlus(prdObject.price)
                calcCheckOut()
                reloadInfo(prd, count, prdSum)
            }
        })
        prd.querySelector('.count-btns .plus').addEventListener('click', () => {
            count++
            prdSum += prdObject.price

            totalPlus(prdObject.price)
            calcCheckOut()
            reloadInfo(prd, count, prdSum)
        })
        prd.querySelector('.delete').addEventListener('click', () => {
            localStorage.removeItem(key)
            location.reload()
        })
        cartContainer.appendChild(prd)
    }
}

document.getElementById('check-out-btn').addEventListener('click', () => {
    localStorage.clear()
    location.reload()
})
calcCheckOut()