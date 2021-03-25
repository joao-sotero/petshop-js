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
        Vacinado: false,
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
        Vacinado: false,
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
        Vacinado: false,
        servicos: 'banho'
    }
];

const listarPets = () => {
    for(let pet of pets ){
        console.log(`O nome do meu pet é ${pets.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}

listarPets();
 //console.log(pets);