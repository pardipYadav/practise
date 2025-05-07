const counterModule = (function () {
  let count = 0;
  return {
    increment: function () {
      ++count;
      console.log("count", count++);
    },
    reset: function () {
      count = 0;
      console.log("counter is reset", count);
    },
    getcount: function () {
      return count;
    },
  };
})();

counterModule.increment();
counterModule.increment();
counterModule.increment();

console.log(counterModule.getcount());
counterModule.reset();

//But you cannot access count directly
console.log(counterModule.count);
