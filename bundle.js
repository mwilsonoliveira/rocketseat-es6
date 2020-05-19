"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Exercício 01
var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin === true;
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false

console.log(Adm1.isAdmin()); // true
//Exercício 02.1 - retornar um novo array só com as idades, usando Array Map

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var soIdades = usuarios.map(function (item) {
  return item.idade;
});
console.log(soIdades); //Exercício 02.2 
//Crie uma variável que tenha apenas os 
//usuários que trabalham na Rocketseat e com mais de 18 anos

var maisDe18 = usuarios.filter(function (item) {
  return item.idade > 18;
});
console.log(maisDe18); //Exercício 02.3 - achando um cara que trabalha na Rocketseat

var trabalhaRocketseat = usuarios.find(function (item) {
  return item.empresa === 'Rocketseat';
});
console.log(trabalhaRocketseat); //Exercício 02.4 - unindo operações
//multiplicar a idade e trazer os com no máximo 50 anos

var calculo = usuarios.map(function (item) {
  return _objectSpread({}, item, {
    idade: item.idade * 2
  });
}).filter(function (item) {
  return item.idade <= 50;
});
console.log(calculo); //Exercício 03 - converter funções em arrow function
// 3.1

var arr = [1, 2, 3, 4, 5];
/*
  FUNÇÃO NORMAL
  
  arr.map(function(item) {
    return item + 10;
  });

*/
//FUNÇÃO COM ARRAY FUNCTION

var convArrFunc = arr.map(function (item) {
  return item + 10;
});
console.log(convArrFunc); //3.2

var usuarioArr = {
  nome: 'Diego',
  idade: 23
};
/* 

  FUNÇÃO NORMAL

  function mostraIdade(usuarioArr) {
  return usuarioArr.idade;
  }

*/

var uArr = usuarioArr.map(function (item) {
  return _objectSpread({}, item, {
    idade: item.idade
  });
});
console.log(uArr);
