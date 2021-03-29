var moment = require('moment'); //require
var fs = require('fs'); ///filesystem - modulo nativo
let bancoDados = fs.readFileSync("./bancoPets.json");

bancoDados = JSON.parse(bancoDados);

var nomepet = 'tobby';


//buscar pet por nome
const buscarPet = bancoDados.pets.find(pet => pet.nome === nomepet);


///atualizar banco de dados
const atualizarBanco = () => {
  let petsAtualizado = JSON.stringify(bancoDados, null, 2);
  fs.writeFileSync('bancoPets.json', petsAtualizado, 'utf-8');
}

//listar todos os pets
const listarPets = () => {
  for (let pet of bancoDados.pets) {
    (pet.vacinado) ? console.log(`O nome do meu pet é ${pet.nome}, '${pet.idade}, ${pet.tipo}, ${pet.raca} e está vacinado `) :
      console.log(`O nome do meu pet é ${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca} e não está vacinado `)

  }
}
//listarPets();

// vacina por pet
const vacinarPet = () => {
  let pet = buscarPet;
  if (!pet.vacinado) {
    pet.vacinado = true;
    console.log(`${pet.nome} foi vacinado(a)`);
  } else {
    console.log(`${pet.nome} já estava vacinado(a)`);
  }
}
//vacinarPet();

//vacina todos os pets  corrigir so vacina leka
const campanhaVacina = () => {
  var contagem = 0;
  for (let pet of bancoDados.pets) {
    if (!pet.vacinado) {
      /// pet.vacinado = true //gambiarra ajeitar urgente
      console.log(pet.nome)
      vacinarPet(pet.nome);
      contagem++
    }
  }
  console.log(`${contagem} pets foram vacinados nessa campanha!`);
  console.log()
};
//campanhaVacina();

//add cliente novo
const addClient = novopet => {
  bancoDados.pets.push(novopet);
  atualizarBanco();
  console.log(bancoDados.pets[3]);
  console.log();
}
/*addClient({
  "nome": "nick",
    "tipo": "cachorro",
    "idade": 12,
    "raca": "poodle",
    "peso": 12,
    "tutor": "João",
    "contato": "(81) 99971-2863",
    "vacinado": false,
    "servicos": []
});*/

//serviços de petshop
const darBanhoPet = () => {
  let pet = buscarPet;
  pet.servicos.push({
    'serviço': 'banho',
    'data': moment().format('DD-MM-YYYY')
  });
  atualizarBanco();
  console.log(`${pet.nome} está de banho tomado`);
  console.log()
};

const tosarPet = () => {
  let pet = buscarPet;
  pet.servicos.push({
    'serviço': 'tosar',
    'data': moment().format('DD-MM-YYYY')
  });
  atualizarBanco();
  console.log(`${pet.nome} está com cabelinho na régua :)`);
  console.log()
};

const apararUnhasPet = () => {
  let pet = buscarPet;
  pet.servicos.push({
    'serviço': 'aparar unhas',
    'data': moment().format('DD-MM-YYYY')
  });
  atualizarBanco();
  console.log(`${pet.nome} está de unhas aparadas`);
  console.log()
};

const atenderCliente = (pet, servico) => {
  console.log(`Olá, ${pet.nome}`);
  (servico) ? servico() : console.log('só vim dar uma olhadinha');

  console.log('Tchau, até mais!');
}

//tenderCliente(buscarPet, tosarPet);

//darBanhoPet();
//tosarPet();
//apararUnhasPet();
//console.log(buscarPet);