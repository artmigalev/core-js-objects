function shallowCopy(obj) {
  return Object.is(obj, Object.assign(obj));
}

console.log(shallowCopy({ a: 2, b: 5 }));
console.log(shallowCopy({ a: 2, b: { a: [1, 2, 3] } }));
