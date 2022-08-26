const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkNumberButton=document.querySelector("#check-number");
const outputBoxArea= document.querySelector("#output-boxarea");
//window.confirm("This is to inform you that this website does not store any data.Please press OK to confirm");

function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum  = calculateSum(dob);
    const lucky= luckyNumber.value;
    if(sum>0 && lucky>0)
    compareValues(sum,luckyNumber.value);
    else
    outputBoxArea.innerText="Please enter both the values";
}
function compareValues(sum,luckyNumber)
{
    if(sum%luckyNumber==0)
    { outputBoxArea.innerText ="Your birthday is a lucky number ";
   
}else
    outputBoxArea.innerText ="Your birthday is not a lucky number ";

}
function bothValues(){}

function calculateSum(dob)
{
    dob = dob.replaceAll("-","");
  
    let sum=0;
    for(let index=0;index<dob.length;index++)
    {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

checkNumberButton.addEventListener('click',checkBirthDateIsLucky)