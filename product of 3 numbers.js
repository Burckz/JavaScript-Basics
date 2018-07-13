function product([X, Y, Z]) {

    X = Number(X);
    Y = Number(Y);
    Z = Number(Z);

    let result = X * Y * Z;

    if(result < 0)
    {
        console.log("Negative");
    }
    else {
        console.log("Positive");
    }

}

product(["2", '3', '-1']);