let randDestination = ['Milwaukee', 'Madison', 'Wisconsin Dells', 'Lake Geneva'];
let randResturant = ['Culvers', 'Kopps', 'Olive Garden', 'Texas Roadhouse'];
let randModeOfTransport = ['Uber', 'Lyft', 'Public Bus', 'Bycicle'];
let randFormOfEntertainment = ['Movies', 'Open Mic Night', 'Sporting Event', 'Concert'];
let item = [0,1,2,3];




function randomGenerator(randDestination, randResturant, randModeOfTransport, randFormOfEntertainment){
    let randomNumber0 = Math.floor(Math.random()*randDestination.length);
    let randomNumber1 = Math.floor(Math.random()*randResturant.length);
    let randomNumber2 = Math.floor(Math.random()*randModeOfTransport.length);
    let randomNumber3 = Math.floor(Math.random()*randFormOfEntertainment.length);

   

    let item = randDestination[randomNumber0];
    let item = randResturant[randomNumber1];
    let item = randModeOfTransport[randomNumber2];
    let item = randFormOfEntertainment[randomNumber3];
    return item;
 }

 let result = randomGenerator(randDestination);
 console.log(result);