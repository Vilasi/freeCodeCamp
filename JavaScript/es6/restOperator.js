function sum(...args) {
    const summedArgs = args.reduce((total, elem) => total + elem, 0);
    return summedArgs;
  }
  console.log(sum(1, 2, 3)); // 6