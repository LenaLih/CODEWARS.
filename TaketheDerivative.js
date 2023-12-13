// Эта функция принимает в качестве параметров два числа: первое число является коэффициентом, а второе число — показателем степени.

// Ваша функция должна умножить два числа, а затем вычесть 1 из показателя степени. Затем он должен вернуть выражение (например, 28x^7). "^1"не следует обрезать, если показатель степени = 2.
function derive(coefficient,exponent) {
   let result ='';
    let multiplication = (coefficient * exponent);
    let subtract = (exponent - 1);
    result = multiplication +'x^'+ subtract;
    return result;
  }