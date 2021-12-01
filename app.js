const birthday = document.querySelector("#birthday")
const luckynum = document.getElementById("luckynumber")
var submit = document.getElementById("submit")
var message = document.querySelector("#message")

function parsebirthdate(date)
{
    year = date.slice(0,4)
    month = date.slice(5,7)
    day = date.slice(8)
    num = year + month + day
    return parseInt(num)
}

function checIfLucky(){
    var birthNo = birthday.value
    var luckyNo = luckynum.value;
    if(birthNo=='' || luckyNo=='')
    {
        message.innerText="Enter both the values! 😠"
    }
    else
    {
    birthNo = parsebirthdate(birthNo)
    var sum = 0
    while(birthNo!=0)
    {
        var digit = birthNo%10;
        sum+=digit;
        birthNo=Math.floor(birthNo/10);
    }
    console.log(sum);
    if(sum%luckyNo==0)
    {
        message.innerHTML = "<img src='images/celebration.gif' alt='celebrate' width='400px' height='320px'/><br>You have a lucky birthday! 🎉"
    }
    else{
        message.innerHTML = "<img src='images/crying.gif' alt='celebrate' width='320px' height='320px'/><br>You have an unlucky birthday! 😔"
    }}
}

submit.addEventListener("click", checIfLucky);