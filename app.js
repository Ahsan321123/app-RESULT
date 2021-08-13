var a = [{ name: 'Ahsan', age: 21, contact: 001, institute: 'SAIMS', result: 0 },
{ name:'ibrahim', age:22, contact:002, institute:'SAIMS', result:1 },
{ name:'Hamza', age:21, contact:003, institute:'SAIMS', result:0 },
{ name:'raheel', age:18, contact:004, institute:'SAIMS', result:1 },
{ name:'zubair', age:23, contact:005, institute:'SAIMS', result:1 },
{ name:'Sami', age:22, contact:006, institute:'SAIMS', result:0 },
{ name:'sarwar', age:24, contact:007, institute:'SAIMS', result:0 },
]

for(var i = 0; i < a.length; i++){
    a[i].RollNumber = i+1;
    if(a[i].result == 0){
        a[i].status = 'fail'
    }
    else{
        a[i].status = 'pass'
    }
}
console.log(a)
var inp = document.getElementById('rollnumber')
var dName = document.getElementById('displayname')
var dRes = document.getElementById('displayresult')
function show(){
    for(var j = 0; j < a.length; j++){
        if(a[j].RollNumber == inp.value){
            if(a[j].result){
               dName.innerHTML = a[j].name
                dRes.innerHTML = 'pass'
                
            }
            else{
                dName.innerHTML = a[j].name
                dRes.innerHTML = 'Fail'
            }
        }
    }
}