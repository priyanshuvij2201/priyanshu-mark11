const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkNumberButton=document.querySelector("#check-number");

function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum  = calculateSum(dob);
    console.log(sum);
}
function calculateSum(dob)
{
    dob = dob.replaceAll("-","");
    console.log(dob);
    let sum=0;
    for(let index=0;index<dob.length;index++)
    {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

checkNumberButton.addEventListener('click',checkBirthDateIsLucky)