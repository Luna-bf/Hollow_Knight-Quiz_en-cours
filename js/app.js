//Variable qui contiendra les réponses au quiz
const quizContainer = document.querySelector('#quiz');
const submitBtn = document.querySelector('#submitAnswers');
let quizResults = document.querySelector('#results');

//Les différentes questions et réponses possibles, ainsi que la réponse juste
const quizData = [
{
    questionTitle: 'What is the name of this character ?',
    options: {
        a: 'Spider-lady',
        b: 'Hornet',
        c: 'Princess-Protector',
        d: 'The Gendered Child'
    },
    
    correctAnswer: 'b',
},

{
    questionTitle: 'How do you upgrade your nail ?',
    options: {
        a: 'By beating a certain amount of ennemies',
        b: 'With a certain amount of Pale Ore',
        c: 'By talking to a very specific NPC',
        d: 'You can\'t'
    },

    correctAnswer: 'b'
},

{
    questionTitle: 'What is the name this area ?',
    options: {
        a: 'Kingdom\'s Edge',
        b: 'Resting grounds',
        c: 'Crystal Peak',
        d: 'The Hive'
    },
    
    correctAnswer: 'd'
},

{
    questionTitle: 'Which achievement does this symbol represent ?',
    options: {
        a: 'Masked : Acquire all Masks Shards',
        b: 'Steel Soul : Finish the game in Steel Soul mode',
        c: 'Speedrun 2 : Complete the game in under 5 hours',
        d: 'Attunement : Collect 600 Essence',
    },
    
    correctAnswer: 'a'
},

{
    questionTitle: 'What is the kingdom\'s name in Hollow Knight ?',
    options: {
        a: 'Mushroom Kingdom',
        b: 'Pharloom',
        c: 'Hallownest',
        d: 'Eternal Kingdom'
    },
    
    correctAnswer: 'c'
}

];

//Fonction qui va faire fonctionner mon quiz
function myQuiz() {
    //Tableau qui va me permettre de stocker toutes les réponses possibles
    const finalResult = [];
        
    //Boucle et le code qui sera effectué pour chaque question
    quizData.forEach((currentOption, optionNumber) => {
        const options = [];

        for(letter in currentOption.options) {

            //J'ajoute un bouton 'radio' avec .push() car options est un tableau
            //letter représente la lettre à laquelle est assignée chaque option
            options.push(`<label><input type="radio" name="question${optionNumber}" value="${letter}">${currentOption.options[letter]}</label>`);
        } 
            
        //Puis j'ajoute la question et sa réponse au tableau finalResult
        finalResult.push(`
            <div class="option">${currentOption.questionTitle}</div>
            <div class="answers">${options.join('')}</div>`
        );
    });

    //Enfin, on combine les résultats en une chaine de caractère avec join('') et que 
    //l'on affiche sur la page avec innerHTML. On met tout cela dans la balise qui va
    //contenir notre quiz et ses réponses (ici c'est la balise avec l'id 'quizContainer')
    quizContainer.innerHTML = finalResult.join('');
}

//Ensuite, j'appelle ma function myQuiz() pour afficher le tout sur la page
myQuiz();
