
function add(a,b){
  return parseInt(a) + parseInt(b);
}
function subtract(a,b){
  return parseInt(a) - parseInt(b)
}
function multiply(a,b){
  return parseInt(a) * parseInt(b)
}
function divide(a,b){
  if(parseInt(a) || parseInt(b) === 0){
    return NaN;
  }
  else{
  return parseInt(a) / parseInt(b)
  }
}





$(document).ready(function() {
    var	num1 = null;
    var	num2 = null;
    var	operand = 0;
    var solved = false;


  $('.numpad').click(function(){

      var input = $(this).html();

      if (operand == 0) {
          num1 = input;
          $('#display').val(num1);

      }
      else {
          num2 = input;
          console.log(operand);
          $('#display').val(num1 + operand + num2);
      }


  });

  $('.operator').click(function(){
      operand = $(this).html();
      $('#display').val(num1 + operand);
  });

  $(".equals").click(function() {
		switch (operand) {
			case "+":
				var tmp = add(num1, num2);
				console.log(tmp);
				num1 = [];
				num2 = [];
				operand;
				$('#display').val(tmp);
				solved = true;
				break;
			case "-":
				var tmp = subtract(num1, num2);
				console.log(tmp);
				num1 = [];
				num2 = [];
				operand = 0;
				$('#display').val(tmp);
				solved = true;
				break;
			case "*":
				var tmp = multiply(num1, num2);
				console.log(tmp);
				num1 = [];
				num2 = [];
				operator = 0;
				$('#display').val(tmp);
				solved = true;
				break;
			case "/":
				var tmp = divide(num1, num2);
				console.log(tmp);
				num1 = [];
				num2 = [];
				operator = 0;
				$('#display').val(tmp);
				solved = true;
				break;
		}

});

	$(".clear").click(function(){
		num1 = null;
		num2 = null;
		operand = 0;
		$('#display').val(operand);
		console.log(operand);
		console.log(operand);

    });




});