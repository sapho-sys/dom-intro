function BillWithSettings(){

    var theCallCost=0;
    var theSmsCost=0;

    var theWarningLevel=0;
    var theCriticalLevel=0;

    var smsCostTotal=0;
    var callCostTotal=0;

    function setCallCost(callCost){
        theCallCost = callCost;
    }

    function getCallCost(){
        return theCallCost;
    }
    function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }
    function getSmsCost(){
        return theSmsCost;
    }

    function getTotalSmsCost(){
        return smsCostTotal;
    }

    function getTotalCallCost(){
        return callCostTotal;
    }
    function getTotalCost(){
        return  smsCostTotal + callCostTotal;
    }

    function setWarningLevel(warningLevel){
        theWarningLevel = warningLevel;
    }
    function getWarningLevel(){
        return theWarningLevel;
    }

    function setCriticalLevel(criticalLevel){
        theCriticalLevel = criticalLevel;
    }

    function getCriticalLevel(){
        return theCriticalLevel;
    }

    function totalClassName(){
        if(hasReachedCriticalLevel()){
            return "danger"
        }

        if(getTotalCost() >= getWarningLevel()){
            return "warning"
        }
    }

    return {
        setCallCost,
        getCallCost,
        getSmsCost,
        setSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        sendSms,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        totalClassName
    }




    function sendSms(){
        if(!hasReachedCriticalLevel()){
            smsCostTotal += theSmsCost;
        }
    }
        function makeCall(){
            if(!hasReachedCriticalLevel()){
                callCostTotal += theCallCost;
            }
        }

        function hasReachedCriticalLevel(){
            return getTotalCost() >= getCriticalLevel();
        }


    }




