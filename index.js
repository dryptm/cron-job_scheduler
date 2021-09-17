const cron=require("node-cron");
const shell=require("shelljs");

cron.schedule("* * * * * *",function(){
    console.log("scheduler running...");
    if(shell.exec("node app.js").code!=0){
        console.log("something went wrong");
    }
})