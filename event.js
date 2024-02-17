console.log("Dom er ajke special Event")

function makeRed(){
    document.body.style.backgroundColor = 'red';
}

const makeGreen = document.getElementById('make-green');
makeGreen.addEventListener('click', function makegreen (){
    document.body.style.backgroundColor = 'green'
})