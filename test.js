 function gotomall(callback){
    setTimeout(()=>{
        console.log("going to mall")
        callback()
    },2000)
   
 }
 function gotomall2(){
    console.log("going to mall after mall")
 }
 
  
 gotomall(gotomall2)
