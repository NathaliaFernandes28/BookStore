//Vamos começar exportando a classe Order//
module.exports = class Order {
  #total;
  #items;
  #user;
  constructor(items, user) {
    //Para cada item dos  produtos e suas quantidades//
    items.ForEach(({ product, quantity }) => {
      //Se a quantidade solicitada pelo cliente for menor que a quantidade em estoque da livraria, o sistema vai apresentar um erro//
      if (quantity > product.inStock) {
        throw new Error(`Quantidade insuficiente em estoque!`);
      }
    });
    this.#items = items;
    this.#user = user;
    //Vamos calcular o total do pedido do cliente//
    this.#total = items.reduce(
      (sum, { product, quantity }) => sum + product.price * quantity,
      0
    );
  }
  //Aqui vamos usar o metodo get para pegar as informações das propriedades privadas dentro da classe Order//
  get data() {
    return {
      items: this.#items,
      user: this.#user,
      total: this.#total,
    };
  }
};
