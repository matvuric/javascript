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

// Перевод текста вида border-left-width в borderLeftWidth

function camelize(str) {
  return str.split('-').map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)).join('');
}

// Фильтрация по диапазону

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

// Фильтрация по диапазону "на месте"

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (a > arr[i] || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }  
  }
}

// Сортировать в порядке по убыванию

function sortDescend(arr) {
  return arr.sort((a, b) => b - a);
}

// Скопировать и отсортировать массив

function copySorted(arr) {
  return arr.slice().sort();
}

// Расширяемый калькулятор

function Calculator(str) {
  this.calculate = function(str) {
    let arr = str.split(' ');
    this.a = arr[0];
    this.b = arr[2];

    this.sum() = function() {
      return this.a + this.b;
    }

    this.subtract() = function() {
      
    }

    return (arr[1] == '+') ? (+arr[0] + +arr[2]) : (arr[1] == '-') ? (+arr[0] - +arr[2]) : 'Не знаю такой команды';
  }

  this.addMethod = function(name, func) {

  }

}
// Тесты

describe("Массивы", function()  {
  describe("Сумма введенных чисел - sumInput", function() {

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

  describe("Подмассив наибольшей суммы - getMaxSubSum", function() {
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

  describe("Перевод текста вида border-left-width в borderLeftWidth - camelize", function() {

    it("leaves an empty line as is", function() {
      assert.equal(camelize(""), "");
    });
  
    it("turns background-color into backgroundColor", function() {
      assert.equal(camelize("background-color"), "backgroundColor");
    });
  
    it("turns list-style-image into listStyleImage", function() {
      assert.equal(camelize("list-style-image"), "listStyleImage");
    });
  
    it("turns -webkit-transition into WebkitTransition", function() {
      assert.equal(camelize("-webkit-transition"), "WebkitTransition");
    });
  
  });

  describe("Фильтрация по диапазону - filterRange", function() {

    it("returns the filtered values", function() {
  
      let arr = [5, 3, 8, 1];
  
      let filtered = filterRange(arr, 1, 4); 
  
      assert.deepEqual(filtered, [3, 1]);
    });
  
    it("doesn't change the array", function() {
  
      let arr = [5, 3, 8, 1];
  
      let filtered = filterRange(arr, 1, 4); 
  
      assert.deepEqual(arr, [5,3,8,1]);
    });
  });

  describe("Фильтрация по диапазону 'на месте' - filterRangeInPlace", function() {

    it("returns the filtered values", function() {
  
      let arr = [5, 3, 8, 1];
  
      filterRangeInPlace(arr, 2, 5); 
  
      assert.deepEqual(arr, [5, 3]);
    });
  
    it("doesn't return anything", function() {
      assert.isUndefined(filterRangeInPlace([1,2,3], 1, 4)); 
    });
  });

  describe("Сортировать в порядке по убыванию - sortDescend", function() {

    it("returns the sorted values [1, 2, 3, 4]", function() {
  
      let arr = [1, 2, 3, 4];
  
      assert.deepEqual(sortDescend(arr), [4,3,2,1]);
    });

    it("returns the sorted values [-1, -2, 3, 4]", function() {
  
      let arr = [-1, -2, 3, 4];
  
      assert.deepEqual(sortDescend(arr), [4,3,-1,-2]);
    });
  });

  describe("Скопировать и отсортировать массив - copySorted", function() {

    it("Исходный массив не изменился, вернулся новый измененный массив", function() {
  
      let arr = ["HTML", "JavaScript", "CSS"];
      let sorted = copySorted(arr); 
  
      assert.deepEqual(arr, ["HTML", "JavaScript", "CSS"]);
      assert.deepEqual(sorted, ["CSS", "HTML", "JavaScript"]);
    });
  });

  describe("Calculator", function() {
    let calculator;
  
    before(function() {
      calculator = new Calculator;
    });
  
    it("calculate(12 + 34) = 46", function() {
      assert.equal(calculator.calculate("12 + 34"), 46);
    });
  
    it("calculate(34 - 12) = 22", function() {
      assert.equal(calculator.calculate("34 - 12"), 22);
    });
  
    it("add multiplication: calculate(2 * 3) = 6", function() {
      calculator.addMethod("*", (a, b) => a * b);
      assert.equal(calculator.calculate("2 * 3"), 6);
    });
  
    it("add power: calculate(2 ** 3) = 8", function() {
      calculator.addMethod("**", (a, b) => a ** b);
      assert.equal(calculator.calculate("2 ** 3"), 8);
    });
  });
});

