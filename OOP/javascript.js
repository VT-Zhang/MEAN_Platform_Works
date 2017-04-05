function runningLogger(){
    console.log("I am running!");
}

function multiplyByTen(num){
    num = num * 10;
    console.log(num);
    return num;
}
multiplyByTen(5);

function stringReturnOne(){
    console.log("This is JS.");
    return "This is JS.";
}
stringReturnOne();

function stringReturnTwo(){
    console.log("This is CSS.");
    return "This is CSS.";
}
stringReturnTwo();


function caller(aaa){
    aaa();
}
caller(stringReturnTwo);



function multiplyByTen(num){
    num = num * 10;
    console.log(num);
    return num;
}

function myDoubleConsoleLog(aaa, value){
    aaa(value);
}

function caller2(bbb){
    console.log("starting");
    setTimeout(function() {
        bbb();
    }, 2000);
    console.log("ending?");
    return "interesting";
}
caller2(myDoubleConsoleLog);
