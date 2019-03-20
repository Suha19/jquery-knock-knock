//make the computer choose a randome number
//I need to generat random number for each jim by clicking on it
//sum of jim's random number 
//compare computer number to the jim's sum
//loop untill or keep pressing on jims untill
//if the sum of jim's numbers is equal to computer number 
// you win
//if it is not you lose 
//count wins and losses



  $(document).ready(function() {
    let wincount=0;
    let losecount=0;
    let sumOfRandomNum =0;

  // generate the goal number
    const computerRanomNum = Math.floor(Math.random() * 101)+1;
    $(".computerRandomNumber").text(computerRanomNum)


  $(".jim").on("click",function(){
    const randomNum =Math.floor(Math.random() * 12) +1;
    sumOfRandomNum +=randomNum;
      $(".sumOfRandomNum").text(sumOfRandomNum)
    if (sumOfRandomNum ===computerRanomNum) {
      alert("you win");
      wincount++;
      $("#wins").text(wincount)
      sumOfRandomNum =0;
      computerRanomNum = Math.floor(Math.random() * 101)+1;
      $(".computerRandomNumber").text(computerRanomNum)
      
    }
    else if(sumOfRandomNum>computerRanomNum){
      alert("you lost")
      losecount++;
      $("#loses").text(losecount)
      sumOfRandomNum =0;
      computerRanomNum = Math.floor(Math.random() * 101)+1;
      $(".computerRandomNumber").text(computerRanomNum)
      
    }
    

})
});
