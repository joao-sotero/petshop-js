var moment = require('moment'); //require
const bancoDados = require("./dadosPet.json")
const nomePetshop = "I love pet";

var nomepet = 'leka';

let pets = bancoDados.pets;

//buscar pet por nome
const buscarPet = pets.find(cao => cao.nome === nomepet);

//listar todos os pets
const listarPets = () => {
  for (let pet of pets) {
    console.log(`O nome do meu pet é ${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
  }
}
//listarPets();

// vacina por pet

const vacinarPet = nomepet => {
  for (let pet of pets) {
    if (pet.nome == nomepet) {
      if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado(a)`);
      } else {
        console.log(`${pet.nome} já está vacinado(a)`);
      }
    }
  }
}
//vacinarPet(nomepet);

//vacina todos os pets  corrigir
const campanhaVacina = () => {
  var contagem = 0;
  for (let pet of pets) {
    if (!pet.vacinado) { // não deixa laika entrar pq ja ta vacinada
      vacinarPet(pet.nome);
      contagem++
    }
  }
  console.log(`${contagem} pets foram vacinados nessa campanha!`);
  console.log()
};
//campanhaVacina();

//add cliente novo
const addClient = () => {
  pets.push({
    nome: 'nick',
    tipo: 'cachorro',
    idade: 12,
    raca: 'poodle',
    peso: 10,
    contato: '(81) 9 99712863',
    tutor: 'sotero',
    vacinado: false,
    servicos: []
  });
  console.log(pets[3]);
  console.log()
}
//addClient();

//serviços de petshop
const darBanhoPet = () => {
  let pet = buscarPet;
  pet.servicos.push({
    'serviço': 'banho',
    'data': moment().format('DD-MM-YYYY')
  });
  console.log(`${pet.nome} está de banho tomado`);
  console.log()
};

const tosarPet = (nome) => {
  let pet = buscarPet
  pet.servicos.push({
    'serviço': 'tosar',
    'data': moment().format('DD-MM-YYYY')
  });
  console.log(`${pet.nome} está com cabelinho na régua :)`);
  console.log()
};

const apararUnhasPet = (nome) => {
  let pet = buscarPet
  pet.servicos.push({
    'serviço': 'aparar unhas',
    'data': moment().format('DD-MM-YYYY')
  });
  console.log(`${pet.nome} está de unhas aparadas`);
  console.log()
};

const atenderCliente = (pet, servico) => {
  console.log(`Olá, ${pet.nome}`);
  (servico) ? servico(): console.log('só vim dar uma olhadinha');

  console.log('Tchau, até mais!');
}
atenderCliente(buscarPet, tosarPet);

//darBanhoPet();
//tosarPet(nomepet);
//apararUnhasPet(nomepet);
//console.log(buscarPet);