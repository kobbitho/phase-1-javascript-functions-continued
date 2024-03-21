// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;    
}


function mondayWork(work = "go to the office"){
 return `This Monday, I will ${work}.`;
}


function wrapAdjective(myWrap = "*"){
    function inner (adjective = "special"){
         return `You are ${myWrap}${adjective}${myWrap}!`;
 };
 return inner;
}