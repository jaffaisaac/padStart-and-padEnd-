/**
 * The padStart() and padEnd() method helps in adding  padding to a string so that the resulting string is of the length passed into them as the first parametor
 * 
 * You can also pass in a second optional parametor of another string you can use it to pad instead of the default space
 */

// padStart() method
// console.log(`jaffa`.padStart(10))//"     jaffa"
// console.log(`jaffa`.padStart(10 ,'hello'))//"hellojaffa"
// console.log(`jaffa`.padStart(10 ,' '))//"    jaffa"
// console.log(`Hey`.padStart(8,'0'))//00000Hey

// PadEnd() method 
console.log(`jaffa`.padEnd(10))//"jaffa     "
console.log(`jaffa`.padEnd(10 ,'hello'))//"jaffahello"
console.log(`jaffa`.padEnd(10 ,' '))//"jaffa    "
console.log(`Hey`.padEnd(8,'0'))//00000Hey