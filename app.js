//Class onde o cliente vai interagir com a aplicação, onde ele vai colocar as informações//

//Vamos começar importando os arquivos, as classes que já criamos até aqui//
const Database = require("./database");
const Author = require("./entities/Author");
const Book = require("./entities/book");
const Order = require("./entities/order");
const Poster = require("./entities/poster");
const User = require("./entities/User");

//Vamos agora criar e exportar a classe App//
module.exports = class App {
  static #database = new Database();
  //Vamos criar um método para que o cliente crie um login para ele, com senha, email e nome//
  createUser(name, email, password) {
    const user = new User(name, email, password);
    App.#database.saveUser(user);
  }
  getUsers() {
    return App.#database.find("users");
  }
  //Vamos agora criar um método para que o cliente possa criar o author e pesquisar o livro pelo nome do author.//
  createAuthor(name, nacionality, bio) {
    const author = new Author(name, nacionality, bio);
    App.#database.saveAuthor(author);
  }
  getAuthors() {
    return App.#database.find("authors");
  }
  //Vamos criar um metodo para que o cliente possa comprar o livro e procurar por ele//
  createBook(
    title,
    synopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock
  ) {
    const book = new Book(
      title,
      synopsis,
      genre,
      pages,
      author,
      description,
      price,
      inStock
    );
    App.#database.saveBook(book);
  }
  addBook(bookName, quantity) {
    App.#database.addBooksToStock(bookName, quantity);
  }
  getBooks() {
    return App.#database.find("books");
  }
  //Vamos fazer a mesma coisa agora com a classe Poster//
  createPoster(name, description, height, width, price, inStock) {
    const poster = new Poster(name, description, height, width, price, inStock);
    App.#database.savePoster(poster);
  }
  addPoster(posterName, quantity) {
    App.#database.addPostersToStock(posterName, quantity);
  }
  getPosters() {
    return App.#database.find("posters");
  }
  //Vamos criar um metodo onde o cliente pode finalizar o seu pedido, com as informações dos pedidos e do usuário.//
  createOrder(items, user) {
    const order = new Order(items, user);
    App.#database.saveOrder(order);
    //Aqui nós vamos fazer o sistema verificar se o item é do tipo livro ou se é do tipo poster//
    order.data.items.forEach(({ product, quantity }) => {
      if (product instanceof Book) {
        //Se for do tipo livro, vamos remover o livro do estoque com o metodo removeBooksFromStock pelo o nome do livro e sua quantidade.//
        App.#database.removeBooksFromStock(product.name, quantity);
      } else if (product instanceof Poster) {
        //Se for do tipo Poster, vamos remover o poster do estoque com o metodo removePostersFromStock pelo nome do poster e sua quantidade.//
        App.#database.removePostersFromStock(product.name, quantity);
      }
    });
  }
  //Metodo para encontrar o poster dentro do objeto privada #database com a propriedade find.//
  getOrders() {
    return App.#database.find("orders");
  }
  //Vamos criar um metodo para acessar o objeto privado #database para depois acessar o objeto showStorage, criado na classe #database.//
  showDatabase() {
    App.#database.showStorage();
  }
};
