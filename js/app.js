//Variable let qui contiendra les réponses au quiz
let quizResults = document.querySelector('#results');

//Les différentes questions et réponses possibles, ainsi que la réponse juste
const quizData = [
{
    question: 'What is the name of this character ?',
    options: {
        A: 'Spider-lady',
        B: 'Hornet',
        C: 'Princess-Protector',
        D: 'The Gendered Child'
    },
    
    correctAnswer: 'B',
},

{
    question: 'How do you upgrade your nail ?',
    options: {
        A: 'By beating a certain amount of ennemies',
        B: 'With a certain amount of Pale Ore',
        C: 'By talking to very specific NPCs',
        D: 'You can\'t'
    },

    correctAnswer: 'B'
},

{
    question: 'What is the name this area ?',
    options: {
        A: 'Kingdom\'s Edge',
        B: 'Resting grounds',
        C: 'Crystal Peak',
        D: 'The Hive'
    },
    
    correctAnswer: 'D'
},

{
    question: 'Which achievement does this symbol represent ?',
    options: {
        A: 'Masked : Acquire all Masks Shards',
        B: 'Steel Soul : Finish the game in Steel Soul mode',
        C: 'Speedrun 2 : Complete the game in under 5 hours',
        D: 'Attunement : Collect 600 Essence',
    },
    
    correctAnswer: 'A'
},

{
    question: 'What is the kingdom\'s name ?',
    options: {
        A: 'Mushroom Kingdom',
        B: 'Pharloom',
        C: 'Hallownest',
        D: 'It doesn\'t have a canon name'
    },
    
    correctAnswer: 'C'
}

];

//Fonction qui va faire fonctionner mon quiz
function buildQuiz() {
    
    const answers = [];
    
    //Pour chaque question
    
}
