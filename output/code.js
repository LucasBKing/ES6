"use strict";

;[1, 2, 3].map(function (n) {
  return n + 1;
});

var a = 1;
for (var a = 0; a < 10; a++) {
  console.log(a);
} // prints 10

var b = 1;
for (var _b = 0; _b < 10; _b++) {
  console.log(_b);
} // prints 1

var c = [1, 2, 3].reduce(function (acc, current) {
  return acc + current;
});
console.log(c);
// prints 6
//# sourceMappingURL=code.js.map