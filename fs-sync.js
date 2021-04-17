const {readFileSync,writeFileSync} = require('fs')
console.log('start');

const first = readFileSync('./content/subfolder/first.txt','utf-8');

const second = readFileSync('./content/subfolder/second.txt','utf-8');

writeFileSync(
    './content/subfolder/result-sync.txt',
    'here is the result :${first}, ${second}',
    {flag : 'a'}
)
console.log('done with task');
console.log('starting the next one');

