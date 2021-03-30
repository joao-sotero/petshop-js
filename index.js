var moment = require('moment'); //require
var fs = require('fs'); ///filesystem - modulo nativo
let bancoDados = fs.readFileSync("./bancoPets.json");

bancoDados = JSON.parse(bancoDados);

var nomepet = 'tobby';

//buscar pet por nome
const buscarPet = (nomepet) => {
  let petEncontrado = bancoDados.pets.find((pet) =>{
    return pet.nome == nomepet;
  }); 
    return petEncontrado?petEncontrado:`Nenhum pet encontrado com nome ${nomepet}`;
}


///atualizar banco de dados
const atualizarBanco = () => {
  let petsAtualizado = JSON.stringify(bancoDados, null, 2);
  fs.writeFileSync('bancoPets.json', petsAtualizado, 'utf-8');
}

//listar todos os pets
const listarPets = () => {
  bancoDados.pets.forEach(function (pet) {
    (pet.vacinado) ? console.log(`O nome do meu pet é ${pet.nome}, '${pet.idade}, ${pet.tipo}, ${pet.raca} e está vacinado `) :
      console.log(`O nome do meu pet é ${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca} e não está vacinado `)
  })
}
//listarPets();

//vacina por pet
const vacinarPet = (nome) => {
  let pet = buscarPet(nome);
  if (!pet.vacinado) {
    pet.vacinado = true;
    console.log(`${pet.nome} foi vacinado(a)`);
    atualizarBanco();
  } else {
    console.log(`${pet.nome} já estava vacinado(a)`);
  }
}
//vacinarPet(nomepet);

const campanhaVacina = () => {
  var contagem = 0;
  bancoDados.pets.map(function (pet) {
    if (!pet.vacinado) {
      console.log(pet.nome)
     // pet.vacinado = true;
      vacinarPet(pet.nome);
      contagem++
    }
    return pet;
  })
  console.log(`${contagem} pets foram vacinados nessa campanha!`);
  console.log()
};
//campanhaVacina();

// terminar 
const filtrarTipoPet = (tipo) => {
  let petsEncontrados = bancoDados.pets.filter((pet) => {
    return pet.tipo == tipoPet;
});

return petsEncontrados;
}
/*
const filtrarEspeciePet = (especiePet) => {
  const especiesFiltradas = pets.filter(pet => pet.especie == especiePet)
  console.log(especiesFiltradas)
}*/

//filtrarTipoPet("cachorro");

const clientPrimeium = (pet) => {
  const contServ = pet.servicos.map(servicos => 1)
  if (contServ != 0) {
    let test = contServ.reduce((acumula, maisUm) => {
      return acumula + maisUm;
    })
    switch (test) {
      case 1:
        console.log(`Você realizou ${test} serviço(s)!`)
        console.log("Realize mais um serviço para obter 10% de desconto")
        break
      case 2:
        console.log(`Você realizou ${test} serviço(s)!`)
        console.log("Parabéns você obteve 10% de desconto!")
        break
      case 3:
        console.log(`Você realizou ${test} serviço(s)!`)
        console.log("Parabéns, você obteve 20% de desconto!")
        break
      default:
        console.log(`Você realizou ${test} serviço(s)!`)
        console.log("Parabéns, você obteve 30% de desconto!")
    }
  } else {
    console.log("Gostaria de realizar algum serviço?")
  }
}
//clientPrimeium(bancoDados.pets[1])


// const clientePremium = (pet) => {
  // let {nome} = pet;
//   let nServicos = pet.servicos.length;

//   if (nServicos > 5) {
//       console.log(`Olá, ${pet.nome}! Você é um cliente especial e ganhou um descontão!`);
//   } else {
//       console.log(`Olá, ${pet.nome}! Você ainda não tem descontos disponiveis!`);
//   }
// }


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
}

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