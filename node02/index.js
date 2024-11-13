const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let msg = fs.readFileSync('./static/index.html',{encoding:'utf-8'});
  res.send(msg);
})

app.get('/intro', (req,res) => {
    res.send('<h1>intro page</h1>');
})

app.get('/dept/',(req,res)=>{
    const arr=[
        {deptno:1111,dname:'test1',loc:'test'},
        {deptno:2222,dname:'test2',loc:'test'},
        {deptno:3333,dname:'test3',loc:'test'}
    ];
    // res.setHeader('Content-Type','application/json');
    // res.send(JSON.stringify(arr));
    res.json(arr);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})