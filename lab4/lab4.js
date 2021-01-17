function transposed(matrix) {
    return matrix[0].map((_, i) => matrix.map(row => row[i]));
}

function sums_array(rows) { 
    let sums = [];
    rows.forEach(row => {
        sums.push(sum(row)); 
    });

    return sums;
}

function sums_r_array(rows) { 
    let sums = [];
    rows.forEach((row => {
        sums.push(sum(row.map((el, ind) => el * weights[ind]))) 
    }));

    return sums;
}

function show_results() {
    process.stdout.write("# | вага | f1   |  f2  |  f3   |  f4  |  f5  |  f6 \n");
    marks.forEach((row, ind) => {
        process.stdout.write((ind + 1) + " | " + weights[ind] + " | ");
        show_arr(row);
    });

    process.stdout.write("S | ");
    let sums = sums_array(transposed(marks));
    show_arr(sums);

    process.stdout.write("Sr | ");
    let sums_r = sums_r_array(transposed(marks));
    show_arr(sums_r);
    
    }

function show_arr(array) {

    array.forEach((elem) => {
        process.stdout.write(new Number(elem).toFixed(2) + " | ");
    });

    console.log();
    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
}
