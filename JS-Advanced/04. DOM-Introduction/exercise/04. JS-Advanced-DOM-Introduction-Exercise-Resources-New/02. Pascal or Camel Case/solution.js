function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;

  input = input.toLowerCase().split(' ');
  let result = document.getElementById('result');
  let stringResult = '';

  if (currentCase == 'Camel Case') {
    stringResult += input[0][0].toLowerCase() + input[0].slice(1, input[0].length);
    for (let i = 1; i < input.length; i++) {
      stringResult += input[i][0].toUpperCase() + input[i].slice(1, input[i].length);
    }
    result.textContent = stringResult;
  } else if (currentCase == 'Pascal Case') {
    for (let i = 0; i < input.length; i++) {
      stringResult += input[i][0].toUpperCase() + input[i].slice(1, input[i].length);
    }
    result.textContent = stringResult;
  } else {
    result.textContent = 'Error!';
  }
}