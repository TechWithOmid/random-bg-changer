let resetBtn = document.querySelector('#reset-btn')
let changeBtn = document.querySelector('#change-btn');
let copyBtn = document.querySelector('#copy-btn')
let hex = document.querySelector('.hex');
let body = document.querySelector('body');


var lett = ['0', '1', '2', '3', '4', '5','6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

let arr = []

changeBtn.addEventListener('click', changeColor)
resetBtn.addEventListener('click', resetBgColor)
copyBtn.addEventListener('click', copy)


// function copyToClipboard() {
//     // Select the text field 
//     hex.select();
//     // hex.setSelectionRange(0, 99999); //For mobile devices
  
//     // Copy the text inside the text field 
//     // hex.execCommand("copy");

// }
function copy(){
    var r = document.createRange();
    r.selectNode(document.querySelector('.hex'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    }


function changeColor(){
    // create random hex color
    for (let i=0; i<3; i++){
        arr.push(lett[Math.floor(Math.random() * 16)] + lett[Math.floor(Math.random() * 16)])        
    }

    console.log(arr)
    let code;
    code = `#${arr[0]}${arr[1]}${arr[2]}`
    // set code for hex color and change bg
    hex.innerHTML = code;
    body.style.backgroundColor = code

    // reset the array
    arr = []
}


function resetBgColor(){
    body.style.backgroundColor = 'white'
    hex.innerHTML = 'Random Color'
}