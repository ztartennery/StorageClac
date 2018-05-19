function calcFunc() {
    var x = document.getElementById("number").value;
    var unit = document.getElementById("dropdown").value;
    var direction = getRadioVal(document.getElementById('directionlist'), 'directionChoice');


    var kb;
    var mb;
    var gb;
    var tb;





    var toAdvertised = function() {
        if (unit == 1) {
            kb = x * 1024 / 1000;
            mb = x * 1024 / 1000 / 1000;
            gb = x * 1024 / 1000 / 1000 / 1000;
            tb = x * 1024 / 1000 / 1000 / 1000 / 1000;
        } else if (unit == 2) {
            kb = x * 1024 * 1024 / 1000;
            mb = x * 1024 * 1024 / 1000 / 1000;
            gb = x * 1024 * 1024 / 1000 / 1000 / 1000;
            tb = x * 1024 * 1024 / 1000 / 1000 / 1000 / 1000;
        } else if (unit == 3) {
            kb = x * 1024 * 1024 * 1024 / 1000;
            mb = x * 1024 * 1024 * 1024 / 1000 / 1000;
            gb = x * 1024 * 1024 * 1024 / 1000 / 1000 / 1000;
            tb = x * 1024 * 1024 * 1024 / 1000 / 1000 / 1000 / 1000;
        } else if (unit == 4) {
            kb = x * 1024 * 1024 * 1024 * 1024 / 1000;
            mb = x * 1024 * 1024 * 1024 * 1024 / 1000 / 1000;
            gb = x * 1024 * 1024 * 1024 * 1024 / 1000 / 1000 / 1000;
            tb = x * 1024 * 1024 * 1024 * 1024 / 1000 / 1000 / 1000 / 1000;
        }
    };


    var toActual = function() {
        if (unit == 1) {
            kb = x * 1000 / 1024;
            mb = x * 1000 / 1024 / 1024;
            gb = x * 1000 / 1024 / 1024 / 1024;
            tb = x * 1000 / 1024 / 1024 / 1024 / 1024;
        } else if (unit == 2) {
            kb = x * 1000 * 1000 / 1024;
            mb = x * 1000 * 1000 / 1024 / 1024;
            gb = x * 1000 * 1000 / 1024 / 1024 / 1024;
            tb = x * 1000 * 1000 / 1024 / 1024 / 1024 / 1024;
        } else if (unit == 3) {
            kb = x * 1000 * 1000 * 1000 / 1024;
            mb = x * 1000 * 1000 * 1000 / 1024 / 1024;
            gb = x * 1000 * 1000 * 1000 / 1024 / 1024 / 1024;
            tb = x * 1000 * 1000 * 1000 / 1024 / 1024 / 1024 / 1024;
        } else if (unit == 4) {
            kb = x * 1000 * 1000 * 1000 * 1000 / 1024;
            mb = x * 1000 * 1000 * 1000 * 1000 / 1024 / 1024;
            gb = x * 1000 * 1000 * 1000 * 1000 / 1024 / 1024 / 1024;
            tb = x * 1000 * 1000 * 1000 * 1000 / 1024 / 1024 / 1024 / 1024;
        }
    };

    if (direction === 'toact') {
        toActual();
    } else { toAdvertised(); }





    document.getElementById("1").innerHTML = kb.toFixed(2);
    document.getElementById("2").innerHTML = mb.toFixed(2);
    document.getElementById("3").innerHTML = gb.toFixed(2);
    document.getElementById("4").innerHTML = tb.toFixed(2);


}



function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];

    // loop through list of radio buttons
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
}