// Code your solutions in this file
const receiver = [`Ada`, `Brendan`, `Ali`]

const eventVariable = "birthday"


function writeCards(receiver, eventVariable) {

    let newArray = [];
        for (let i = 0; i < receiver.length; i++) {
            newArray.push(`Thank you, ${receiver[i]}, for the wonderful ${eventVariable} gift!`)

        }
        debugger;

        return newArray; 

    
}

console.log(writeCards('receiver', 'eventVariable'));

function countDown(init = 10){

    while (init >= 0){
        console.log(init --);
    }
}
