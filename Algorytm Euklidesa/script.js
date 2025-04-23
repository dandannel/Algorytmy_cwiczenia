console.log("Script loaded!");

function calculate() {
  
    let first_num = parseInt(document.getElementById("num1").value);
    let secund_num = parseInt(document.getElementById("num2").value);
  

    // if (isNaN(a) || isNaN(b)) {
    //   document.getElementById("result").innerText = "Please enter valid numbers!";
    //   return;
    // }
    
    let sum = first_num + secund_num;
  
    // Show result
    document.getElementById("suma").innerText = sum;
    
  }
  
  