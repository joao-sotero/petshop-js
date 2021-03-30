// //let bancoDados = require('./dadosPet.json');

// let pets = bancoDados.pets;

// const atenderCliente = (pet, servico) => {
//     console.log(`Olá, ${pet.nome}`);

//     // if(servico){
//     //     servico();
//     // }
//     (servico) ? servico() : console.log('só vim dar uma olhadinha');

//     console.log('Tchau, até mais!');
// }

// const darBanho = () => {
//     console.log('dando banho no pet...');
// }

// const apararUnhas = () => {
//     console.log('Aparando unhas...');
// }

// atenderCliente(pets[0], darBanho);
// console.log("---------")
// atenderCliente(pets[2], apararUnhas);
// console.log("---------")
// atenderCliente(pets[1]);

//DESESTRUTURAÇÃO
 let pessoa={
     nome :'iago',
     idade: 25,
     prodissao: 'dev',
     contato: '(11)999999999',
     habilidades: ['node', 'mysql','javascript', 'html']
 }

 let {nome, contato} = pessoa;
 console.log(`${nome} - ${contato}`);