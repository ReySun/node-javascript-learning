const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname, 'hello.txt'), (err, data)=>{
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
})

fs.createWriteStream(path.resolve(__dirname, './createWriteStream.txt'));

fs.mkdir(path.resolve(__dirname, 'mkdir'), (err, data) => {
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
})
