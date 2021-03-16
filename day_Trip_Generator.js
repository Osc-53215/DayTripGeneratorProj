let userName = prompt('What is your name? ');
console.log('Hello ' + userName + ' This is your day trip generator!');

let randDestination = ['Milwaukee', 'Madison', 'Wisconsin Dells', 'Lake Geneva'];
let randResturant = ['Culvers', 'Kopps', 'Olive Garden', 'Texas Roadhouse'];
let randModeOfTransport = ['Uber', 'Lyft', 'Public Bus', 'Bycicle'];
let randFormOfEntertainment = ['the Movies', 'an Open Mic Night', 'a Sporting Event', 'a Concert'];

function randomGenerator(options){
    let randomString = Math.floor(Math.random()*options.length);

    let item = options[randomString];

    return item;
 }

let result0 = randomGenerator(randDestination);
console.log('For your first destination we choose...' + (result0));

alert(userName + ' now lets choose a Resturant to eat!');

let result1 = randomGenerator(randResturant);
console.log('For your Resturant we choose...' + (result1));

alert('Sweeeet! Next lets choose your form of transportation!');

let result2 = randomGenerator(randModeOfTransport);
console.log('How does taking a ' + (result2) + ' sound like to you?' );

alert('Awsome ' + userName + ' you are making this so easy for me!');
alert('Last but not least lets choose a form of entertainment for you to have some fun!');

let result3 = randomGenerator(randFormOfEntertainment);
console.log('For entertainment we have ' + (result3));

console.log('Here is a summery of your trip! For your destination we have ' + (result0) + '. Next your place to eat was ' + (result1) +
'.  For form of transportation we ended with ' + (result2) + '. Lastly we are going to end your night at ' + (result3) + '!');


// console.log(userName + ' is this okay with you?');
// let answer0 = prompt('yes or no?');

// function satifactionWithResult(answer0){
//     if (answer0 === yes){
//         return true;
//     }
//     else if (anwser0 === no){
//         console.log('Lets choose another location for you! How about ...' (result0));
//     }
//     else {
//         return false;
//     }

    
// }