export default function mostProfitableDepartment(Data){
    var salesMap={}
    for(var i=0;i<Data.length;i++){
    var totalSales = Data[i]
    if (salesMap[totalSales.department]===undefined) {
    salesMap[totalSales.department] = 0   
    }
     
    var currentSalesTotal = salesMap[totalSales.department]
    currentSalesTotal += totalSales.sales
    salesMap[totalSales.department] = currentSalesTotal
    }console.log(salesMap)   
      
    var MaxValue = 0
    var salesDepartment =' '
    for(var salesDataDepartment in salesMap){
    console.log(salesDataDepartment)
    console.log(salesMap[salesDataDepartment])
    var currentValue = salesMap[salesDataDepartment]
    if (currentValue> MaxValue){
    MaxValue= currentValue
    salesDepartment = salesDataDepartment
      
    }
    } 
    //console.log(currentMax)
    console.log(salesDepartment) 
      return salesDepartment
    }  
    
    function mostProfitableDay(salesData){
    var saleMap={}
    for(var i=0;i<salesData.length;i++){
    var totalSales2 = salesData[i]
    if (saleMap[totalSales2.day]===undefined) {
    saleMap[totalSales2.day] = 0   
      }
     
    var currentSalesTotal = saleMap[totalSales2.day]
    currentSalesTotal += totalSales2.sales
    saleMap[totalSales2.day] = currentSalesTotal
    }console.log(saleMap)
      
    var MaxValue2 = 0
    var salesDay = ' '
    for(var salesDataDay in saleMap){
    //console.log(salesDataDay)
    //console.log(salesMap[salesDataDepartment])
    var currentValue2 = saleMap[salesDataDay]
    if (currentValue2> MaxValue2){
    MaxValue2 = currentValue2
    salesDay = salesDataDay
      
    }
    } 
}