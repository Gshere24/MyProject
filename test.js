const prompt = require('prompt-sync')({sigint: true});

let targetNumber = Math.floor(Math.random() *100) + 1;
let guess =  57;

while (guess !== targetNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));

if(guess>targetNumber){
    console.log("그것보다 작아요.");
} else if(guess<targetNumber){
    console.log("그것보다 커요.");
} else{
    console.log("정답이에요.");
    break; 
}
}

//guess(입력값)이 target number보다 크면, '그것보다 작아요.'라고 출력해주자. (if)
//guess(입력값)이 target number보다 작으면, '그것보다 커요.'라고 출력해주자. (if else)
//guess(입력값)과 target number가 같으면, '정답이에요.'라고 출력하고 while을 종료. (else)

