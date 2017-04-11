/**
 * @author jhkim
 * lesson04.js
 * @date [2017. 4. 11.] 오후 6:40:07
 */

(function(global) {
    // ex01, ex02
    var data1 = 1234;
    var data2 = data1;
    console.log('before data1', data1);
    console.log('before data2', data2);
    
    data1 = data1 + 1234;
    console.log('after data1', data1);
    console.log('after data2', data2);
})(this);