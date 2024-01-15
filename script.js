let start_btn = document.querySelector(".start-btn button");
let info_box = document.querySelector(".info-box");
let exit_btn = info_box.querySelector(".buttons .quit");
let continue_btn = info_box.querySelector(".buttons .restart");
let quiz_box = document.querySelector(".quiz-box");
let option_list = document.querySelector(".options-list");
let timeCount = quiz_box.querySelector(".timer .time-sec");
let timeLine = quiz_box.querySelector(".header .time-line")


//if start is clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeinfo");//show hte info box
}

//if the Exit button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeinfo");//hide the info box
}

//when continue button is clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeinfo");
    quiz_box.classList.add("activeQuiz");//show quiz
    showQuestions(0);
    queCounter(1);
    startTimer(20);
    startTimerLine(time)
}

let que_count = 0;
let que_num =1;
let counter;
let timeValue = 20;
let widthValue = 0;

let next_btn = quiz_box.querySelector(".next-btn");
let result_box = document.querySelector(".result-box");
let restart_quiz = result_box.querySelector(".result_box")

//if the next button is clicked
next_btn.onclick = ()=>{
    if (que_count < questions.length - 1){
        que_count++;
        que_num++;
    showQuestions(que_count);
    queCounter(que_num);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
    }else{
        console.log("you are done")
    }
}

//getting question and options from array
function showQuestions(index){
    let que_text = document.querySelector(".quest");
    let que_tag = '<span>'+ questions[index].num + ". "+ questions[index].question +'</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] +'<span></span></div>'
                     + '<div class="option">' + questions[index].options[1] +'<span></span></div>'
                     + '<div class="option">' + questions[index].options[2] +'<span></span></div>'
                     + '<div class="option">' + questions[index].options[3] +'<span></span></div>' ;
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    let option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
        
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns =questions[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log("Answer is Correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
        
    }else{
        answer.classList.add("incorrect");
        console.log("Answer is wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);


        //if answer is incorrect then automtically selected the correct answer
        for (let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textcontent == correctAns){
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", crossIcon);
            }
            
        }
    }

    //once user selected disabled all options
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");

        
    }
    next_btn.style.display = "block";

}function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00"
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
         time += 1;
         timeLine.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }
}







function queCounter (index){
    let bottom_ques_counter = quiz_box.querySelector(".total-ques");
    let totalQUesCount = '<span><p>'+ que_count +'</p>Of<p>'+ questions.length +'</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQUesCount;
}