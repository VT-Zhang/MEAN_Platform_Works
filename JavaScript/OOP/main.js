var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
x.push(100);
x.push(["hello", "world", "JavaScript is Fun"]);
console.log(x);

var sum = 0;
for (let i = 1; i<501; i++){
    sum += i;
}
console.log(sum);

var arr = [1, 5, 90, 25, -3, 0];
var min = arr[0];
for (let i = 0; i<arr.length; i++){
    if (arr[i] < min){
        min = arr[i];
    }
}
console.log(min);

var sum1 = 0;
for (let i=0; i<arr.length; i++){
    sum1 += arr[i];
}
var avg = sum1/arr.length;
console.log(avg);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var key in newNinja){
    console.log(key + ": " + newNinja[key]);
}
