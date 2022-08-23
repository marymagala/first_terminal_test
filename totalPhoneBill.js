export default function totalPhoneBill(dataBill){
    let totalDataBill = dataBill.split(",")
    let callsAndSms =0;
    for (var i=0; i<totalDataBill.length; i++){
      var totalDataBill2 = totalDataBill[i].trim()
      if (totalDataBill2.startsWith("c")){
    callsAndSms +=2.75
          }else if (totalDataBill2.startsWith("s")){
       callsAndSms +=0.65 
            
      }
    }
    return  "R" + callsAndSms.toFixed(2)
    }