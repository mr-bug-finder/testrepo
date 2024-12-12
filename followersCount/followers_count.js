let count = 0;

function increaseCount() {
    count++;
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function increaseCount() {
    count++;
    displayCount();
}
function checkCountValue() {
    if (count === 10) {
        alert("Your Insta post gained 10 follwers! Congratulations!");
    } else if (count === 20) {
        alert("Your Insta post gained 20 followers! keep it up!");
    }
}

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}