module.exports = class Product {
  constructor(name, description, price, inStock = 0) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = inStock;
  }

  //Função para adicionar o produto no inStock//
  addToStock(quantity) {
    this.inStock += quantity;
  }
  //Função para remover o produto do inStock//
  removeFromStock(quantity) {
    this.inStock -= quantity;
  }
};
