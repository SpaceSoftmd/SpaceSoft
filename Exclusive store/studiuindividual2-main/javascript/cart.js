let container = document.getElementById('products-container')

let finalSum = 0;
let total = 0;
let delivery = 0;

let receipt = document.createElement('div')
receipt.id = 'receipt'

for (let key in localStorage) {
    if (!isNaN(key)) {
        let product = JSON.parse(localStorage.getItem(key))
        let amount = 1
        let productTotal = product.price.final
        finalSum += product.price.final
        let block = document.createElement('div')
        block.classList.add('block')
        block.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <h4>${product.price.final} mdl</h4>
            <div class="amount-btns"> 
                <button class="decrease">-</button>
                <p class="amount">${amount}</p>
                <button class="increase">+</button>
            </div>
            <h4 class="product-total">${productTotal}</h4>
            <button class="remove">x</button>
        `
        block.querySelector('.amount-btns .decrease').addEventListener('click', () => {
            if (amount == 1) {
                alert('Cantitate nu poate fi mai mica de 1')
            } else {
                amount -= 1
                finalSum -= product.price.final
                productTotal = product.price.final * amount
                block.querySelector('.product-total').innerHTML = productTotal
                block.querySelector('.amount').innerHTML = amount
                delivery = parseInt(finalSum * 0.1);
                total = finalSum + delivery
                receipt.innerHTML = `
                    <h3>Subtotal:</h3> <span>${finalSum} mdl</span>
                    <h3>Livrare:</h3> <span>${delivery} mdl</span>
                    <h2>Total:</h2> <span>${total} mdl</span>
                `
            }
        })
        block.querySelector('.amount-btns .increase').addEventListener('click', () => {
            amount += 1
            finalSum += product.price.final
            productTotal = product.price.final * amount
            block.querySelector('.product-total').innerHTML = productTotal
            block.querySelector('.amount').innerHTML = amount

            delivery = parseInt(finalSum * 0.1);
            total = finalSum + delivery
            receipt.innerHTML = `
                <h3>Subtotal:</h3> <span>${finalSum} mdl</span>
                <h3>Livrare:</h3> <span>${delivery} mdl</span>
                <h2>Total:</h2> <span>${total} mdl</span>
            `
        })
        block.querySelector('.remove').addEventListener('click', () => {
            localStorage.removeItem(key)
            location.reload()
        })
        container.appendChild(block)
    }
}

delivery = parseInt(finalSum * 0.1);
total = finalSum + delivery
receipt.innerHTML = `
    <h3>Subtotal:</h3> <span>${finalSum} mdl</span>
    <h3>Livrare:</h3> <span>${delivery} mdl</span>
    <h2>Total:</h2> <span>${total} mdl</span>
`
container.appendChild(receipt)

let command = document.createElement('div')
command.id = 'command'
command.innerHTML = `
    <button>Comanda</button>
`
container.appendChild(command)
command.querySelector('button').addEventListener('click', () => {
    localStorage.clear()
    location.reload()
})