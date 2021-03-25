var moment = require('moment'); //require

const data = moment().locale('pt').format('dddd, hA');

 const nomePetshop = "I love pet";

 let pets = [
     {
        nome: 'Tobby',
        tipo: 'cachorro',
        idade: 12,
        raca: 'vira-lata',
        peso: 12,
        contato: '(81)9 9971-2863',
        tutor: 'Sotero',
        vacinado: false,
        servicos: ['banho']
        //console.log(moment().format("dd/MM/yyyy HH-mm"))   
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
    for(let pet of pets ){
        console.log(`O nome do meu pet é ${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}
listarPets();

// vacina por pet
const vacinarPet = () => {
    for(let pet of pets ){
        if(pet.nome == love  ){
            if(pet.vacinado == true){
                console.log(`${pet.nome} já está vacinado(a)`);
            }else{
            pet.vacinado = true;
   console.log(`${pet.nome} foi vacinado(a)`); 
        }
    }
  }
}
var love = 'laika';
vacinarPet(love);

/*
const vacinarPet = (pet) => {
    if(pet.vacinado == true){ 
        console.log(`O pet ${pet.nome} já está vacinado`);
    }
    else{
        pet.vacinado = true;
        console.log(`O pet ${pet.nome} foi vacinado`);
    }
}
vacinarPet(pets[2]);
*/

//vacina todos os pets

const campanhaVacina = () => {
    let contagem = 0;
    for(let pet of pets ){
        if(pet.vacinado != true){
        pet.vacinado = true;
        contagem++;
        }
    }
    console.log(`${contagem} pets foram vacinados nessa campanha!`);
}
campanhaVacina();

// adiciona novo cliente
/*
const addClient = (
    nome,
    tipo,
    idade,
    raca,
    peso,
    tutor,
    contato,
    vacinado,
    servicos
  ) => {
    pets.push = {
      nome: nome,
      tipo: tipo,
      idade: idade,
      raca: raca,
      peso: peso,
      tutor: tutor,
      contato: contato,
      vacinado: vacinado,
      servicos: servicos,
    };
    console.log(pets);
  };
  addclient(nome, tipo, idade, raca, peso, tutor, contato, vacinado, servicos);
*/
const addClient = () => {
    pets.push({nome: 'nick', tipo: 'cachorro', idade: 12, raca: 'poodle', peso: 10, 
    contato: '(81) 9 99712863', tutor: 'sotero', vacinado: false, servicos: [] });
    console.log(pets[3]);
}
addClient();

//serviços de petshop


 const darBanhoPet = (nome) => {
    for (let pet of pets) {
      if (pet.nome === nome) {
        pet.servicos.push('banho');
        console.log(`${pet.nome} está de banho tomado`);
        console.log(
          `Serviço realizado na data: ${data}`
        );
      }
    }
  };

  const tosarPet = (nome) => {
    for (let pet of pets) {
      if (pet.nome === nome) {
        pet.servicos.push('tosa');
        console.log(`${pet.nome} está com o cabelinho na régua`);
        console.log(
          `Serviço realizado na data: ${data}`
        );
      }
    }
  };

  const apararUnhasPet = (nome) => {
    for (let pet of pets) {
      if (pet.nome === nome) {
        pet.servicos.push('corte de unhas');
        console.log(`${pet.nome} está de unhas aparadas`);
        console.log(
          `Serviço realizado na data: ${data}`
        );
      }
    }
  };

  darBanhoPet('nick');
tosarPet('nick');
apararUnhasPet('nick');

console.log(pets[3]);