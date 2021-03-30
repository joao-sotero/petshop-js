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
    let{nome, idade, tipo, raca, vacinado} = pet
    console.log(`O nome do meu pet é ${nome}, ${idade}, ${tipo}, ${(vacinado) ? 'vacinado': 'não vacinado'}`)
  })
}

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

const campanhaVacina = () => {
  var contagem = 0;
  bancoDados.pets.map(function (pet) {
    let{nome, vacinado} = pet;
    if (!vacinado) {
      vacinarPet(nome);
      contagem++;
    }
    return pet;
  })
  console.log(`${contagem} pets foram vacinados nessa campanha!`);
  console.log()
};

// terminar 
const filtrarTipoPet = (tipoPet) => {
  let petsEncontrados = bancoDados.pets.filter((pet) => {
    let {tipo} = pet
    return tipo == tipoPet;
});

return petsEncontrados;
}


const filtrarTutor = (nomeTutor) => {
  let petsTutor = bancoDados.pets.filter((pet) => {
    let {tutor, nome} = pet
      return tutor == nomeTutor;
  });
  
  console.log(`Pets do tutor ${nomeTutor}:`)
  petsTutor.forEach((pet) => {
      console.log(`${pet.nome} - ${pet.tipo}`)
  })
}

/*
const filtrarEspeciePet = (especiePet) => {
  const especiesFiltradas = pets.filter(pet => pet.especie == especiePet)
  console.log(especiesFiltradas)
}*/

const clientPrimeium = (pet) => {
  let {servicos} = pet
  const contServ = servicos.map(servicos => 1)
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

// const clientePremium = (pet) => {
  // let {nome} = pet;
//   let nServicos = pet.servicos.length;
//   if (nServicos > 5) {
//       console.log(`Olá, ${nome}! Você é um cliente especial e ganhou um descontão!`);
//   } else {
//       console.log(`Olá, ${nome}! Você ainda não tem descontos disponiveis!`);
//   }
// }

//add cliente novo
const addClient = (novopet) => {
  bancoDados.pets.push(...novopet);
  atualizarBanco();
  novopet.forEach(pet => {
    console.log(`${pet.nome} foi adicionado com sucesso`);
  console.log();
  });
}

// const adicionarPet = (...novosPets) => {
//   novosPets.forEach((novoPet) => {
//       bancoDados.pets.push(novoPet);
//   })
//   atualizarBanco();
//   novosPets.forEach((pet) => {
//       console.log(`${pet.nome} foi adicionado com sucesso!`);
//   })
// }
// adicionarPet({
//   "nome": "Bidu",
//   "tipo": "gato",
//   "idade": 3,
//   "raca": "American",
//   "peso": 28,
//   "tutor": "Doug",
//   "contato": "(11) 99999-9999",
//   "vacinado": true,
//   "servicos": []
// },
// {
//   "nome": "Eva",
//   "tipo": "gato",
//   "idade": 3,
//   "raca": "American",
//   "peso": 28,
//   "tutor": "Hendy",
//   "contato": "(11) 99999-9999",
//   "vacinado": true,
//   "servicos": []
// },
// {
//   "nome": "Tag",
//   "tipo": "gato",
//   "idade": 3,
//   "raca": "American",
//   "peso": 28,
//   "tutor": "Doug",
//   "contato": "(11) 99999-9999",
//   "vacinado": true,
//   "servicos": []
// });

//serviços de petshop

const darBanhoPet = () => {
  let pet = buscarPet(nomepet);
  let {nome} = pet;
  pet.servicos.push({
    'nome': 'banho',
    'data': moment().format('DD-MM-YYYY')
  });
  atualizarBanco();
  console.log(`${nome} está de banho tomado`);
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

//clientPrimeium(bancoDados.pets[1])
//console.log(filtrarTipoPet("cachorro"));
//campanhaVacina();
//vacinarPet(nomepet);
//listarPets();
//tenderCliente(buscarPet, tosarPet);
//darBanhoPet();
//tosarPet();
//apararUnhasPet();
//filtrarTutor('Sotero');

addClient([{
  "nome": "nick",
    "tipo": "cachorro",
    "idade": 12,
    "raca": "poodle",
    "peso": 12,
    "tutor": "João",
    "contato": "(81) 99971-2863",
    "vacinado": false,
    "servicos": []
},
{
  "nome": "bio",
    "tipo": "gato",
    "idade": 1,
    "raca": "vira lata",
    "peso": 1,
    "tutor": "João",
    "contato": "(81) 99971-2863",
    "vacinado": false,
    "servicos": []
}]);