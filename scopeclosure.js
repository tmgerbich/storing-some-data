function outer(){
    let a = 'I am a string';
    let b = {key: 'value'};
    console.log(a);
    console.log(b);
  
    function inner(a,b) {
        console.log(a);
        console.log(b);
        a = 'I am a different string';
        b = {key2: 'value2'};
        b.key3 = 'value3';
        console.log(a);
        console.log(b);
        
    }
  
    inner(a,b);
    console.log(a);
    console.log(b);
  }
  
  outer();

