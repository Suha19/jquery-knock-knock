//make the computer choose a randome number
//I need to generat random number for each jim by clicking on it
//sum of jim's random number 
//compare computer randome number to the jim's sum
//loop untill or keep pressing on jims untill
//if the the sum of jim's numbers is equal to random number 
// you win
//if it is more you lose 
//count wins and losses



  $(document).ready(function() {
    let wincount=0;
    let lossescount=0;
    let sumOfRandomNum =0;

  // generate the goal number
    let computerRanomNum = Math.floor(Math.random() * 101)+1;
    $(".computerRandomNumber").text(computerRanomNum)


  $(".jim").on("click",function(){
    let randomNum =Math.floor(Math.random() * 12) +1;
    sumOfRandomNum +=randomNum;
      $(".sumOfRandomNum").text(sumOfRandomNum)
    if (sumOfRandomNum ===computerRanomNum) {
      alert("you win");
      wincount++;
      $("#wins").text(wincount)
      sumOfRandomNum =0;
      computerRanomNum = Math.floor(Math.random() * 101)+1;
      $(".computerRandomNumber").text(computerRanomNum)
      console.log(computerRanomNum);
    }
    else if(sumOfRandomNum>computerRanomNum){
      alert("you lost")
      lossescount++;
      $("#losses").text(lossescount)
      sumOfRandomNum =0;
      computerRanomNum = Math.floor(Math.random() * 101)+1;
      $(".computerRandomNumber").text(computerRanomNum)
      console.log(computerRanomNum);
    }
    

})
});
