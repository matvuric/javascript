// Сумма пользовательских чисел
            
function sum() {
  a = +prompt('a:', 0);
  b = +prompt('b:', 0);
  return a + b;
}

// Ввод числового значения

function readNumber() { 
  let x;

  do {
    x = prompt('Введите число:', 0);
  } while (!isFinite(x));
  
  if (x === null || x === '') return null;

  return +x;
}

// Случайное число от min до max

function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Случайное целое число от min до max

function randomInteger(min, max) {
  return Math.random() * (max - min + 1) + min - 0.5;
}

// Тесты

beforeEach(function() {
  sinon.stub(window, "prompt");
});

afterEach(function() {
  prompt.restore();
});

describe("Числа", function()  {
  describe("readNumber", function() {

    it("if a number, returns it", function() {
      prompt.returns("123");
      assert.strictEqual(readNumber(), 123);
    });

    it("if 0, returns it", function() {
      prompt.returns("0");
      assert.strictEqual(readNumber(), 0);
    });

    it("continues the loop until meets a number", function() {
      prompt.onCall(0).returns("not a number");
      prompt.onCall(1).returns("not a number again");
      prompt.onCall(2).returns("1");
      assert.strictEqual(readNumber(), 1);
    });

    it("if an empty line, returns null", function() {
      prompt.returns("");
      assert.isNull(readNumber());
    });

    it("if cancel, returns null", function() {
      prompt.returns(null);
      assert.isNull(readNumber());
    });

  });
});