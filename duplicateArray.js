arr = [1, 2, 2, 3, 4]

var duplicate = '';
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) {
        duplicate == arr[i];
    }
}