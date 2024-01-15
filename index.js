//Vamos começar importando a classe App.//
const App = require("./app");
//Vamos fazer uma instancia da classe app.//
const app = new App();

//Agora vamos colocar valor nas propriedades da criação dos autores//
app.createAuthor("Agatha Criste", "British", "...");
app.createAuthor("Ilana Casoy", "Brazilian", "...");

//Vamos pegar o metodo getAuthor para ler essas informações dos autores.//
const authors = app.getAuthors();

//Vamos agora colocar valores nas propriedades da criação dos livros.//
app.createBook(
  "Assassinato no rio Nilo",
  "...",
  "ficção",
  400,
  authors[0],
  "...",
  20.0,
  300
);
app.createBook(
  "Casos de Família",
  "...",
  "True Crime",
  500,
  authors[1],
  "...",
  60.0,
  400
);
app.createBook(
  "O assassinato da Biblioteca",
  "...",
  "ficção",
  250,
  authors[0],
  "...",
  30.0,
  500
);
app.createBook(
  "Lady Killer",
  "...",
  "True Crime",
  500,
  authors[1],
  "...",
  79.9,
  800
);

//Vamos pegar o metodo getBook para ler essas informações dos livros.//
const books = app.getBooks();

//Vamos agora colocar valores nas propriedades do usuário.//
app.createUser("Nathalia", "oliveiranfernandes@gmail.com", "24718346");

//Vamos pegar o metodo getUsers para ler essas informações dos usuários.//
const users = app.getUsers();

//Vamos pegar o metodo showDatabase dentro da class app para mostrar todas as informações do Database.//
app.showDatabase();

//Vamos fazer um arrays com os items que o cliente está pedindo e suas quantidades.//
const items = [
  {
    product: books[0],
    quantity: 2,
  },
  {
    product: books[1],
    quantity: 3,
  },
  {
    product: books[3],
    quantity: 5,
  },
];

//Vamos chamar o metodo createOrder para pegar o array items com o usuário que está fazendo esse pedido.//
app.createOrder(items, users[0]);

//Vamos chamar novamente o metodo showDatabase dentro da class app para mostrar todas as informações do Database.//
app.showDatabase();
