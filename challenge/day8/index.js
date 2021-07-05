const maxNumInput = document.querySelector("#maxNum");
const guessNumInput = document.querySelector("#guessNum");
const playBtn = document.querySelector(".playBtn");
const resultText = document.querySelector("#result-text");

playBtn.addEventListener("click", () => {
    let machineNum = Math.floor(Math.random()*(parseInt(maxNumInput.value) + 1)); //랜덤숫자 만들기
    let guessNum = parseInt(guessNumInput.value);
    if(isNaN(guessNum)){ //guessNum 없을때
        alert("Please Write the number");
    }else{
        const resultDiv = document.querySelector(".result"); //결과 문장 보여주기
        resultDiv.style.display = "flex";

        document.querySelector("#chooseNum").innerHTML = guessNum; //결과지에 숫자 써주기
        document.querySelector("#machineNum").innerHTML = machineNum;

        if(machineNum === guessNum){ //랜덤숫자 = 내숫자
            resultText.innerHTML = "You Win!";
            resultText.style.background = "lightcoral";
            resultText.style.color = "#fff"
        } else{ //랜덤숫자 != 내숫자
            resultText.innerHTML = "You Lose";
            resultText.style.background = "slateblue";
            resultText.style.color = "#fff"
        }
    }
})


