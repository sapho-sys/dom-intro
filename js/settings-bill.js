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


var callsTotal2=0;
var smsTotal2=0;
var totalCost2=0;
var  selectedBtn=document.getElementById("Entry");
selectedBtn.addEventListener('click', update)
var settingsCall = 0
var settingsSms = 0;
var settingsCritics = 0;
var settingsWarn = 0;



function settingsBill(){



   

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if (checkedRadioBtn){
        var billItemTypeWithSettings = checkedRadioBtn.value;
        // billItemType will be 'call' or 'sms'
    }
    
    if (billItemTypeWithSettings === "call"){
        console.log('Call: ', settingsCall)
        callsTotal2 += settingsCall;
    }
    else if (billItemTypeWithSettings === "sms"){
        smsTotal2 += settingsSms;
    }
    
    //update the totals that is displayed on the screen.
    document.getElementById("callTotalSettings").innerHTML = callsTotal2.toFixed(2);
    document.getElementById("smsTotalSettings").innerHTML = smsTotal2.toFixed(2);
    var totalCost2 = callsTotal2 + smsTotal2;
    document.getElementById("totalSettings").innerHTML = totalCost2.toFixed(2);

    //disable button if critical level is met
    var btn=document.getElementById("add");
    if(totalCost2 < settingsCritics){
        btn.disabled=false;
    }else if(totalCost2 > settingsCritics){
        btn.disabled=true;

}

    

    


   
    
    //color the total based on the criteria
     if (totalCost2 > settingsCritics){
       
        // adding the danger class will make the text red
        document.getElementById("totalSettings").classList.add("danger");
        
           }
              else if (totalCost2 > settingsWarn){
        document.getElementById("totalSettings").classList.add("warning");


        }

    

    
    }


  

    function update(){
        settingsCall = Number(document.getElementById("callCost").value);

        settingsSms = Number(document.getElementById("smsCost").value);

        settingsCritics = Number(document.getElementById("critical").value);

        settingsWarn = Number(document.getElementById("warning").value);
        
    }
    
    
    
    
    
