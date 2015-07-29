var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var needle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var index_pointer = 0;
var output = [];
output[index_pointer] = "";

function add_arrays(array1, array2){
    for (var i = 0; i < num.length; i++){
        for (var j = 0; j < needle.length; j++) {
            if ( i == j ) {
                var add = num[i] + needle[j];
                output[index_pointer] = add;
                index_pointer += 1;
            }

        }
    }
    console.log(output);
}

add_arrays(num, needle);