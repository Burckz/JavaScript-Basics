function solution(input) {

    let  keys = [];

    for (let pair of input) {
        let pairArr = pair.split(' ');

        if (pairArr.length > 1) {
            let name = pairArr[0];
            let value = pairArr[1];

            if (!keys.includes(name)) {
                keys.push(name);
            }

            keys[name] = value;
        }
        else {
            let name = pairArr[0];

            if (keys.includes((name))){
                console.log(keys[name]);
            }
            else{
                console.log("None");
            }
        }
    }

}

solution(["3 bla", "3 alb", "2",])