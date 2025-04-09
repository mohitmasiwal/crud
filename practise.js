let s1="abcde",s2="abcdef",s3="abcdhhh"
let result = ""
 

    for(let i=0;i<s1.length;i++){
        if(s1[i]===s2[i] && s2[i]===s3[i]){
result += s1[i]
        }
        else{
            console.log( result)
        break;
    }
  
        }

     

 
 