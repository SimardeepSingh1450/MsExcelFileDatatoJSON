var XLSX=require('xlsx');
var workbook=XLSX.readFile('./excelfilename.xlsx',{sheetStubs:true});
let worksheet=workbook.Sheets[workbook.SheetNames[0]];
const arr4=[];
//Variable 1 ,2 and 3 store data from Columns A I and C of Excel Sheet...
for(let index=0;index<rownosofexcelsheet;index++){
    let variable1=worksheet[`A${index}`].v;
    const variable2=worksheet[`I${index}`].v;
    const variable3=worksheet[`C${index}`].v;
    arr4.push({valueobtained1:variable1,valueobtained2:variable2,valueobtained3:variable3})//Add data to Array as Objects...
}
const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send(arr4);//Send Data from Excel to 3001 for Displaying
})
app.listen(3001,()=>{console.log('Server Listening on 3001...')});