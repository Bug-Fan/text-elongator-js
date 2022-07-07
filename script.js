let multipliedString = "";

const elongate = function() {

    const mystring = document.getElementById('mystring').value;
    const multiplier = Math.floor(parseInt(document.getElementById('multiplier').value));
    
    mystring.split('').forEach(element => {

        if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(element)) {
            multiply(element, multiplier);
        }
        else
            multipliedString += element;

    });

    (multipliedString === "" || multiplier === undefined || multiplier === NaN || mystring === undefined) ? 
    document.getElementById('result').innerText = "Something went Wrong":
    document.getElementById('result').innerText = multipliedString  ;

    multipliedString = "";
    
}

const multiply = function(char, multiplier) {

    if (multiplier === 0)
        return;
    else
        multipliedString += char;
        multiplier--;
        multiply(char, multiplier);

}