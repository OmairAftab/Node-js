const fs=require('fs');

// check kiya kitne cores hain
// const os=require('os');
// console.log(os.cpus().length);


// Synchronus mean blocking call.. pehle 1 execue hoga phir jo file read ho k print hogi and us k baad jo tarteeb se agle logs hain wo print hon ge
// console.log(1);
// const result=fs.readFileSync('./test.txt','utf-8');
// console.log(result);
// console.log(2);
// console.log(3);



// same work using asynchronusread:


// AYSNCHRONUS MAIN YE BLOCK NI KRE GA PEHLE 1 PRINT HO GA PHIR 2 3 PRINT HOGA PHIR JO READ KR K VALUE I A WO PRINT O GI
console.log(1);
fs.readFile('./test.txt','utf-8',(err,result)=>{
console.log(result);
});
console.log(2);
console.log(3);





// CONCLUSION: USE ASYNCHRONUS TA K NEECHE WALI REQUESTS KO WAIT NA KRE PRE.

// IN SYNCHRONUS JO REQUEST HOTI HAIN WO THREAD POOL HANDLE KRTA HAI AND THREAD POOL MAIN NUMBER Of THReads utne hote hain jitne cpu device main cores hon . if device main 4 cores hain and 8 requests aa gai then 5-8 requests ko wait krna pre ga k kb wo htm hon 4 and bahir aayen then hmari bari aaye execution ki .. aese maamla slow ho jata
