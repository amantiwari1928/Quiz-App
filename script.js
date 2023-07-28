const quizDB = [
    {
        question: "Q1: PoP stands for :",
        a: "Pre Office Protocol",
        b: "Post Office Protocol",
        c: "Protocol of Post",
        d: "None",
        ans: "ans2"
    },
    {
        question: "Q2: OSI stands for :",
        a: "Operating System interface",
        b: "Optical System Interconnection",
        c: "Optical System Internet",
        d: "Open System Interconnection",
        ans: "ans4"
    },
    {
        question: "Q3: HTTP stands for :",
        a: "HyperText Transfer Protocol",
        b: "HyperText Transfer Package",
        c: "Hyper Transfer Text Package",
        d: "Hyper Transfer Text Practise",
        ans: "ans1"
    },
    {
        question: "Q4: LAN stands for :",
        a: "Local Array Network",
        b: "Local Area Network",
        c: "Local Area Net",
        d: "None",
        ans: "ans2"
    },
    {
        question: "Q5: MAC stands for :",
        a: "Media Access Control",
        b: "Mass Access Control",
        c: "Media Access Carriage",
        d: "None",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const submit =document.querySelector('#submit');

const ShowScore = document.querySelector('#ShowScore');

const answers = document.querySelectorAll('.answer');

let questionCount = 0;
let score = 0;

const LoadQuestion = () => {

    const QuestionList = quizDB[questionCount];

    question.innerHTML = QuestionList.question;

    option1.innerHTML = QuestionList.a;
    option2.innerHTML = QuestionList.b;
    option3.innerHTML = QuestionList.c;
    option4.innerHTML = QuestionList.d;

}

LoadQuestion();

const GetCheckAnswer = () =>{
    let answer;

    answers.forEach((CurAnsElem)=>{
        if(CurAnsElem.checked){
            answer = CurAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((CurAnsElem)=> CurAnsElem.checked = false );
}

submit.addEventListener('click' , () => {
    const CheckedAnswer = GetCheckAnswer();
    console.log(CheckedAnswer);
    
    if(CheckedAnswer == quizDB[questionCount].ans){
        score++;
    };
    
    questionCount++;
    // console.log(questionCount);

    deselectAll();

    if(questionCount < quizDB.length){
        LoadQuestion();
    }else{
        ShowScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        ShowScore.classList.remove('ScoreArea');
    }
});
// console.log(quizDB.length);