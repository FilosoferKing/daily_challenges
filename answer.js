var haystack = ["cat", "dog", "bird", "turtle", "lizard"];
var needle = ["dog", "lizard", "flower", "monkey", "unicorn"];
var index_pointer = 0;
var combine_array = [];
combine_array[index_pointer] = "";
var output= null;
var answer = null;


function search_array(array1, array2) {
    for (var i = 0; i <= array1.length; i++) {
        result1 = array1[i];

        for (var x = 0; x < array2.length; x++) {
            result2 = array2[x];
            if (result1 == result2) {
                combine_array[index_pointer] = result1;
                index_pointer += 1;
            }
        }
    }
    console.log(combine_array);
}


output = search_array(haystack, needle);
console.log(output);