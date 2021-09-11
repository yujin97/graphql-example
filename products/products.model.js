const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jean",
    price: 55.55,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
}

function getProductById(id) {
  const matchedProduct = getProductById(id);

  if (matchedProduct) {
    const newProductReview = {
      rating,
      comment,
    };

    matchedProduct.reviews.push(newProductReview);

    return matchedProduct;
  }
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };

  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const newReview = {
    rating,
    comment,
  };
  const productIndex = products.findIndex((product) => product.id === id);
  products[productIndex].reviews.push(newReview);
  return products[productIndex];
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
