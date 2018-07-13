function solution(input) {
    for (let pair of input){
        let arr = pair.split(' -> ');
        let name = arr[0];
        let age = arr[1];
        let grade = arr[2];

        let obj = {Name: name, Age: age, Grade: grade};
        console.log(`Name: ${obj.Name}`);
        console.log(`Age: ${obj.Age}`);
        console.log(`Grade: ${obj.Grade}`);
    }

}

solution(["Pesho -> 13 -> 6.00", "Ivan -> 12 -> 5.57", "Toni -> 13 -> 4.90"])