function result(nums) {
    let numN = Number(nums[0]);
    let numX = Number(nums[1]);


    if (numN <= numX) {
        let output = numN * numX;
        console.log(output);
    }
    else {
        let output = numN / numX;
        console.log(output);
    }


}

result(["144", "12"]);