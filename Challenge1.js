import { strictEquals } from "./module.js";

console.log('testing 1 v 1: ', strictEquals(1, 1));
console.log('testing NaN v NaN: ',strictEquals(NaN, NaN))
console.log('testing 0 v -0: ',strictEquals(0, -0))
console.log('testing -0 v 0: ',strictEquals(-0, 0));
console.log('testing 1 v "1": ',strictEquals(1, '1'));
console.log('testing true v false: ',strictEquals(true, false));
console.log('testing false v false: ',strictEquals(false, false));
console.log('testing water v oil: ',strictEquals('water', 'oil'))
