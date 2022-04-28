//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button



function totalPhoneBill(){
    let str=document.getElementById("billString").value;                                                                                                 
    var services=str.split(',');
     var totalAmt=0;
     for(let i=0; i < services.length;i++){
       let rendered=services[i].trim();
       if(rendered==='call'){
         totalAmt += 2.75;
       }else if(rendered==='sms'){
         totalAmt += 0.65;
       }
     }
     
     let totalFee=(totalAmt).toFixed(2);

     document.getElementById("billTotal").innerHTML=totalFee;
     
     
     if (totalFee >= 20){
        // adding the danger class will make the text red
        document.getElementById("total").classList.add("orange1");
    }
    if (totalFee > 30){
    document.getElementById("total").classList.add("red1");
        
    }

     
     
    //  return 'R' + totalFee;
   
   }
   
   
