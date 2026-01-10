const fs=require('fs');

//synchronnus 
fs.writeFileSync('./test.txt', 'hey  i am practising. IT IS SYNCHRONUS CALL')


// ASYNCHRONUS
// fs.writeFile('./test.txt', 'ASYNCHRONUS CALL', (err)=>{})



// reading synchronusly.. it returns answer jis ko hum aik variable main store krte hain
// const result=fs.readFileSync('./test.txt', 'utf-8');
// console.log(result);



// ASYNCHRONUS READ MAIN WO KISI VARIABLE MAIN RETURN NI KRE GA BLKE AIK CALLBACK FUNCTION EXPECT KRE GA
// fs.readFile('./test.txt', 'utf-8',(err,result)=>{
//     if(err){
//         console.log("Error",err); 
//     }
//     else{
//         console.log(result);
//     }
// })




// OVERWRITE IN THAT FILE... INSTEAD OF OVERWRITING
// fs.appendFileSync('./test.txt', " Using append");

// const result=fs.readFileSync('./test.txt', 'utf-8');
// console.log(result);



// copy the text file(test.txt) into (copy.txt) ..mean copy.txt new file bni and us main wo cintent aa ya jo pehle test.txt main tha
// fs.cpSync("./test.txt","./copy.txt");


// Deleted file
// fs.unlinkSync("./copy.txt");

