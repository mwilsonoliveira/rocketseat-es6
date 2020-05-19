//Exercício 01

class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  isAdmin() {
    return this.admin === true;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);

    this.admin = true;
  }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

//Exercício 02.1 - retornar um novo array só com as idades, usando Array Map

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const soIdades = usuarios.map(function(item) {
  return item.idade;
});

console.log(soIdades);

//Exercício 02.2 
//Crie uma variável que tenha apenas os 
//usuários que trabalham na Rocketseat e com mais de 18 anos

const maisDe18 = usuarios.filter(function(item) {
  return item.idade > 18;
});

console.log(maisDe18);

//Exercício 02.3 - achando um cara que trabalha na Rocketseat

const trabalhaRocketseat = usuarios.find(function(item) {
  return item.empresa === 'Rocketseat';
});

console.log(trabalhaRocketseat);

//Exercício 02.4 - unindo operações
//multiplicar a idade e trazer os com no máximo 50 anos

const calculo = usuarios
  .map(item => ({ ...item, idade: item.idade * 2 }))
  .filter(item =>  item.idade <= 50 );

console.log(calculo);

//Exercício 03 - converter funções em arrow function

// 3.1

const arr = [1, 2, 3, 4, 5];

/*
  FUNÇÃO NORMAL
  
  arr.map(function(item) {
    return item + 10;
  });

*/

//FUNÇÃO COM ARRAY FUNCTION
const convArrFunc = arr.map(item => item + 10);
console.log(convArrFunc);

//3.2

const usuarioArr = { nome: 'Diego', idade: 23 };

/* 

  FUNÇÃO NORMAL

  function mostraIdade(usuarioArr) {
  return usuarioArr.idade;
  }

*/

const uArr = usuarioArr
  .map(item => ({...item, idade: item.idade}));

console.log(uArr);


