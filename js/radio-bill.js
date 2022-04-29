// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


//textTotalAddBtn.addEventListener('click', textBillTotal);
function radioBill(){
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
}

if (billItemType === "call"){
    callsTotal += 2.75
}
else if (billItemType === "sms"){
    smsTotal += 0.75;
}

//update the totals that is displayed on the screen.
document.getElementById("callTotalTwo").innerHTML = callsTotal.toFixed(2);
document.getElementById("smsTotalTwo").innerHTML = smsTotal.toFixed(2);
var totalCost = callsTotal + smsTotal;
document.getElementById("totalTwo").innerHTML = totalCost.toFixed(2);

 //color the total based on the criteria
 if (totalCost >= 50){
    // adding the danger class will make the text red
    document.getElementById("totalTwo").classList.add("danger");
}
else if (totalCost >= 30){
    document.getElementById("totalTwo").classList.add("warning");
}
}



