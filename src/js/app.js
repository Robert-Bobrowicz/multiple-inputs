//variables
let itemsOriginal = [
    {
        id: 1,
        name: "Bicycle 1",
        price: 1000,
        quantity: 0
    },
    {
        id: 2,
        name: "Bicycle 2",
        price: 12000,
        quantity: 0
    },
    {
        id: 3,
        name: "Bicycle 3",
        price: 20000,
        quantity: 0
    }
];
//for bubbling effect
const itemQuantity = document.querySelector('body');
//price display
const total = document.querySelector('#total-display');

//initial save itemsOriginal to and read it from storage
sessionStorage.setItem('items', JSON.stringify(itemsOriginal));
const items = JSON.parse(sessionStorage.getItem('items')) || [];

//initial total price display
total.innerText = 0;


//functions and handlers
function calculatePrice(items) {
    let price = 0;
    items.forEach(element => {
        price += element.quantity * element.price;
    });

    return total.innerText = price;
}

function changeItemQuantity(event) {
    if (event.target.tagName === 'INPUT') {
        const index = event.target.dataset.inputId;
        console.log('original item: ', items[index - 1]);
        items[index - 1].quantity = event.target.value;
        console.log('items updated: ', items[index - 1]);

        sessionStorage.setItem('items', JSON.stringify(items));
        calculatePrice(items);
    }
};

//listeners
itemQuantity.addEventListener('input', changeItemQuantity);