// Q Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "abdulla ansari";
var uCN = personName.toUpperCase()
var lCN = personName.toLowerCase()

function tCNFunc(personName){
    return personName
    .split(' ') // for gap all letters
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()) // for 1 char caps & all lowercase
    .join(' '); // for join all words

    
}

document.write(`Upper Case: ${uCN}, Lower Case: ${lCN}, Title Case: ${tCNFunc(personName)}` );

