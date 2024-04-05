const btn=document.getElementById("btn");
const btns=document.querySelectorAll(".btns");
const choose_img = document.getElementById("choose_img");
const comp_result = document.getElementById("comp_result");
const result = document.getElementById("result");
const comp= document.getElementById("comp");
var index = -1;
var player1_ans = -1;
const option = ["stone","paper","scissor"];

// player 1 options

btns.forEach(function (btn){
  btn.addEventListener('click',function (e) {
    const random= Math.floor(Math.random()*3);
    let styles = e.currentTarget.classList;
    if(styles.contains("stone")){
        player1_ans = "stone";
        choose_img.src= "image/stone.jpg";
        }
        else if(styles.contains("paper")){
          player1_ans = "paper";
          choose_img.src= "image/paper.jpg"; 
        }
        else if(styles.contains("scissor")){
          player1_ans = "scissor";
          choose_img.src= "image/scissor.jpg";
        }
        var comp_ans = option[random];
        if(comp_ans == "stone"){
          comp.src= "image/stone.jpg";
        }else if(comp_ans == "paper"){
          comp.src= "image/paper.jpg";
        }else if(comp_ans == "scissor"){
          comp.src= "image/scissor.jpg";
        }
        var res = compare(player1_ans,comp_ans);
        setTimeout(function(){
          result.textContent= "Winner is : " + res + "👏👏";
        },900);      
    }); 
});

function compare(optn1, optn2){
  if(optn1 == optn2){
    return "It is a draw";
  }
  else if(optn1 == "stone"){
    if(optn2 == "paper"){
      return "Khushi";
    }else{
      return "New Player";
    }
  }
  else if(optn1 == "paper"){
    if(optn2 == "stone"){
      return "New Player";
    }else{
      return "Khushi";
    }
  }
  else if(optn1 == "scissor"){
    if(optn2 == "paper"){
      return "New Player";
    }else{
      return "Khushi";
    }
  }
}



