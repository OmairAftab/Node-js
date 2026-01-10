const http=require('http');
const fs=require('fs');

const myserver=http.createServer((req,res)=>{
    // console.log("New request received");
    // console.log(req.headers);

    const log=`${Date.now()} , ${req.url} New Request received \n`;
    fs.appendFile('log.txt',log ,(err,data)=>{
        if(err){
            console.log(err); 
        }
        else{
            //  res.end("Hello fom server");

            switch(req.url){
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