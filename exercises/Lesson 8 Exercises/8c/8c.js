product = {
    name: 'basketball',
    price: 20.95,
    ['delivery-time']: '3 days'
};

product.price += 5.00;

console.log(JSON.stringify(product));