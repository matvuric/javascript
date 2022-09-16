// Сумма введенных чисел

function sumInput() { 
  let x;
  let arr = [];

  do {
    x = prompt('Введите число:', 0);
    if ( isFinite(x) ) arr.push(x);
  } while (x != null && x != '');

  return arraySum(arr);
}

function arraySum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  
  return sum;
}

// Подмассив наибольшей суммы

function getMaxSubSum(arr) {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (max < sum) max = sum;
    if (sum < 0) sum = 0;
  }

  return max;
}

// Тесты

describe("Массивы", function()  {
  describe("sumInput", function() {

    it("Ряд чисел", function() {
      prompt.onCall(0).returns("20");
      prompt.onCall(1).returns("3");
      prompt.onCall(2).returns("1");
      assert.strictEqual(sumInput(), 24);
    });

    it("Ряд чисел с 0", function() {
      prompt.onCall(0).returns("20");
      prompt.onCall(1).returns("3");
      prompt.onCall(2).returns("0");
      assert.strictEqual(sumInput(), 23);
    });

    it("Ряд строк, после - числа", function() {
      prompt.onCall(0).returns("not a number");
      prompt.onCall(1).returns("not a number again");
      prompt.onCall(2).returns("1");
      prompt.onCall(3).returns("2");
      prompt.onCall(4).returns("3");
      assert.strictEqual(sumInput(), 6);
    });

    it("Пустая строка - null", function() {
      prompt.returns("");
      assert.strictEqual(sumInput(), 0);
    });

    it("Отмена - null", function() {
      prompt.returns(null);
      assert.strictEqual(sumInput(), 0);
    });

    it("Ряд чисел, после - отмена", function() {
      prompt.onCall(0).returns("not a number");
      prompt.onCall(1).returns("not a number again");
      prompt.onCall(2).returns("1");
      prompt.onCall(3).returns("2");
      prompt.onCall(4).returns("3");
      prompt.onCall(5).returns(null);
      assert.strictEqual(sumInput(), 6);
    });
  });

  describe("getMaxSubSum", function() {
    it("maximal subsum of [1, 2, 3] equals 6", function() {
      assert.equal(getMaxSubSum([1, 2, 3]), 6);
    });
  
    it("maximal subsum of [-1, 2, 3, -9] equals 5", function() {
      assert.equal(getMaxSubSum([-1, 2, 3, -9]), 5);
    });
  
    it("maximal subsum of [-1, 2, 3, -9, 11] equals 11", function() {
      assert.equal(getMaxSubSum([-1, 2, 3, -9, 11]), 11);
    });
  
    it("maximal subsum of [-2, -1, 1, 2] equals 3", function() {
      assert.equal(getMaxSubSum([-2, -1, 1, 2]), 3);
    });
  
    it("maximal subsum of [100, -9, 2, -3, 5] equals 100", function() {
      assert.equal(getMaxSubSum([100, -9, 2, -3, 5]), 100);
    });
  
    it("maximal subsum of [] equals 0", function() {
      assert.equal(getMaxSubSum([]), 0);
    });
  
    it("maximal subsum of [-1] equals 0", function() {
      assert.equal(getMaxSubSum([-1]), 0);
    });
  
    it("maximal subsum of [-1, -2] equals 0", function() {
      assert.equal(getMaxSubSum([-1, -2]), 0);
    });
  
    it("maximal subsum of [2, -8, 5, -1, 2, -3, 2] equals 6", function() {
      assert.equal(getMaxSubSum([2, -8, 5, -1, 2, -3, 2]), 6);
    });
  });
});