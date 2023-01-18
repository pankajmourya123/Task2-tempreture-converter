let cal=document.getElementById("cal") 
let fah=document.getElementById("fah")
let kel=document.getElementById("kel")
cal.addEventListener('input',function(){
    let c =Number( this.value);
    let f =(c*9/5)+32;
    let k = Number( c + 273.15)

    if(!Number.isInteger(f)){
        f=f.toFixed(4)
    }
    fah.value = f;
    kel.value = k;
   
})

fah.addEventListener('input',function(){
    let f = Number(this.value);
    let c =(f-32)*5/9;
    let k=(32*f - 32) *5/9 + 273.15
    if(!Number.isInteger(c)){
        c=c.toFixed(4)
    }
    cal.value=c;
    kel.value=k;
}) 

kel.addEventListener('input',function(){
    let k = Number(this.value);
    let c =k - 273.15;
    let f=(k - 273.15) * 9/5 + 32
    if(!Number.isInteger(c)){
        c=c.toFixed(4)
    }
    cal.value=c;
     fah.value=f;
}) 