const querystring = require('querystring');

/* querystring.parse(str[, sep[, eq[, options]]]) */
var str1 = 'pageNum=1&pageSize=10&filter=世界杯&filter=2018';
var obj1 = querystring.parse(str1);
console.log(JSON.stringify(obj1, null, 2));
// {
//   "pageNum": "1",
//   "pageSize": "10",
//   "filter": [
//     "世界杯",
//     "2018"
//   ]
// }

var str2 = 'pageNum^1#pageSize^10';
var obj2 = querystring.parse(str2, '#', '^');
console.log(obj2);// { pageNum: '1', pageSize: '10' }

/* querystring.stringify(obj[, sep[, eq[, options]]]) */
var obj = {
  pageNum: 1,
  pageSize: 10,
  filter: ["世界杯", 2018]
}
console.log(querystring.stringify(obj));
console.log(querystring.stringify(obj, '#', '^s'));
// logs
// pageNum=1&pageSize=10&filter=%E4%B8%96%E7%95%8C%E6%9D%AF
// pageNum^1#pageSize^10#filter^%E4%B8%96%E7%95%8C%E6%9D%AF