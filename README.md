<!-- TOC -->


<!-- /TOC -->

*[X]~~* The calculate() function acts as the handler for the onclick event of the button.That is, when the user clicks the
button Calculate, the calculate() function is executed.*~~[2017 - 12 - 13] 

  <button type="button" class="btn btn-info" onclick="calculate()">Calculate</button>
        <p id="result"></p>

// EVENT HANDLER 

function calculate(); {
    
       p = document.getElementById("p").value;
       n = document.getElementById("n").value;
       r = document.getElementById("r").value;
       result = document.getElementById("result");

       result.innerHTML = "The interest is " + (p * n * r / 100);
 }

The function should get the values that the user has entered into the input boxes. In order to do this, it uses the document.getElementById() method and the value property. After the calculation, the result is put inside a paragraph element using the same mechanism (assignment instead of reading, this time).