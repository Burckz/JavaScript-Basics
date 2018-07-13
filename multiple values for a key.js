function solution(input) {

    let keyValuePairs = [];

    for(let pair of input){
        let arr = pair.split(" ");




        if(arr.length > 1){
            let key = arr[0];
            let value = arr[1];

            if (!keyValuePairs.includes(key)){ //if key doesn't exist, add key
                keyValuePairs.push(key);       // add KEY
                keyValuePairs[key] = [];       //  for each key there is an Array of values

            }


            keyValuePairs[key].push(value);


            //console.log(keyValuePairs["4"]); // on the first addition there is "test2", then it disappears
        }
        else{
            let key = arr[0];

            if(keyValuePairs.includes(key)) {
                if(key === "4")
                {
                    console.log("test2");
                }
                for (let a of keyValuePairs[key]) {

                    console.log(a);

                }
            }
            else{
                console.log("None");
            }
        }


    }
}

solution(["3 test", "3 test1", "4 test2", "4 test3", "4 test5", "4"]);