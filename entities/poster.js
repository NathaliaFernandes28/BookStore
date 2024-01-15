//Por ser um produto da livraria, nós temos que importar a classe Product//
const Product = require("./product");
module.exports = class Poster extends Product {
  constructor(name, description, height, width, price, inStock = 0) {
    super(name, description, price, inStock);
    this.height = height;
    this.width = width;
  }
};
