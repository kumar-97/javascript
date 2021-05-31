// alert('first challenge');
function ageIndays() {
    var byear = prompt('what is ur birth year');
    var ageindaz = (2020 - byear) * 365;
    console.log('age ind days ' + ageindaz)
    var h1 = document.createElement('h1');
    var txtanswer = document.createTextNode('you are ' + ageindaz + 'days old');
    h1.setAttribute('id', 'ageIndays');
    h1.appendChild(txtanswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset() {
    document.getElementById('ageIndays').remove();
}

// challenge 2
//https://unsplash.com/photos/Wq4PfkZelk0
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-get-cat');
    image.src = "file:///F:/New%20folder/javaScript/firstchallenge/cat.jpg";
    div.appendChild(image);
}

//challeng 3 rock paper scicors

function rpsGame(yourChoice) {

    console.log('your choice ', yourChoice.id);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberChoice(computerChoice());
    console.log('computer choice', botChoice);
    result = decideWinner(humanChoice, botChoice); // return array [0,1] human lost bot won
    console.log('result array', result);
    message = finalMessage(result); // return string or js object having message (you won or lost) & color 
    console.log('final message ', message);
    rpsFrontEnd(yourChoice.id, botChoice, message)
}

function computerChoice() {
    return Math.floor(Math.random() * 3);


}
function numberChoice(number) {
    return ['rock', 'paper', 'scisors'][number]
}
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scisors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'scisors': 0, 'rock': 1, 'paper': 0.5 },
        'scisors': { 'scisors': 0.5, 'rock': 0, 'paper': 1 },
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {

    if (yourScore === 0) {
        return { 'message': 'you lost', 'color': 'red' };
    }
    else if (yourScore === 0.5) {
        return { 'message': 'you tie', 'color': 'yellow' };
    } else {
        return { 'message': 'win', 'color': 'green' };
    }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scisors': document.getElementById('scisors').src
    }
    //once click remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scisors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src=' " + imagesDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px blue' > "
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);

    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:60px ; padding:30px ;'>" + finalMessage['message'] + "</h1>"
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);

    botDiv.innerHTML = "<img src=' " + imagesDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px blue' > "
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

// Challenge 4
var all_buttons = document.getElementsByTagName('button');
console.log('button data ', all_buttons);
var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log('Copy ALl Buttons ', copyAllButtons);

function buttonColorChange(buttonThingy) {
    console.log(buttonThingy.value);
    if (buttonThingy.value === 'red')
        buttonsRed();
    else if (buttonThingy.value == 'green')
        buttonsGreen();
    else if (buttonThingy.value === 'random')
        buttonsRandom();
    else if (buttonThingy.value === 'reset')
        buttonsReset();
}

function buttonsRed(){
    console.log('making all buttons red');
    for(let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    console.log('make all greens')
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsReset(){
    console.log('rset all buttons');
    for(let i=0;i<all_buttons.length;i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonsRandom(){
    console.log('random color');
    for(let i=0; i<all_buttons.length ; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        var random = randomNumber();
        console.log(random)
        all_buttons[i].classList.add(copyAllButtons[random]);
    }
}

function randomNumber(){
    return Math.floor(Math.random()*7);
}