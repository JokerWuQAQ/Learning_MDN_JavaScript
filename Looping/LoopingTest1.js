var output = document.querySelector(".output");
output.innerHTML = "";
var i = 10;

while (i >= 0) {
    var para = document.createElement("p");
    if (i === 10) {
        para.textContent = "Countdown 10";
    } else if (i === 0) {
        para.textContent = "Blast off！";
    } else {
        para.textContent = i;
    }
    output.appendChild(para);
    i--;
}