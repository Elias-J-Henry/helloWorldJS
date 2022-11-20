var helloString = "helloWorld";

function myFunction(hello) {
    return hello;
}

window.onload = function setHello() {
    var helloDiv = document.getElementById('helloId');
    helloString += "!";
    helloDiv.innerHTML += helloString;
}

console.log (myFunction(helloString));