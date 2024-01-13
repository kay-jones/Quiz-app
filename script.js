let start_btn = document.querySelector(".start-btn button");
let info_box = document.querySelector(".info_box");
let exit_btn = info_box.querySelector(".buttons .quit");
let continue_btn = info_box.querySelector(".buttons restart");
let quiz_box = document.querySelector(".quiz_box");


//if start is clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeinfo");//show
}

//if the Exit button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeinfo");//hide
}

//when continue button is clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeinfo");
    quiz_box.classList.add("activeQuiz");//show quiz
    showQuestions(0);
}

let que_count = 0;

//getting question and options from array
function showQuestions(index){
    let que_text = document.querySelector(".que_text");
    let options_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[index].question +'</span>';
    let option_tag = '';
    que_text.innerHTML = que_tag;
}