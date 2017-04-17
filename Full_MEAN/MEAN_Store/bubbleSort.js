function bubbleSort(arr){
    var flag = false;
    while(flag == false);
    for(var i = 0; i < arr.length; i++){
        var temp = arr[i];
        flag = false;
        var j = i;
        while(arr[j] > arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            flag = true;
            j++;
        }
    }
    return arr;
}

bubbleSort([1,2,3,4]);
