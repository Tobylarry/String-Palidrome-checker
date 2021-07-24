const btn = document.getElementById('btn');
const result = document.getElementById('result');
const input = document.getElementById('input');


btn.addEventListener('click', function() {
    if (input.value.length < 2) {
        alert("wrong input");
        alert("Try Again");
        location.reload();
    } else if (input.value == input.value.split('').reverse().join('')) {
        isPalidrome();
    } else {
        notPalidrome();
    }
});

function isPalidrome() {
    result.innerHTML = input.value + " is Palidrome";

};

function notPalidrome() {
    result.innerHTML = input.value + " not Palidrome";
};