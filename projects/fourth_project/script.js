const text = document.querySelector('.text');

let counter = 0;

const set = setInterval(() => {
    counter++;
    text.innerHTML = `${counter}%`;
    if(counter==100) {
        clearInterval(set);
    }

    text.style.opacity = scale(counter,0,100,1,0);

    document.querySelector('.bg').style.filter = `blur(${scale(counter,0,100,30,0)}px)`;

},30);


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}








/*const loadingText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

var load =0

var int = setInterval(blurring,30)

function blurring() {
    load++;

    if(load>90)
    {
        clearInterval(int);
    }
loadingText.innerHTML= '${load}%';
}
*/
//loadingText.style.opacity = scale(load, 0,100, 1, 0)
//bg.style.filter = 'blur(${scale(load,0,100,30,0)}px)'


//const scale = (num, in_min, in_max, out_min, out_max) =>  {
    //return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min 
//}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
