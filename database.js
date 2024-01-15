//Vamos começar exportando a classe database//
module.exports = class Database {
  //Vamos aqui criar um objeto e dentro desse objeto vamos criar vários arrays para armazenar as informações tanto da livraria quanto dos pedidos dos clientes//
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: [],
  };
  //Agora vamos criar um metodo para encontrarmos as informações dentro dos arrays. Toda vez que queremos encontrar alguma informação, vamos usar o metodo find.//
  find(key) {
    return this.#storage[key];
  }
  //Agora vamos criar um metodo para salvar as informações dos autores//
  saveAuthor(author) {
    this.#storage.authors.push(author);
  }
  //Agora vamos criar um metodo para encontrar o livro pelo nome//
  //Toda vez que estamos perguntando alguma informação ao sistema, temos que usar o return para que o sistema retorne a informação que queremos//
  findBookByName(bookName) {
    return this.#storage.books.find((b) => b.name === bookName);
  }
  //Agora vamos criar um metodo para salvar o livro//
  saveBook(book) {
    const bookExists = this.findBookByName(book.name);
    if (!bookExists) [this.#storage.books.push(book)];
  }
  //Agora vamos criar um outro metodo para acrescentar unidades do livro no estoque. Vamos fazer isso pelo nome e pela a sua quantidade.//
  addBooksToStock(bookName, quantity) {
    //Aqui estamos dizendo que se o livro já existir no estoque da livraria, e se estiver a quantidade dele nesse estoque, vamos procurar o livro pelo nome dele.//
    const book = this.findBookByName(bookName);
    //Se não tiver quantidade nenhuma desse livro no estoque, vamos acrescentar mais livros para aumentar a sua quantidade//
    book?.addToStock(quantity);
  }
  //Agora vamos criar um metodo para remover as unidades do livro do estoque.//
  removeBooksFromStock(bookName, quantity) {
    //Aqui estamos dizendo que se o livro já existir no estoque da livraria, e se estiver a quantidade dele nesse estoque, vamos procurar o livro pelo nome dele.//
    const book = this.findBookByName(bookName);
    //Uma vez localizado no estoque, vamos criar um metodo para remove-lo desse estoque//
    book?.removeFromStock(quantity);
  }
  //Vamos agora fazer o mesmo com os poster,vamos criar um metodo para encontrar esse poster dentro do array posters que está dentro do objeto #storage pelo nome.//
  findPosterByName(posterName) {
    return this.#storage.posters.find((p) => p.name === posterName);
  }
  //Agora vamos criar um metodo para salvar esse poster no estoque//
  savePoster(poster) {
    //O poster já estando salvo
    const posterExistis = this.findPosterByName(poster.name);
    if (!posterExistis) [this.#storage.posters.push(poster)];
  }
  //Vamos criar um metodo para adicionar unidades dos poster no estoques da livraria//
  addPostersToStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName);
    poster?.addToStock(quantity);
  }
  removePostersFromStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName);
    poster?.removeFromStock(quantity);
  }
  //Vamos agora criar um metodo para salvar as informações dos usuários no sistema//
  saveUser(user) {
    const userExistis = this.#storage.users.find((u) => u.email === user.email);
    if (!userExistis) {
      this.#storage.users.push(user);
    }
  }
  //Agora vamos salvar os pedidos dos clientes//
  saveOrder(order) {
    this.#storage.orders.push(order);
  }
  //Por último vamos criar um metodo para mostrar os arrays que criamos dentro do objeto #storage, onde colocamos todas as informações que criamos na aplicação acima. Esse metodo não terá nenhum argumento, é apenas para mostrar as informações da aplicação.//
  showStorage() {
    console.table(this.#storage.authors);
    console.table(this.#storage.books);
    console.table(this.#storage.posters);
    console.table(this.#storage.users);
    console.table(this.#storage.orders.map((order) => order.data));
  }
};

//Metodo map() = ele mapeia os elementos de um array para um novo array, transformando cada elemento de acordo com uma função fornecida.//
