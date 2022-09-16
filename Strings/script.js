describe("ucFirst", function() {
  it('Переводит первый символ в верхний регистр', function() {
    assert.strictEqual(ucFirst("john"), "John");
  });

  it("Не умирает на пустых строках", function() {
    assert.strictEqual(ucFirst(""), "");
  });
});

describe("checkSpam", function() {
  it('считает спамом "buy ViAgRA now"', function() {
    assert.isTrue(checkSpam('buy ViAgRA now'));
  });

  it('считает спамом "free xxxxx"', function() {
    assert.isTrue(checkSpam('free xxxxx'));
  });

  it('не считает спамом "innocent rabbit"', function() {
    assert.isFalse(checkSpam('innocent rabbit'));
  });
});

describe("truncate", function() {
  it("усекает строку до заданной длины (включая многоточие)", function() {
    assert.equal(
      truncate("Вот, что мне хотелось бы сказать на эту тему:", 20),
      "Вот, что мне хотело…"
    );
  });

  it("не меняет и так короткие строки", function() {
    assert.equal(
      truncate("Всем привет!", 20),
      "Всем привет!"
    );
  });

});

describe("extractCurrencyValue", function() {

  it("возвращает для строки $120 число 120", function() {
    assert.strictEqual(extractCurrencyValue('$120'), 120);
  });


});