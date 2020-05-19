/* Não se pode reatribuir valores a essa variável.
por exemplo não se pode fazer const a = 3; */
const a = 1;

//Porém pode ocorrer uma mutação com variáveis 'const'
const usuario = {nome: 'Marcos'};

usuario.nome = 'Marcão';

console.log(usuario);

//--------------ESCOPO--------------

function teste(x) {
  //O let vale apenas dentro da chave dessa function
  let y = 2;

  if(x > 5) {
    y = 3;
    console.log(x, y);
  }
}

teste(10);

//--------------PERCORRIMENTO DE VETOR COM ES6----------

//---map---
//é o for novo do ES6, ele percorre o array e tals
const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index) {
  return item + index;
});

console.log(newArr);

//---reduce---
//isso aqui vai somar os valores do array de trás pra frente.
const sum = arr.reduce(function(total, next) {
  return total + next;
});

console.log(sum);

//---filter---
//esse cara ta pegando apenas os pares dentro do array.
const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

console.log(filter);

//---find---
//encontra o indice do que tu quer achar.
const find = arr.find(function(item) {
  return item === 4;
});

console.log(find);


//--------------ARROW FUNCTIONS--------------

//---função normal---
const eitaNois = arr.map(function(item) {
  return item * 2;
});

console.log(eitaNois, 'função normal');

//---arrow function---
const eitaNois2 = arr.map((item, index) => {
  return item * index;
});

console.log(eitaNois2, 'arrow function');

//---arrow function com somente 1 item no recebimento---
const eitaNois3 = arr.map(item => {
  return item * 2;
});

console.log(eitaNois3, 'arrow function com 1 param');

//---arrow function com um retorno apenas---
const eitaNois4 = arr.map(item => item * 2);

console.log(eitaNois4, 'arrow function com 1 retorno só');

//---também da para fazer assim, mas não é recomendado---
const teste = () => ({ nome: 'Marcone'});

console.log(teste, 'arrow function que volta objeto');

//---valores padrão---
const teste2 = (a = 2, b = 3) => {
  return a + b;
};

console.log(teste2(), 'arrow function com valores padrão');



//--------------DESESTRUTURAÇÃO------------------------

const user = {
  nome: 'Marcone',
  idade: 29,
  endereco: {
    cidade: 'São Hellforno',
    estado: 'RS',
  },
  cpf: '000000',
};

/* Assim era feito antes do ES6

const city = user.endereco.cidade;
const uf = user.endereco.estado;

*/

//Com destructure assignement fica assim:
const { nome, idade, endereco: { cidade, estado}} = user;

console.log(estado, idade, 'Destructuring');

//com uma function dá pra fazer também
function mostraNome({ nome, cpf, endereco: { cidade, estado} }) {
  console.log(nome+', '+estado+ ', '+cidade+', '+cpf, 'Destructuring com função');
}

mostraNome(user);

//--------------OPERADORES REST E SPREAD------------------------

//----OPERADOR REST---

const usr = {
  name: 'Marcon',
  age: 29,
  org: 'Rocketseat'
};

//tu tipo joga o resto do array ou do objeto que tu quer
//numa variável só
const { name, ...resto } = usr;

console.log(name);
console.log(resto);

//Também da pra fazer com arrays
const arrai = [1, 2, 3, 4, 5];

const [ d, e, ...f ] = arrai;

console.log(d);
console.log(e);
console.log(f);

//Dá pra fazer com funções também

function soma(a, b, ...params) {
  return params;
}

console.log(soma(1,3,4,5,6,7,8,9));

//---OPERADOR SPREAD---

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

//tem como unir os valores do array 1 e do 2 em um novo array
//usando o spread operator
const arr3 = [ ...arr1, ...arr2 ];

console.log(arr3);

//também tem como manipular propriedades de dentro de um objeto.

const usuario1 = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat',
};
//aqui está sendo criado uma nova variável recebendo tudo do
//primeiro objeto, só que com um deles com o valor alterado.
const usuario2 = { ...usuario1, nome: 'Marcos' };

console.log(usuario2);

//--------------TEMPLATE LITERALS------------------------

const eu = 'Marcos';
const age = 29;

//console.log('Meu nome é ' + eu + ' e tenho ' + age + ' anos');
console.log(`Meu nome é ${eu} e tenho ${idade} anos.`);

//--------------OBJECT SHORT SYNTAX----------------------

const pessoa = 'Marcos';
const numero = 29;

const people = {
  nome,
  idade,
  empresa: 'Rocketseat',
};

console.log(people);