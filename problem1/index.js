// iteration
var sum_to_n_a = function(n) {
  var sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// recursion
var sum_to_n_b = function(n) {
  if (n <= 0) {
    return 0;
  }
  return n + sum_to_n_b(n - 1);
};

// formula
var sum_to_n_c = function(n) {
  return (n * (n + 1)) / 2;
};

// testing
console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));
