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
        servicos: 'banho'
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
        servicos: 'banho'
    }
];

const listarPets = () => {
    for(let pet of pets ){
        console.log(`O nome do meu pet é ${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}

listarPets();

// vacina por pet

var love = 'laika';
const vacinarPets = () => {
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
vacinarPets();

//vacina todos os pets
var contagem = 0;
const campanhaVacina = () => {
    for(let pet of pets ){
        if(pet.vacinado != true){
        pet.vacinado = true;
        contagem++;
        }
    }
    console.log(`${contagem} pets foram vacinados nessa campanha!`);
}


campanhaVacina();


