function counter(name) {
      
    console.log(`outer:${name}`)
    return function() {
        console.log(`inner:${name}`)
    };
}

 let login = counter("mohit")
 
  
  
