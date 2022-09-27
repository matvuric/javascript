// Фильтрация уникальных элементов массива

function unique_set(arr) {
  let set = new Set(arr);
  return Array.from(set.values());
}

// Фильтрация анаграмм

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }
  
  console.log(map);
  return Array.from(map.values());
}

// Тесты

describe("Map и Set", function() {
  describe("Фильтрация уникальных элементов массива - unique", function() {
    it("removes non-unique elements", function() {
      let strings = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
      ];

      assert.deepEqual(unique_set(strings), ["Hare", "Krishna", ":-O"]);
    });

    it("does not change the source array", function() {
      let strings = ["Krishna", "Krishna", "Hare", "Hare"];
      unique_set(strings);
      assert.deepEqual(strings, ["Krishna", "Krishna", "Hare", "Hare"]);
    });
  });

  function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
  }
  
  describe("Фильтрация анаграмм - aclean", function() {
  
    it("returns exactly 1 word from each anagram set", function() {
      let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
      let result = aclean(arr);
      assert.equal(result.length, 3);
  
      assert.equal(intersection(result, ["nap", "PAN"]).length, 1);
      assert.equal(intersection(result, ["teachers", "cheaters", "hectares"]).length, 1);
      assert.equal(intersection(result, ["ear", "era"]).length, 1);
  
    });
  
    it("is case-insensitive", function() {
      let arr = ["era", "EAR"];
      assert.equal(aclean(arr).length, 1);
    });
  
  });
});