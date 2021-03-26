var moment = require('moment'); //require

const nomePetshop = "I love pet";

var nomepet = 'leka';

//array de objetos
let pets = [{
    nome: 'Tobby',
    tipo: 'cachorro',
    idade: 12,
    raca: 'vira-lata',
    peso: 12,
    contato: '(81)9 9971-2863',
    tutor: 'Sotero',
    vacinado: false,
    servicos: ['banho']

  },
  {
    nome: 'laika',
    tipo: 'cachorro',
    idade: 12,
    raca: 'poodle',
    peso: 12,
    contato: '(81)9 9971-2863',
    tutor: 'Sotero',
    vacinado: true,
    servicos: ['banho', 'tosa']
  },
  {
    nome: 'leka',
    tipo: 'cachorro',
    idade: 12,
    raca: 'vira-lata',
    peso: 6,
    contato: '(81)9 9971-2863',
    tutor: 'Sotero',
    vacinado: false,
    servicos: ['banho']
  }
];

//listar todos os pets
const listarPets = () => {
  for (let pet of pets) {
    console.log(`O nome do meu pet é ${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
  }
}
//listarPets();

// vacina por pet
var contagem = 0;
const vacinarPet = (nomepet) => {
  for (let pet of pets) {
    if (pet.nome == nomepet) {
      if (pet.vacinado) {
        console.log(`${pet.nome} já está vacinado(a)`);
      } else {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado(a)`);
        contagem++;
      }
    }
  }
}
//vacinarPet(nomepet);

//vacina todos os pets
const campanhaVacina = () => {
  for (let pet of pets) {
    vacinarPet(pet.nome)    
  }
  console.log(`${contagem} pets foram vacinados nessa campanha!`);
  console.log()
}
campanhaVacina();

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
const darBanhoPet = (nome) => {
  for (let pet of pets) {
    if (pet.nome === nome) {
      pet.servicos.push({
        'serviço': 'banho',
        'data': moment().format('DD-MM-YYYY')
      });
      console.log(`${pet.nome} está de banho tomado`);
      console.log()
    }
  }
};

const tosarPet = (nome) => {
  for (let pet of pets) {
    if (pet.nome === nome) {
      pet.servicos.push({
        'serviço': 'tosar',
        'data': moment().format('DD-MM-YYYY')
      });
      console.log(`${pet.nome} está com cabelinho na régua :)`);
      console.log()
    }
  }
};

const apararUnhasPet = (nome) => {
  for (let pet of pets) {
    if (pet.nome === nome) {
      pet.servicos.push({
        'serviço': 'aparar unhas',
        'data': moment().format('DD-MM-YYYY')
      });
      console.log(`${pet.nome} está de unhas aparadas`);
      console.log()
    }
  }
};

//darBanhoPet(nomepet);
//tosarPet(nomepet);
//apararUnhasPet(nomepet);
//console.log(pets[3]);