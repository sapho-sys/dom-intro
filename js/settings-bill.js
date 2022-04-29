// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.





function settingsBill(){



   

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if (checkedRadioBtn){
        var billItemTypeWithSettings = checkedRadioBtn.value;
        // billItemType will be 'call' or 'sms'
    }
    
    if (billItemTypeWithSettings === "call"){
        callsTotal += call;
    }
    else if (billItemTypeWithSettings === "sms"){
        smsTotal += sms;
    }
    
    //update the totals that is displayed on the screen.
    document.getElementById("callTotalSettings").innerHTML = callsTotal.toFixed(2);
    document.getElementById("smsTotalSettings").innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    document.getElementById("totalSettings").innerHTML = totalCost.toFixed(2);
    
     //color the total based on the criteria
     if (totalCost >= critic){
        // adding the danger class will make the text red
        document.getElementById("totalSettings").classList.add("danger");
    }
    else if (totalCost >= warn){
        document.getElementById("totalSettings").classList.add("warning");
    }
    }


    function update(){


        var call=document.getElementById("callCost").value;
        var sms=document.getElementById("smsCost").value;
        var critic=document.getElementById("critical").value;
        var warn=doucument.getElementById("warning").value;
        
    }
    
    
    
    
