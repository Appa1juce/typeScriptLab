"use strict";
let mountains = [
    {
        name: "Kilimanjaro",
        height: 19341,
    },
    {
        name: "Everest",
        height: 29029,
    },
    {
        name: "Denali",
        height: 20310,
    },
];
const findNameOfTallestMountain = (anArray) => {
    let tallestMountain = anArray[0];
    anArray.forEach((item) => {
        if (item.height > tallestMountain.height) {
            tallestMountain = item;
        }
    });
    return tallestMountain.name;
};
console.log(findNameOfTallestMountain(mountains));
let product = [
    {
        name: "chips",
        price: 2.5,
    },
    {
        name: "Bacon",
        price: 4.99,
    },
    {
        name: "milk",
        price: 1.99,
    },
];
const calcAverageProductPrice = (anArray) => {
    let total = 0;
    for (let item of anArray) {
        total += item.price;
    }
    return total / anArray.length;
};
console.log(calcAverageProductPrice(product));
let inventory = [
    {
        product: { name: "motor", price: 10.0 },
        quantity: 10,
    },
    {
        product: { name: "sensor", price: 12.5 },
        quantity: 4,
    },
    {
        product: { name: "LED", price: 1.0 },
        quantity: 20,
    },
];
const calcInventoryValue = (anArray) => {
    let total = 0;
    anArray.forEach((item) => {
        total = item.quantity * item.product.price + total;
    });
    return total;
};
console.log(calcInventoryValue(inventory));
