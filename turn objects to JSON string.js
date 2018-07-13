function solution(input) {

        let mainObj = {name: undefined , surname: undefined, age: undefined, grade: undefined, date: undefined, town: undefined};
        for (let feature of input){
            let arr = feature.split(' -> ');
            let key = arr[0];
            let value = arr[1];

            if (key === "grade" || key === "age"){
                value = Number(value);
            }
            mainObj[key] = value;
        }

    console.log(JSON.stringify(mainObj));
}


solution(["name -> Angel", "surname -> Georgiev", "age -> 20", "grade -> 6.00", "date -> 23/05/1995", "town -> Sofia"])