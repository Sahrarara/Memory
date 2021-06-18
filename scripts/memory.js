// let div = document.querySelector('#ayylmao');


// function doCSS(name){
//     let div = document.querySelector('#ayylmao');
//     div.innerHTML = 'Hallo <em>' + name +'</em>';
//     div.style.backgroundColor='#C00';
// };
// doCSS('Sarah');


// function ArrayString (a){
//     let b = a.split('');
//     console.log(b);

// }
// ArrayString('Hello World!');


// let d = [1,2,3,4,5];
// let e = Array.from(d, squareMe);
// console.log(e);
// function squareMe(x){
//     return x*x;
// }



// function doSomething(theday){
//     console.log('Heute ist ' + theday)
// }
// doSomething('Mittwoch');


// let a = Math.random() * 30;
// let b = Math.round(a);
// console.log(b);

// console.log(Math.round(Math.random()*30));


// let str = 'Hello World!';
// console.log(str.length);

// let str = ['Anton', 'Julius', 'Markus', 'Tom', 'Ana'];
// console.log(str.length);

// let str = ['Anton', 'Julius', 'Markus', 'Tom', 'Ana'];
// let nmbr = Math.round(Math.random()*4)
// console.log(str[nmbr]);

// let str = ['Anton', 'Julius', 'Markus', 'Tom', 'Ana'];
// console.log(str[Math.round(Math.random()*4)]);


// let str = ['Anton', 'Julius', 'Markus', 'Tom', 'Ana', 'Lucy', 'Andrea', 'Karl', 'Susi', 'Max', 'Toni' ];
// let rndm = Math.random() * (str.length -1);
// let nmbr = Math.round(rndm);
// console.log(str[nmbr]);

// function rndmName(str){
//     console.log(str[Math.round(Math.random()*(str.length - 1))]);
// };
// rndmName(['Anton', 'Julius', 'Markus', 'Tom', 'Ana', 'Lucy', 'Andrea', 'Karl', 'Susi', 'Max', 'Toni']);

// function rndmName(str){
//     let rndm = Math.random() * (str.length -1);
//     let nmbr = Math.round(rndm);
//     console.log(str[nmbr]);
// }
// rndmName(['Anton', 'Julius', 'Markus', 'Tom', 'Ana', 'Lucy', 'Andrea', 'Karl', 'Susi', 'Max', 'Toni']);


// let a = 'Suserl';

// if(a == 'Susi'){
//     console.log('Hurra!');
// }else if(a == 'Suserl'){
// console.log('Auch gut');
// }else {
//     console.log('Buh.');
// }


// for(let i = 0 ; i <= 10; i++) {
//     console.log(i);
// }


// function rndmName(str){
//         let rndm = Math.random() * (str.length -1);
//         let nmbr = Math.round(rndm);
//         console.log(str[nmbr]);
//     }
// for(let i=0; i < 3; i++){
//     rndmName(['Anton', 'Julius', 'Markus', 'Tom', 'Ana', 'Lucy', 'Andrea', 'Karl', 'Susi', 'Max', 'Toni']);
    
// }


// let myArray = ['123', '456', '789'];
// console.log(myArray);
// let z = myArray.splice(1, 1);
// console.log(myArray);
// console.log(z);


// function rndmName(names, number){
//     if(typeof names == 'object' && typeof number == 'number'){

//     let result = [];
    
//         for( let i=0; i < number; i++){
//             let rndm = Math.random() * (names.length - 1);
//             let nmbr = Math.round(rndm);
//             result.push(names[nmbr]);
//             let remove = names.splice(nmbr, 1); 
//         };
//     console.log(result);
//     } else {console.log('ERROR');}
// };
// rndmName(['Anton', 'Julius', 'Markus', 'Tom', 'Ana', 'Lucy', 'Andrea', 'Karl', 'Susi', 'Max', 'Toni'], 3);


// function rndmName(names){
//     let result = [];
    
//     for( let i=0; i < 2; i++){
//         let nmbr = 2;
//         result.push(names[nmbr]);
//         let remove = names.splice(nmbr, 2);
//         console.log(remove) 
//     };
//     console.log(result);
// };
// rndmName(['Anton', 'Julius', 'Markus', 'Tom', 'Ana', 'Lucy', 'Andrea', 'Karl', 'Susi', 'Max', 'Toni']);


// let names = ['Anton', 'Julius', 'Markus', 'Tom', 'Ana', 'Lucy', 'Andrea', 'Karl', 'Susi', 'Max', 'Toni'];
// function rndmName(){
//     let result = [];    
//     for( let i=0; i < 3; i++){
//         let rndm = Math.random() * (names.length - 1);
//         let nmbr = Math.round(rndm);
//         result.push(names[nmbr]);
//         let remove = names.splice(nmbr, 1); 
//     };
//     console.log(result);
// } ;
// rndmName();



// let meineZahl = 12;
// if(meineZahl===12){
//     for(let i=0; i<meineZahl;i++){console.log(i);}}
//     else{
//         console.log('ERROR');

// let binary = Math.pow(15, 2)
// console.log(binary);



// function bindec(binary) {
//     let ar = binary.split('');
//     console.log(ar);
//     let res = 0;
//     for(let i = 0; i < ar.length; i++){
//         if(ar[i]==1){
//             res=res+Math.pow(2,(ar.length-i-1))
//         }
//     }
//     console.log(res);
// };
// bindec('01010100');


//super short version of the above
//also reverses the array so we don't have to math backwards
// function bindec(binary) {
//     let ar = binary.split('').reverse();
//     let res = 0;
//     for(let i = 0; i < ar.length; i++){
//         res += ar[i] * Math.pow(2,i)
//     }
//     console.log(res);
// };
// bindec('100011110011101');


// let ar = ['la', 'le', 'li', 'lo'];
// // for(let i = 0; i < ar.length; i++){
// //     console.log(ar[i]);
// // }
// for(item of ar) {
//     console.log(item);
// }


// //return doesn't write the result in console but in the html if it is defined to write there
// let div = document.querySelector('#ayylmao');
// function bindec(binary) {
//     let ar = binary.split('').reverse();
//     let res = 0;
//     for(let i = 0; i < ar.length; i++){
//         res += ar[i] * Math.pow(2,i)
//     }
//     return res;
// };
// div.innerHTML = bindec('100011110011101');


// let div = document.querySelector('#ayylmao');
// function name(x){
//     return x;
// }
// div.innerHTML = name('Sarah');


// function multiply(x,y){
//     return x * y
// }
// document.querySelector('#ayylmao').innerHTML = multiply(5,6)



// function rndmName(names, Zahl){
//     let result = [];    
//     for( let i=0; i < Zahl; i++){
//         let rndm = Math.random() * (names.length - 1);
//         let nmbr = Math.round(rndm);
//         result.push(names[nmbr]);
//         let remove = names.splice(nmbr, 1); 
//     };
//     console.log(result);
// } ;
// rndmName(['Anton', 'Julius', 'Markus', 'Tom', 'Ana', 'Lucy', 'Andrea', 'Karl', 'Susi', 'Max', 'Toni'],3);


// document.addEventListener('click',clickFunction);
// function clickFunction(){
//     console.log('Hallo');    
// };


// let btn = document.querySelector('#myBtn');
// btn.addEventListener('click', myClick);
// function myClick(){
//     console.log('Hallo');
// }

//short version from above
// document.querySelector('#myBtn').addEventListener('click', myClick);
// function myClick(){
//     console.log('Hallo');
// }
//myelement.classList.add('.fas')



// function rndmsymb(memory){
//     let litem = document.querySelectorAll('.fas');
//     for(let i=0; i < litem.length; i++){
//         let nmbr = Math.round(Math.random() * (memory.length - 1));
//         litem[i].classList.add(memory.splice(nmbr, 1));
//     };  
// };
// rndmsymb(['fa-cube', 'fa-dragon', 'fa-cat', 'fa-hamburger', 'fa-meteor', 'fa-skull', 'fa-yin-yang', 'fa-hippo', 'fa-cube', 'fa-dragon', 'fa-cat', 'fa-hamburger', 'fa-meteor', 'fa-skull', 'fa-yin-yang', 'fa-hippo']);



function rndmsymb(memory){
    const litem = document.querySelectorAll('.fas');
    for(elem of litem){
        let nmbr = Math.round(Math.random() * (memory.length - 1));
        elem.classList.add(memory.splice(nmbr, 1));
    };  
};
rndmsymb(['fa-cube', 'fa-dragon', 'fa-cat', 'fa-hamburger', 'fa-meteor', 'fa-skull', 'fa-yin-yang', 'fa-hippo', 'fa-cube', 'fa-dragon', 'fa-cat', 'fa-hamburger', 'fa-meteor', 'fa-skull', 'fa-yin-yang', 'fa-hippo']);

let turn = document.querySelectorAll('.tile');
for(item of turn) {
    item.addEventListener('click', game);
};

let Anzahl = document.querySelector('#attempts');
let pointc = document.querySelector('#points')

let activecard = '';
let position = '';
let position2  = '';
let removed = [];
let attempt = 0;
points = 0;
newpoints = 100;
Anzahl.innerHTML = attempt;
pointc.innerHTML = points;

let multiplicator = [10, 7, 4, 2, 1];

function timer(){ //timer ist im log weil reeee
    d = new Date();
    curtime = Math.round(d.getTime()/1000);
    result = (curtime - StartTime); 
    console.log(result);
    if(removed.length == 16){
        clearInterval(Time);
    }
}

function game(){
    if(attempt == 0){ //timer fängt bei erstem Klick an
        newdate = new Date();
        StartTime = Math.round(newdate.getTime()/1000);
        Time = setInterval(timer, 1000);
    }
    this.classList.add('clicked');
    
    if(position == this){ //so you don't click the same card twice
        this.removeEventListener('click',game);
    } else {
        if(activecard == ''){ //first card is active
            activecard = this.firstChild.classList[1];
            position = this;
            attempt++
        } else {
            if(activecard == this.firstChild.classList[1]){ //if both cards match
                removed.push(this, position);   //pushed into removed
                this.removeEventListener('click', game); 
                position.removeEventListener('click', game);
                activecard = '';
                position = '';
                Anzahl.innerHTML = attempt;

                if (attempt < 4){   //Punkte werden ausgerechnet
                    points = points + (newpoints * multiplicator[0]);
                    pointc.innerHTML = points;
                } else if(attempt < 9) {
                    points = points + (newpoints * multiplicator[1]);
                    pointc.innerHTML = points;
                } else if(attempt < 15) {
                    points = points + (newpoints * multiplicator[2]);
                    pointc.innerHTML = points;
                } else if(attempt < 22) {
                    points = points + (newpoints * multiplicator[3]);
                    pointc.innerHTML = points;
                } else {
                    points = points + (newpoints * multiplicator[4]);
                    pointc.innerHTML = points;
                }

            } else { //if cards don't match
                position2 = this;
                Anzahl.innerHTML = attempt;
                    for(item of turn){ 
                    item.removeEventListener('click', game); //so you don't press another card while two are active
                    };
                let t = setTimeout(function(){  //so you can see both cards for 1 second
                    position.classList.remove('clicked');
                    position2.classList.remove('clicked');
                    activecard = '';
                    position = '';
                    position2 = '';
                        for (item of turn){
                        item.addEventListener('click', game);
                        };
                        for (x of removed){ //so you can't click cards which are already open
                        x.removeEventListener('click', game);
                        }
                },1000);
            }
        }
    }
};



// let d = new Date();
// let date = d.getDate();
// let month = d.getMonth() + 1; //nur beim Monat fängt das Ding bei 0 zu zählen an
// month < 10 ? month = '0' + month : false; //? ist eine if funktion. der : ist das else
// let year = d.getFullYear();
// let dateString = date + '.' + month + '.' + year
// console.log(dateString);





//console.log(d.getTime()); // Jede Milisekunde seit dem 1.1.1970 (Beginn der Unix Zeitrechnung)

