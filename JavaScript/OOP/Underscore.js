var _= {
    map: function(list, callback){
        var result = [];
        for(var i=0; i<list.length; i++){
            result.push(callback(list[i]));
        }
        return result;
    },

    reduce: function(list, memo, callback){
        for(var i=0; i<list.length; i++){
            memo = callback(memo, list[i]);
        }
        return memo;
    },

    find: function(list, callback) {
        for(var i=0; i<list.length; i++){
            if(callback(list[i])==true){
                return list[i];
            }
    },

    filter: function(list, callback) {
        var result = [];
        for(var i=0; i<list.length; i++){
            if(callback(list[i])){
                result.push(list[i]);
            }
        return result;
    },

    reject: function(list, callback) {
        var result = [];
        for(var i=0; i<list.length; i++){
            if(!callback(list[i])){
                result.push(list[i]);
            }
        return result;
    }
}
