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

