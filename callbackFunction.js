const square = (x) => {
    console.log(`Square of ${x}: ${x*x}`);
}

// square(5);
const higerOrderFunction = (num, callback) =>{
    callback(num);
}

higerOrderFunction(6, square);