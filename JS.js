let count = 0;
let numRight = 0;
let correctOne;
let numquestions = 4;
/*
let questionendR = function(){
     document.getElementById(box);


     progress.innerText=  "you got " + score + "out of 5";
     box.innerText= " ";
     questiontitle.innerText="Thanks for playing! your score is below!!!";

};
let questionendW = function(){
     alert("ggggg")
};


//------------------------------------------------------System 4----------------------------------------------------------------------------


let question4R = function(){


     score++;
     btn0.innerText = "Mulan";
     btn1.innerText = "Aladan";
     btn2.innerText = "Lady and the tramp";
     btn3.innerText = "pocahontas";
     questiontitle.innerText="What is my favorite disney movie?";


     progress.innerText=  "i got thick feet....... Score:" + score;
     btn0.onclick=questionendW;
     btn1.onclick=questionendW;
     btn2.onclick=questionendW;
     btn3.onclick=questionendR;


};

let question4W = function(){

     btn0.innerText = "Mulan";
     btn1.innerText = "Aladan";
     btn2.innerText = "Lady and the tramp";
     btn3.innerText = "pocahontas";
     questiontitle.innerText="What is my favorite disney movie?";


     progress.innerText=  "MENS SIZE 13 NIKES!!! such a hard life." + score;
     btn0.onclick=questionendW;
     btn1.onclick=questionendW;
     btn2.onclick=questionendW;
     btn3.onclick=questionendR;

};




















//--------------------------------------------------------System3----------------------------------------------------------------------
let question3R = function(){


     score++;
     btn0.innerText = "Mens 13";
     btn1.innerText = "Mens 2";
     btn2.innerText = "Mens 12";
     btn3.innerText = "Mens 14";
     questiontitle.innerText="What is my shoe size?";


     progress.innerText=  "yea i am a gamer.   Score:" + score;
     btn0.onclick=question4W;
     btn1.onclick=question4W;
     btn2.onclick=question4R;
     btn3.onclick=question4W;

};

let question3W = function(){

     btn0.innerText = "Mens 13";
     btn1.innerText = "Mens 2";
     btn2.innerText = "Mens 12";
     btn3.innerText = "Mens 14";
     questiontitle.innerText="What is my shoe size?";


     progress.innerText=  "you get no gfuel  Score:" + score;
     btn0.onclick=question4W;
     btn1.onclick=question4W;
     btn2.onclick=question4R;
     btn3.onclick=question4W;

};







//--------------------------------------------------------System2--------------------------------------------------------------------

let question2R = function() {
     score++;
     btn0.innerText = "Rocket Leauge";
     btn1.innerText = "fallout 3";
     btn2.innerText = "Red dead redemption 2";
     btn3.innerText = "human fall flat ";
     questiontitle.innerText="What game am i currently playing?? ";

     progress.innerText=  "Nice! i do love me some purple .     Score:" + score;
     btn0.onclick=question3R;
     btn1.onclick=question3W;
     btn2.onclick=question3W;
     btn3.onclick=question3W;





};


let question2W = function() {
     btn0.innerText = "Rocket Leauge";
     btn1.innerText = "fallout 3";
     btn2.innerText = "Red dead redemption 2";
     btn3.innerText = "human fall flat ";
     questiontitle.innerText="What game am i currently playing?? ";

     progress.innerText=  "How dare you think i like that.     Score:" + score;
     btn0.onclick=question3R;
     btn1.onclick=question3W;
     btn2.onclick=question3W;
     btn3.onclick=question3W;




};








//-------------------------------------------------------System1-------------------------------------------------------------------
let next = function(){
     score++;
     document.getElementById(progress);
     progress.innerText= score;
     btn0.innerText="Blue";
     btn1.innerText="purple";
     btn2.innerText="pink";
     btn3.innerText="green";
     questiontitle.innerText="What is my Favorite color? ";
     progress.innerText=  "Aww sick!!!! you got it!!!  you got three more questions left!     Score:" + score;

     btn0.onclick=question2W;
     btn1.onclick=question2R;
     btn2.onclick=question2W;
     btn3.onclick=question2W;

};

let nextW = function(){
     btn0.innerText="Blue";
     btn1.innerText="purple";
     btn2.innerText="pink";
     btn3.innerText="green";

     btn0.onclick=question2W;
     btn1.onclick=question2R;
     btn2.onclick=question2W;
     btn3.onclick=question2W;

     document.getElementById(progress);
     progress.innerText=  "Oh no! you got it wrong. You got three questions left!    Score:" + score;
     questiontitle.innerText="What is my Favorite color? ";
};



//-------------------------------------------------------question1-------------------------------------------------------------------
let start = function(){




document.getElementById(questiontitle);
questiontitle.innerText="What is my Favorite fruit? ";

     document.getElementById(btn0);
     btn0.innerText="orange";

     document.getElementById(btn1);
     btn1.innerText="apple";

     document.getElementById(btn2);
     btn2.innerText="mango";

     document.getElementById(btn3);
     btn3.innerText="grapes";




     btn0.onclick=nextW;

     btn1.onclick=nextW;
     btn2.onclick=nextW;
     btn3.onclick=next;





     };
*/



let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");


let createQuestion = function(questionText, choice1, choice2, choice3, choice4, correctChoice){

     let question = document.getElementById("question");
     question.innerText=questionText;

     let btn0= document.getElementById("btn0");
     let btn1= document.getElementById("btn1");
     let btn2= document.getElementById("btn2");
     let btn3= document.getElementById("btn3");


     btn0.innerText=choice1;
     btn1.innerText=choice2;
     btn2.innerText=choice3;
     btn3.innerText=choice4;

     correctChoice = function(){checkCorrect(this);};
     correctOne.innerText=correctChoice;
};
let work = function () {
    
btn0.onclick = function () {checkCorrect(this);};
btn1.onclick = function () {checkCorrect(this);};
btn2.onclick = function () {checkCorrect(this);};
btn3.onclick = function () {checkCorrect(this);};

if(count === 0){
     createQuestion("What is my favorite fruit?", "oranges", "apples", "bannana", "grapes","grapes");

}else if(count === 1){
     createQuestion("what is my favorite color?", "blue", "purple", "pink", "orange","purple");
}else if(count === 2) {
     createQuestion("What game am i currently playing?", "Rocket leauge", "fallout 4", "untitled goose game", "fallout 3","Rocket leauge");

}else if(count === 3) {
     createQuestion("what size shoes do i wear?", "13", "10", "12", "11", "12");
}else{
     let question = document.getElementById("question");
     question.innerText="you got"+ numRight + "correct out of"+numquestions;
     document.getElementById("box").innerText=" ";
     document.getElementById("progress").innerText=" ";
}


     document.getElementById("progress").innerText="question"+(count+1)+"of"+numquestions;

};
let checkCorrect = function (button) {
     if(button === correctOne){
          numRight++;
          alert("hi");
     }
     count++;
     work();
};