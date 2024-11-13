const url = require('url');

const msg = 'https://www.google.com/search?q=mdn&oq=mdn#top';
const result = url.parse(msg);

// console.log(result);
// console.log(result.protocol);
// console.log(result.host);
// console.log(result.port);
// console.log(result.hostname);
// console.log(result.pathname);
// console.log(result.path);
// console.log(result.query);
// console.log(result.search);
// console.log(result.href);
// console.log(result.hash);
// console.log(result.auth);
console.log('------------------------');
const myUrl = new url.URL(msg);
// console.log(myUrl);
console.log(myUrl.searchParams.keys());
console.log(myUrl.searchParams.values());
console.log(myUrl.searchParams.get('q'));