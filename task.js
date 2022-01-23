let userName = prompt('What is your name?');
let userAge = +prompt('How old are you?')
const forbidVisit = 'You are not allowed to visit this website';
if(userAge < 18){
    alert(forbidVisit);
} else if(userAge >= 18 && userAge <=22){
    let userAgreement = confirm('Are you sure you want to continue?');
    if(true) {
        alert(`Welcome, ${userName}`);
    } else {
        alert(forbidVisit);
    }
} else {
    alert(`Welcome, ${userName}`)
}