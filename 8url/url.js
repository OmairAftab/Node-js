const http=require('http');
const fs=require('fs');
const url=require("url");



const myserver=http.createServer((req,res)=>{
    // console.log("New request received");
    // console.log(req.headers);

    if(req.url==="/favicon.ico") return res.end(); //favicon k liye bnti hoti logs default.. us ko htm kr diya 


    //these two lines are for checking url jo hum ne import kiya from npmjs... hum prnt kra k check kr rhe
    const myurl=url.parse(req.url,true); //true lgane se query parameters separe separate dikhae ga mean object main
    console.log(myurl);

    const time = new Date().toLocaleTimeString(); //ye proper readable time dikhae ga
    const log = `${time} , ${req.url} New Request received \n`;

    fs.appendFile('log.txt',log ,(err,data)=>{


        if(err){
            console.log(err); 
        }
        else{

            switch(myurl.pathname){ //myurl.pathname is same as req.url ... hum ne jo print kraya a console main myurl us main b dikhata pathname= jo b page ho

                case '/': res.end("WELCOME ON HOME PAGE");
                break;
                case '/about' : res.end("I am omair");
                break;
                default: res.end("Pages other than Home and about");

            }
        } 
    })
   
})


// port is needed to run server.. 1 port hold only one server
myserver.listen(8000, ()=>{console.log("Server startted!")}); //agar sb kuch shi se chala to ye callback funstion run hojega