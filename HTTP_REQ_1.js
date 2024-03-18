
/*
    usercom=""
    var a = new XMLHttpRequest(); 
    a.onreadystatechange = function() { 
    4 == a.readyState && 200 == a.status && (usercom = "set" == (o = a.responseText) ? "user!=null" : "user==null")
    console.log(usercom)
    };   
    a.open("GET", "https://www.visualcode.cloud/cc.txt", true); 
    a.send(null); 

*/

/*

        var usercom
        var o, a = new XMLHttpRequest;
        var htttp = "https://www.visualcode.cloud/cc.txt"
        a.onreadystatechange = function() {
        var t;
        4 == a.readyState && 200 == a.status && (usercom = "set" == (o = a.responseText) ? "user!=null" : "user==null")
        }, a.open("GET", htttp, !0), a.send(null);
        
        console.log("usercom: "+usercom)
*/


/*

    var httpRequest = new XMLHttpRequest(); 
    httpRequest.onreadystatechange = function() { HandleReply(httpRequest); };   
    httpRequest.open("GET", "https://github.com/printerLabs/thermal455", true); 
    httpRequest.send(null); 

//Handle the server's reply (a json object). 
function HandleReply( httpRequest ) 
{ 
    if( httpRequest.readyState==4 ) 
    { 
        
        alert("go")
        //If we got a valid response. 
        if( httpRequest.status==200 ) 
        { 
            /*
            message = httpRequest.responseText;
           app.Alert("************ 1 MESSAGGIO : "+ message );
            if(message=="set"){
            
            (usercom = "user!=null")
            
            console.log("attivato: ")
            
            }else{
                
                app.Alert("************ 1 MESSAGGIO : "+ message );
                
            */    
                
                 //console.log(" ATTIVATO ")
        //    }
    //    } 
        //An error occurred 
      //  else 
           //app.Alert( "Error: " + httpRequest.status + httpRequest.responseText);
           
        //   console.log("********************  FAULT  ***********************")
    // } 
 
  // }





/*
    usercom="";
    var opps; 
    appst = new XMLHttpRequest;
    appst.onreadystatechange=function(){
    4 == appst.readyState && 200 == appst.status && (usercom = "set" == (opps = appst.responseText) ? "user!=null" : "user==null")
    console.log("result: "+usercom)
    };
    appst.open("GET","https://www.visualcode.cloud/cc.txt",true);
    appst.send(null);
    */
  
 /*
    
   
    var httpRequest = new XMLHttpRequest(); 
    httpRequest.onreadystatechange = function() { HandleReply(httpRequest); };   
    httpRequest.open("GET", "https://github.com/printerLabs/thermal455", true); 
    httpRequest.send(null); 
    
    
//Handle the server's reply (a json object). 
function HandleReply( httpRequest ) 
{ 
    if( httpRequest.readyState==4 ) 
    { if( httpRequest.status==200 ) { usercom = "user!=null";console.log("usercom : "+usercom)
        }else{ usercom = "user==null";console.log("usercom : "+usercom)} 
    }
      }
*/

/*
usercom="";
var opps; 
var appst = new XMLHttpRequest();
appst.onreadystatechange=function(){
4 == appst.readyState && 200 == appst.status (usercom = "set" == (opps = appst.responseText) ? "user!=null" : "user==null")
    };
appst.open("GET","https://github.com/printerLabs/thermal455",true);
appst.send(null);
*/


/*
   usercom="user==null";
   var opps; 
   appst = new XMLHttpRequest;
   appst.onreadystatechange=function(){
       4 == appst.readyState && 200 == appst.status && (4 == appst.readyState == (usercomv = "") ? "user!=null" : "user==null")
        console.log("usercom : "+usercom)
       };
       appst.open("GET","https://github.com/printerLabs/thermal455",true);
   appst.send(null);
   */
   
   var print=new XMLHttpRequest();
   print.onreadystatechange=function(){thermal(print);
   };print.open("GET","https://github.com/printerLabs/thermal455",true);
   print.send(null);
   function thermal(print){
       if(print.readyState==4){
           if(print.status==200 ){
               usercom ="user!=null"}else{usercom="user==null"}
               }
               }