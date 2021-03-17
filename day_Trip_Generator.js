let userName = prompt('What is your name? ');
alert('Hello ' + userName + ' This is your day trip generator!');

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
alert('For your first destination we choose...' + (result0));
let expr = prompt('Is this okay with you? State yes or no. ')
if(expr == 'yes'){
    console.log('Lets continue!')
}
else {
    alert('Okay how about...' + randomGenerator(randDestination))
    prompt('Is this okay with you? State yes or no. ');
    }

//Resturant 

alert(userName + ' now lets choose a Resturant to eat!');
let result1 = randomGenerator(randResturant);
alert('For your Resturant we choose...' + (result1));
let expr1 = prompt('Is this okay with you? State yes or no. ')
if(expr1== 'yes'){
    console.log('Lets continue!')
}
else {
    alert('Okay how about...' + randomGenerator(randResturant))
    prompt('Is this okay with you? State yes or no. ');
    }

//break
alert('Sweeeet! Next lets choose your form of transportation!');
//break

//Mode of transportiation

let result2 = randomGenerator(randModeOfTransport);
alert('How does taking a ' + (result2) + ' sound like to you?' );
let expr2 = prompt('Is this okay with you? State yes or no. ')
if(expr2 == 'yes'){
    console.log('Lets continue!')
}
else {
    alert('Okay how about...' + randomGenerator(randModeOfTransport))
    prompt('Is this okay with you? State yes or no. ');
    }








alert('Awsome ' + userName + ' you are making this so easy for me!');
alert('Last but not least lets choose a form of entertainment for you to have some fun!');
let result3 = randomGenerator(randFormOfEntertainment);
console.log('For entertainment we have ' + (result3));
let anwser3 = confirm('Is this okay with you?')
if (anwser3 == false){
    console.log('Sorry about that, how about... ' + result3);
} 
else{
    console.log('')
};
console.log('Here is a summery of your trip! For your destination we have ' + (result0) + '. Next your place to eat was ' + (result1) +
'.  For form of transportation we ended with ' + (result2) + '. Lastly we are going to end your night at ' + (result3) + '!');