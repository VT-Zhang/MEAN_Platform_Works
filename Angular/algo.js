this.preOrder = function(){
    var runner = this.root;
    var arr = [];
    var hasright = false;
    var temp;
    while(runner.left || runner.right){
        if(hasright == true){
            runner = temp;
            hasright = false;
        }
        arr.push(runner.val);
        if(runner.left){
            arr.push(runner.left.val);
            if(runner.right){
                arr.push(runner.right.val);
                hasright = true;
                temp = runner;
            }
        }
        runner = runner.left;
    }
    console.log(arr);
    return arr;
}
