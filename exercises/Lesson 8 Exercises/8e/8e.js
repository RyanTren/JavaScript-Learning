function isSameProduct(product1, product2) {
    if (
      product1.name === product2.name &&
      product1.price === product2.price
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Here is an alternative solution that uses less code.
  function isSameProduct(product1, product2) {
    return (
      product1.name === product2.name &&
      product1.price === product2.price
    );
  }

  const product1 = {
    name: 'basketball',
    price: 2095
  };

  const product2 = {
    name: 'socks',
    price: 1090
  };

  const product3 = {
    name: 'basketball',
    price: 2095
  };

  console.log(isSameProduct(product1, product2));
  console.log(isSameProduct(product1, product3));