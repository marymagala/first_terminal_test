export default function transportFee(workingShift){
    var shift1 = ['morning']
    var shift2 = ['afternoon']
    var shift3 = ['nightshift']

    if (shift1.includes(workingShift)) {
      return 'R20';   
    } else if (shift2.includes(workingShift)) {
        return 'R10';     
       } else if (shift3.includes(workingShift)) {
         return 'free';
        }
    }
    