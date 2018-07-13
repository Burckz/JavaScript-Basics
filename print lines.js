function printLines(input) {

    for (let x of input){
        if( x !== "Stop") {
            console.log(x);
            }
        else{
            break;
        }
    }
}

printLines(['Line 1', 'Line 2', 'Line 3', 'Stop']);