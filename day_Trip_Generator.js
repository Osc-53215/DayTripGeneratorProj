let userName = prompt('What is your name? ');
console.log('Hello ' + userName + ' This is your day trip generator!');

let randDestination = ['Milwaukee', 'Madison', 'Wisconsin Dells', 'Lake Geneva'];
let randResturant = ['Culvers', 'Kopps', 'Olive Garden', 'Texas Roadhouse'];
let randModeOfTransport = ['Uber', 'Lyft', 'Public Bus', 'Bycicle'];
let randFormOfEntertainment = ['Movies', 'Open Mic Night', 'Sporting Event', 'Concert'];

function randomGenerator(options){
    let randomString = Math.floor(Math.random()*options.length);

    let item = options[randomString];

    return item;
 }

 let result0 = randomGenerator(randDestination);
//  let result1 = randomGenerator(randResturant);
//  let result2 = randomGenerator(randResturant);
//  let result3 = randomGenerator(randResturant);

console.log('For your first destination we choose......' + (result0));


//  console.log(result0);
//  console.log(result1);
//  console.log(result2);
//  console.log(result3);