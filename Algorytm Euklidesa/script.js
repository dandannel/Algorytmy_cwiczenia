console.log("Script loaded!");

function calculate() {
  
    let first_num = parseInt(document.getElementById("num1").value);
    let secund_num = parseInt(document.getElementById("num2").value);
    let bigger_num = 0;
    let smaller_num = 0;
    let zero = "Your numbers must be bigger than 0";
    let nne = "You must insert numbers (ints)";
    
    if(first_num <= 0 || secund_num <= 0)
    {
      document.getElementById("number_error").innerText = zero;
      return;
    }
    
    if(isNaN(first_num) || isNaN(secund_num))
    {
      document.getElementById("not_number_error").innerText = nne;
      return;
    }

    if(first_num > secund_num) //Check which number is bigger
    {
      bigger_num = first_num;
      smaller_num = secund_num;
    }
    else
    {
      bigger_num = secund_num;
      smaller_num = first_num;
    }
    
    let euclid_result = euclid_algorithm(bigger_num, smaller_num);
    document.getElementById("euclid_result").innerText = euclid_result;
  
    // Show result
    document.getElementById("suma").innerText = sum;
    
  }

  function euclid_algorithm(a, b)
  {
    let r;
    while(b !== 0)
    {
      r = a % b;
      a = b;
      b = r;
    }
    return a;

  }
  
  