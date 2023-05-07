//your JS code here. If required.
function fizzBuzz() {
    let op="";
      for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          op+="FizzBuzz";
        } 
        else if (i % 3 === 0) {
          op+="Fizz";
        }
        else if (i % 5 === 0) {
          op+="Buzz";
        } 
        else {
          op+=i;
        }
      }
      alert(op);
    }