var celcius=document.getElementById('cel')
var fahrenheit=document.getElementById('far')
var g=document.getElementById('grams')
var kg=document.getElementById('kgrams')
var m=document.getElementById('meter')
var km=document.getElementById('kmeter')
var ml=document.getElementById('milli')
var l=document.getElementById('liter')

celcius.addEventListener('input',function(){
    let c=this.value;
    let f=(c*(9/5))+32;
    if(!Number.isInteger(f)){
        f=f.toFixed(2);
    }
    fahrenheit.value=f;
});

fahrenheit.addEventListener('input',function(){
    let f=this.value;
    let c=(f-32)* 5/9;
    if(!Number.isInteger(c)){
        c=c.toFixed(2);
    }
    celcius.value=c;
});

kg.addEventListener('input',function(){
    let kgr=this.value;
    let gr=kgr*1000;
    g.value=gr;
});

g.addEventListener('input',function(){
    let g=this.value;
    let kgr=g/1000;
    kg.value=kgr;
});

l.addEventListener('input',function(){
    let ltr=this.value;
    let m=ltr*1000;
    ml.value=m;
});

ml.addEventListener('input',function(){
    let ml=this.value;
    let lt=ml/1000;
    l.value=lt;
});

m.addEventListener('input',function(){
    let mtr=this.value;
    let kmm=mtr/1000;
    km.value=kmm;
});

km.addEventListener('input',function(){
    let kmm=this.value;
    let mtr=kmm*1000;
    m.value=mtr;
});