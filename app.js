const _ = require('loadash');

const items=[1,[2,[3,[4]]]]

const newItems = _.flattendeep(items);
console.log(newItems);
