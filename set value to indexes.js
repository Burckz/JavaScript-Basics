function setValue(input) {

    let length = Number(input[0]);

    input.shift(input[0]);

    let array = Array(length);

    for(let x of input){
        let arr = x.split(' - ');

        let index = Number(arr[0]);
        let number = Number(arr[1]);


        array[index] = number;
    }
    for(let i = 0; i < array.length; i++){
        if (array[i] == undefined){
            array[i] = 0;
        }
        console.log(array[i]);
    }


}



setValue(["5", "0 - 3", "3 - -1", "4 - 2"]);