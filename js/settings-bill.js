var settingsBillingInstance = BillWithSettings();
    document.querySelector("#add").addEventListener('click', function(){
            var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
        
            if (checkedRadioBtn){
                var billItemTypeWithSettings = checkedRadioBtn.value;
            }
            if (billItemTypeWithSettings === "call"){
                settingsBillingInstance.makeCall();
            }
            else if (billItemTypeWithSettings === "sms"){
                settingsBillingInstance.sendSms();
             }
            
            //update the totals that is displayed on the screen.
            document.getElementById("callTotalSettings").innerHTML = settingsBillingInstance.getTotalCallCost().toFixed(2);
            document.getElementById("smsTotalSettings").innerHTML = settingsBillingInstance.getTotalSmsCost().toFixed(2);
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
        //color the total based on the criteria
        document.querySelector(".totalSettings").classList.remove("danger");
        document.querySelector(".totalSettings").classList.remove("warning");
        document.querySelector(".totalSettings").classList.add(settingsBillingInstance.totalClassName())

        }
    
         
    
    
    
     
    
    

    
    
    
    
    
