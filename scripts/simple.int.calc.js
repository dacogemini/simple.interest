//
function calculate() {
    p = document.getElementById("p").value;
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    result = document.getElementById("result");

    result.innerHTML = "INTEREST = " + "$" + (p * n * r / 100);
}

$(function () {
    $('[data-toggle="popover"]').popover()
  })