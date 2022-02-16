module.exports = function reverse (n) {
n_str = String(Math.abs(n));
let str = '';
//str=n_str.split('');
for(i=0; i<n_str.length; i++)
str = str + n_str[n_str.length-i-1];
//alert(str);
str = Number(str); 
return str; 
}