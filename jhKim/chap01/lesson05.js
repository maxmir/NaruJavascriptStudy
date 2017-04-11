/**
 * @author jhkim
 * lesson05.js
 * @date [2017. 4. 11.] 오후 6:51:25
 */

(function(global){
    // ex01
    var name = 'ddandongne';
    var temp = name;
    console.log('before name', name);
    console.log('before temp', temp);
    
    name = 'change';
    console.log('after name', name);
    console.log('after temp', temp);
    
})(this);