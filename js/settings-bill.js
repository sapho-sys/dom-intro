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

var settingsBillingInstance = BillWithSettings();


    document.querySelector("#add").addEventListener('click', function(){
            var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
        
            if (checkedRadioBtn){
                var billItemTypeWithSettings = checkedRadioBtn.value;
                // billItemType will be 'call' or 'sms'
            }
            
            if (billItemTypeWithSettings === "call"){
                settingsBillingInstance.makeCall();
                // callsTotal2 += settingsCall;
        
            }
            else if (billItemTypeWithSettings === "sms"){
                settingsBillingInstance.sendSms();
                //smsTotal2 += settingsSms;
            }
            
            //update the totals that is displayed on the screen.
            document.getElementById("callTotalSettings").innerHTML = settingsBillingInstance.getTotalCallCost().toFixed(2);
            document.getElementById("smsTotalSettings").innerHTML = settingsBillingInstance.getTotalSmsCost().toFixed(2);
            // var totalCost2 = callsTotal2 + smsTotal2;
            document.querySelector(".totalSettings").innerHTML = settingsBillingInstance.getTotalCost().toFixed(2);
            applyColor();
        
           
        
            
            
            
            })
        
        

        


    document.querySelector(".updateSettings").addEventListener('click', function (){
        settingsBillingInstance.setCallCost(Number(document.getElementById("callCost").value));
        settingsBillingInstance.setSmsCost(Number(document.getElementById("smsCost").value));

        settingsBillingInstance.setCriticalLevel(Number(document.getElementById("critical").value));

        settingsBillingInstance.setWarningLevel(Number(document.getElementById("warning").value));
        
        
        

    })

    function applyColor(){
        // //color the total based on the criteria
        document.querySelector(".totalSettings").classList.remove("danger");
        document.querySelector(".totalSettings").classList.remove("warning");
        document.querySelector(".totalSettings").classList.add(settingsBillingInstance.totalClassName())

        }
    
         
    
    
    
     
    
    

    
    
    
    
    
