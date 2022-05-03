// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var callsTotal1 = 0;
var smsTotal1 = 0;
function textBillTotal(){

    // var letters = /^[A-Za-z]/;

   


    // get the value entered in the billType textfield
    var billTypeEntered = document.getElementById("billTypeText").value.toLowerCase();
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal1 += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal1 += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    document.getElementById("callTotalOne").innerHTML = callsTotal1.toFixed(2);
    document.getElementById("smsTotalOne").innerHTML = smsTotal1.toFixed(2);
    var totalCost1 = callsTotal1 + smsTotal1;
    document.getElementById("totalOne").innerHTML = totalCost1.toFixed(2);

     //color the total based on the criteria
     if (totalCost1 >= 50){
        // adding the danger class will make the text red
        document.getElementById("totalOne").classList.add("danger");
    }
    else if (totalCost1 >= 30){
        document.getElementById("totalOne").classList.add("warning");
    }
}
